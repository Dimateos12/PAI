import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import * as React from 'react';


export default function CommentsPost(props) {
   
    const {first_name, body} = props;


    return (
               <>
              <Card style={{marginTop: "2%", maxWidth: "500px", minWidth: "500px"}}>
                <CardContent>
                    Komentarz
                    <CardHeader title="Autor: Nieznany"/>
                    <Typography variant='h6' color="GrayText"> {body} </Typography>
                </CardContent>
              </Card>
               </>
    );
}