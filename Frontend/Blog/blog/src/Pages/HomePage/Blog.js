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
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import {useEffect, useState} from "react";
import {GetAllPosts, GetFeaturedPost, GetSection} from "../../setup/axios/providers";
import {LOCAL_STORAGE} from "../../utils/consts";
import Typography from "@mui/material/Typography";





const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

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

const posts = [post1, post2, post3];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
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

const posts1 = ['Post 1 content', 'Post 2 content', 'Post 3 content'];


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
            <Header title="Forum Dyskusyjne" sections={section} />
            <main>
                <MainFeaturedPost post={featuredPosts[0]} />
                <Typography variant="h6">Najnowszy post </Typography>
                <Grid container spacing={4}>
                    <FeaturedPost key={featuredPost.title} post={featuredPost} />
                </Grid>
                <Grid container spacing={1} sx={{ mt: 1 }}>
                    {/* Placeholder values, replace them with your actual data */}
                   
                    <Main title="Ostatnie posty" posts={allPost} />
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