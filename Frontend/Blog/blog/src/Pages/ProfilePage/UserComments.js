import * as React from 'react';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, CardHeader, Grid, Switch, TextField } from '@mui/material';
import { GetAllPosts } from '../../setup/axios/providers';
import Main from '../HomePage/Main';

export default function UserComments() {
   

    return (
        <>
        <Card
         sx={{ backgroundColor:  '#E7E4E3 '  }}
        >
            <CardHeader title="Twoje komentarze" />
           
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <Card>
                            <CardHeader title="Post: Getting Started with Python"/>
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Ja tak naprawde jebie tego pythona jezyk bez klamerek nie polecam 
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Usuń</Button>
                                <Button size="small">Przejdź do postu</Button>
                             </CardActions>        
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </>
    );
};
