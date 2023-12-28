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
import {GetFeaturedPost, GetSection} from "../../setup/axios/providers";
import {LOCAL_STORAGE} from "../../utils/consts";





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
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
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



export default function Blog() {
    const [section, setSection] = useState([]);
    const [featuredPost, setFeaturedPost] = useState([]);

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
                console.log(data);
                setFeaturedPost(data.data);
            })
            .catch((error) => {
                console.error('Error in GetFeatured:', error);
            });
    }, []);

    return (
        <Container maxWidth="lg">
            <Header title="Forum Dyskusyjne" sections={section} />
            <main>
                <MainFeaturedPost post={featuredPost[0]} />
                <Grid container spacing={4}>
                    {featuredPosts.slice(1).map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    {/* Placeholder values, replace them with your actual data */}
                    <Main title="From the firehose" posts={[]} />
                    <Sidebar
                        title="Sidebar Title"
                        description="Sidebar Description"
                        archives={[]}
                        social={[]}
                    />
                </Grid>
            </main>
        </Container>
    );
}