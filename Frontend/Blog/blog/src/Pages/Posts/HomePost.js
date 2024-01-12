import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {useEffect, useState} from "react";
import {GetAllPosts, GetCommentsByPostId, GetPostById, GetPostsById} from "../../setup/axios/providers";
import Main from '../HomePage/Main';
import { useParams, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import CommentsPost from './CommentsPost';
import RichEditor from './RichEditor';


export default function HomePost() {
   
    const params = useParams();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
     
        GetPostById(params.postId)
            .then((data) => {
              setPost(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            GetCommentsByPostId(params.postId)
            .then((data) => {
                setComments(data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    console.log(comments);

    return (
               <>
                <Grid  container
                spacing={2}
                
                direction="column"
                alignItems="center"
                justifyContent="center"
                >
               <Card style={{marginTop: "2%", backgroundColor: "#C5C4C4"}}  >
                <CardContent >
                    <CardHeader title={"Post: " +post.title}/>
                    <Typography color="text.secondary">Data stworznie: {post.createdDate}</Typography> 
                    <Typography variant="body2">{post.body}</Typography> 
                </CardContent>
               </Card>
               {comments.map((comment, index) => (
                    <CommentsPost first_name={comment.userName} body={comment.body} />
                ))}
                <RichEditor/>
               </Grid>
               </>
    );
}