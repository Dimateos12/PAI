import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import { GetSection } from '../../setup/axios/providers';
import { Button, ListItem } from '@mui/material';


const featuredPosts = [
    {
        title: 'Witamy na forum dyskusyjnym',
        date: 'Nov 12',
        description:
            'Fajne forum ktore  fajnie sie czyta i mozna pododawać wpisy',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    
];

export default function Cateogry() {
    const [section, setSection] = useState([]);

    
    useEffect(() => {
        GetSection()
            .then((sectionData) => {
                setSection(sectionData.data);
            })
            .catch((error) => {
                console.error('Error in GetSection:', error);
            });

    }, []);

    return (
        <Container maxWidth="lg">
         <Grid container >
            <Grid item xs={12}>
                <Typography variant='h4'>Kategorie</Typography>
            </Grid>
            <Grid>
            {section
                .map((sekcja) => (
                <Button  href={"/section/?id="+sekcja.id}>
                    * {sekcja.title}
                </Button>
             ))}
             </Grid>
         </Grid>
               
        </Container>
    );
}