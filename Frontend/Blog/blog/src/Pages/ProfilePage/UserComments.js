import * as React from 'react';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, CardHeader, Grid, Switch, TextField } from '@mui/material';
import { GetAllPosts } from '../../setup/axios/providers';
import Main from '../HomePage/Main';

export default function UserComments({title, body, postId}) {
   

    return (
        <>
        <Card
         sx={{ backgroundColor:  '#E7E4E3 '  }}
        >
            <CardHeader  />
           
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <CardActionArea href={'/post/' + postId}>
                        <Card  sx={{minWidth: '500px'}}>
                            <CardHeader title={"Komentarz By: " + title}/>
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {body} 
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Usuń</Button>
                                <Button size="small">Przejdź do postu</Button>
                             </CardActions>        
                        </Card>
                        </CardActionArea>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </>
    );
};
