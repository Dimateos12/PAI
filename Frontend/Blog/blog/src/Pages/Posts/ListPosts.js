import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {useEffect, useState} from "react";
import {GetAllPosts, GetPostsById} from "../../setup/axios/providers";
import Main from '../HomePage/Main';
import { useSearchParams } from 'react-router-dom';


export default function ListPosts() {
   

    const [allPost, setAllPost] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(() => {
     
        GetPostsById(searchParams.get('id'))
            .then((data) => {
              setAllPost(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
                <Grid  container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                >
                    <Main title="Lista postów" posts={allPost}/>
                </Grid>
    );
}