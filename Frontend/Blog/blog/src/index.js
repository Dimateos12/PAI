import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lime, purple } from '@mui/material/colors';

var colortext = localStorage.getItem("TextColor");

const theme = createTheme({
  palette: {
    primary: {
      main: colortext,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>

  <React.StrictMode>
      <BrowserRouter>
              <App />
      </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>


 
);

