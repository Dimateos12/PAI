    import * as React from 'react';
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { jwtDecode } from "jwt-decode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader, Grid } from '@mui/material';
import { GetAllPosts, GetPostById, GetPostByUserId } from '../../setup/axios/providers';
import Main from '../HomePage/Main';
import UserInformation from './UserInformation';



export default function ProfilePage() {
    const [token, setToken] = useState(null);
    const [id,setId] = useState(null);
   

    

    const [allPost, setAllPost] = useState([]);
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {
        
            GetPostByUserId(2)
            .then((data) => {
              setAllPost(data.data);
              setLoading(false);
            })
            .catch((error) => {
                console.error('Error in GetFeatured:', error);
            });
            
        
    }, []);

    if(isLoading){
        return true;
    }

    return (
        <Card>
            <CardHeader title="Witaj Mateusz Jabłoński" />
                
            <CardContent>
                <Grid container spacing={2} >
                    <Grid item xs={6} md={5}>
                        <Card>
                            <CardContent>
                                <Main title="Twoje posty" posts={allPost} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={7}>
                         <UserInformation/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

