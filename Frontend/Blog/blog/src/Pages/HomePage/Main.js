import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import FeaturedPost from "./FeaturedPost";
import { Button } from '@mui/material';
import { EditPost } from '../../setup/axios/providers';

function Main(props) {
    const { posts, title, limit, postId,accept } = props;

    
    function handleClick(comment){
        comment.isActive = true;
        
        EditPost(comment,comment.id).then(window.location.reload());
     }

     
    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6">{title}</Typography>
            {posts
                .slice(0, limit)
                .map((post) => (
                    <div style={{ marginBottom: '5%', width: '180%' }}>
                    <FeaturedPost key={post.id} post={post} />
                    {accept? <><Button onClick={() => handleClick(post)} >Akceptuj</Button> <Button>Usuń</Button> </> : <></>}
                    </div>
             ))}
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default Main;