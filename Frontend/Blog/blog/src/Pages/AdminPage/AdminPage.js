import * as React from 'react';
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { jwtDecode } from "jwt-decode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardHeader, Grid } from '@mui/material';
import { EditComment, GetAllComents, GetAllPosts, GetCommentToAccept, GetPostToAccept } from '../../setup/axios/providers';
import Main from '../HomePage/Main';
import CommentsPost from '../Posts/CommentsPost';
import ColorPickerComponent from '../../setup/axios/ColorPickerComponent';
import { ColorPicker } from 'material-ui-color';


export default function AdminPage() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token'); 

        setToken(jwtDecode(storedToken));
    }, []);
    const [allPost, setAllPost] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        GetPostToAccept()
            .then((data) => {
              setAllPost(data);
              setLoading(false);
            })
            .catch((error) => {
                console.error('Error in GetFeatured:', error);
            });
            GetCommentToAccept()
            .then((data) => {
                setComments(data.data);
            })
    }, []);

    if(isLoading){
        return true;
    }
    function isActive(data){
        return data === true;
    }

    function handleClick(comment){
       comment.isActive = true;
       
       EditComment(comment,comment.id).then(window.location.reload());
    }


    return (
        <Card>
            <CardHeader title="Witaj Administratorze" />
                
            <CardContent>
                <Grid container spacing={2} >
                    <Grid item xs={6} md={4}>
                        <Card>
                            <CardContent>
                                <Main accept={true} title="Posty do akceptacji:" posts={allPost} />
                            </CardContent>
                           
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography variant='h6'>Komentarze do akceptacji:</Typography>
                    {comments.map((comment, index) => (
                        <>
                                <CommentsPost first_name={comment.userName} body={comment.body} />
                                <Button onClick={() => handleClick(comment)}>Akceptuj</Button>
                                <Button>Usun</Button>
                        </> 
                            ))}
                    </Grid>

                    <Grid item xs={6} md={1}>
                        <Typography variant='h6'>Wybierz kolory: </Typography>
                        <ColorPickerComponent tekst={"Kafelki komentarzy "}/>
                        
                    </Grid>
                    
                </Grid>
            </CardContent>
        </Card>
    );  
};

