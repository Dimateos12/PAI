import { Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import * as React from 'react';


export default function AddPost(props) {
   
    const {first_name, body} = props;


    return (
               <>
              <Typography variant='h4'>Dodaj post</Typography>
              <TextField helperText='Tytuł postu'/>
               </>
    );
}