import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';

const ColorPickerComponent = ({ colorName }) => {
  const [color1, setColor1] = useState(localStorage.getItem("CommentColor"));
  const [color2, setColor2] = useState(localStorage.getItem("PostColor"));
  const [color3, setColor3] = useState(localStorage.getItem("TextColor"));

  const handleColorChange = (colorNumber, event) => {
    switch (colorNumber) {
      case 1:
        setColor1(event.target.value);
        break;
      case 2:
        setColor2(event.target.value);
        break;
      case 3:
        setColor3(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleApplyColors = () => {
    localStorage.setItem("CommentColor", color1);
    localStorage.setItem("PostColor", color2);
    localStorage.setItem("TextColor", color3);
    window.location.reload();
  };

  return (
    <div>
      <Box display="flex" alignItems="center" flexDirection="column">
      <Typography mt={2}>{colorName ? colorName : "Kolor komentarzy"}</Typography>
        <input type="color" value={color1} onChange={(e) => handleColorChange(1, e)} />
        <Typography mt={2}>{colorName ? colorName : "Kolor postów"}</Typography>
        <input type="color" value={color2} onChange={(e) => handleColorChange(2, e)} />
        <Typography mt={2}>{colorName ? colorName : "Kolor tekstu"}</Typography>
        <input type="color" value={color3} onChange={(e) => handleColorChange(3, e)} />
        <Button  mt={2} variant="contained" color="primary" onClick={handleApplyColors}>
         Akceptuj kolory 
        </Button>
      </Box>
    </div>
  );
};

export default ColorPickerComponent;
