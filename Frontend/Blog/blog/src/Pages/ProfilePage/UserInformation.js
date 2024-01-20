import * as React from 'react';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, CardHeader, Grid, Switch, TextField } from '@mui/material';
import { GetAllPosts, GetCommentByUserId } from '../../setup/axios/providers';
import Main from '../HomePage/Main';
import UserComments from './UserComments';
import { jwtDecode } from 'jwt-decode';

export default function UserInformation() {
    const [isSwitchOn, setIsSwitchOn] = useState(false); // Początkowy stan dla przycisku Switch
    const [comments, setComments] = useState([]);
    const [localStorageInfo,setLocalStorageInfo] = React.useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token'); 
        setLocalStorageInfo(jwtDecode(storedToken));
        GetCommentByUserId(2).then((response) => {
            console.log(response);
            setComments(response.data);
        }
        );
    }, []);
    
    const handleSwitchChange = () => {
        setIsSwitchOn(!isSwitchOn); // Zmiana stanu przycisku Switch
    };

    if(localStorageInfo.length === 0){
        return <></>;
    }

    return (
        <>
        <Card>
            <CardHeader title="Twoje dane" />
            <Switch
                checked={isSwitchOn}
                onChange={handleSwitchChange}
                inputProps={{ 'aria-label': 'Switch demo' }}
            />

            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                            disabled={!isSwitchOn} // Ustawienie stanu disabled w zależności od przycisku Switch
                            id="filled-disabled"
                            label="Imie"
                            defaultValue={localStorageInfo.given_name}
                            variant="filled"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            disabled={!isSwitchOn}
                            id="filled-disabled"
                            label="Nazwisko"
                            defaultValue={localStorageInfo.family_name}
                            variant="filled"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            disabled={!isSwitchOn}
                            id="filled-disabled"
                            label="Hasło"
                            defaultValue="Jabłoński"
                            variant="filled"
                            type="password"
                        />
                    </Grid>
                  
                </Grid>
                <Button variant="contained" disabled={!isSwitchOn} style={{ marginTop: '2%' }}>Aktualizuj Dane</Button>
            </CardContent>
        </Card>
        <Typography variant='h5'>Twoje Komentarze</Typography>
        {comments.map((comment,index) => (
                     <UserComments key={index} postId={comment.postId} title={localStorageInfo.given_name} body={comment.body}/>
             ))}
        </>
    );
};
