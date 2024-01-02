import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import {useEffect, useState} from "react";
import {GetAllPosts, GetFeaturedPost, GetSection} from "../../setup/axios/providers";
import {LOCAL_STORAGE} from "../../utils/consts";
import Typography from "@mui/material/Typography";


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


const sidebar = {
    title: 'About',
    description:
        'Fajne forum JBC ELEKTRODE starych dziadów z internetem.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'X', icon: XIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};



export default function Blog() {
    const [section, setSection] = useState([]);
    const [featuredPost, setFeaturedPost] = useState([]);
    const [allPost, setAllPost] = useState([]);
    
    useEffect(() => {
        // Fetch section data
        GetSection()
            .then((sectionData) => {
                console.log(sectionData);
                setSection(sectionData.data);
            })
            .catch((error) => {
                console.error('Error in GetSection:', error);
            });

        // Fetch featured post data
        GetFeaturedPost()
            .then((data) => {
                
                setFeaturedPost(data);
            })
            .catch((error) => {
                console.error('Error in GetFeatured:', error);
            });

        GetAllPosts()
            .then((data) => {
              setAllPost(data.data);
            })
            .catch((error) => {
                console.error('Error in GetFeatured:', error);
            });
    }, []);

    return (
        <Container maxWidth="lg">
            <main>
                <MainFeaturedPost post={featuredPosts[0]} />
                <Typography variant="h6">Najnowszy post </Typography>
                <Grid container spacing={4}>
                    
                    <FeaturedPost key={featuredPost.title} post={featuredPost} />
                </Grid>
                <Grid container spacing={1} sx={{ mt: 1 }}>
                   
                    <Main title="Ostatnie posty" posts={allPost} limit={3} />
                 
                      <Sidebar
                          title={sidebar.title}
                          description={sidebar.description}
                          archives={sidebar.archives}
                          social={sidebar.social}
                      />  
                    
                </Grid>
            </main>
        </Container>
    );
}