import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {useEffect, useState} from "react";
import {GetAllPosts, GetPostById, GetPostsById} from "../../setup/axios/providers";
import Main from '../HomePage/Main';
import { useParams, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';


export default function HomePost() {
   
    const params = useParams();

    const [post, setPost] = useState([]);
  
    useEffect(() => {
     
        GetPostById(params.postId)
            .then((data) => {
              setPost(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    console.log(post);

    return (
               <>
                <Grid  container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                >
               <Card >
                <CardContent >
                    <CardHeader title={post.title}/>
                    <Typography color="text.secondary">Data stworznie: {post.createdDate}</Typography> 
                    <Typography variant="body2">{post.body}</Typography> 
                </CardContent>
               </Card>
               </Grid>
               </>
    );
}