import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';

const ColorPickerComponent = ({tekst}) => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleApplyColor = () => {
    // Tutaj możesz obsłużyć wybrany kolor, na przykład zapisując go w stanie komponentu lub wysyłając go do API
    console.log('Wybrany kolor:', selectedColor);
  };

  return (
    <div>
    <Typography mt={2}>{tekst? tekst: "Informacja o kolorze"}</Typography>
    <Box display="flex" alignItems="center">
        <input type="color" value={selectedColor} onChange={handleColorChange} />
      <button onClick={handleApplyColor}>Zastosuj kolor</button>
  </Box>
  </div>
  );
};

export default ColorPickerComponent;
