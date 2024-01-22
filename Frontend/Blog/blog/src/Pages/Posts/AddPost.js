import { Box, Button, Card, CardContent, CardHeader, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AddPostSender, GetSection } from '../../setup/axios/providers';
import { jwtDecode } from 'jwt-decode';

export default function AddPost(props) {

    const localStorageToken = ( localStorage.getItem("token") !== null);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [localStorageInfo,setLocalStorageInfo] = useState([]);


 
  useEffect(() => {
      if(localStorageToken){
          const storedToken = localStorage.getItem('token'); 
          setLocalStorageInfo(jwtDecode(storedToken));
      }
      GetSection()
      .then((data) => {
          setCategories(data.data);
      })

  }, []);
  
  
  function handlePostSubmission(){
   
    const dane = {
    "title": postTitle,
    "body": postBody,
    "userId": localStorageInfo.nameid,
    "isActive": false,
    "category": selectedCategory,
    "image": "https://example.com/image1.jpg"
   }

   AddPostSender(dane).then(()=>{
    window.location.reload();
   });
  

  };



  return (
    <Box maxWidth={600} mx="auto" mt={3}>
      <Card>
        <CardHeader title={<Typography variant="h4">Dodaj post</Typography>} />
        <CardContent>
          <TextField
            fullWidth
            label="Tytuł postu"
            variant="outlined"
            helperText="Podaj tytuł swojego postu"
            margin="normal"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <TextField
            fullWidth
            label="Treść postu"
            variant="outlined"
            helperText="Podaj treść swojego posta"
            margin="normal"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />


            <Select
              fullWidth
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              variant="outlined"
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.title}
                </MenuItem>
              ))}
            </Select>


        </CardContent>
        <Box p={2} textAlign="center">
          <Button variant="contained" onClick={handlePostSubmission}>Dodaj post</Button>
        </Box>
      </Card>
    </Box>
  );
}
