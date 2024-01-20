import { Button } from '@mui/material';
import React, { useState } from 'react';
import axiosAuth from './authInstance';
import { ENDPOINTS } from '../../utils/consts';

const RedirectButtonPayu = ({data}) => {

  
    const handleButtonClick=()=>{
        axiosAuth.post(ENDPOINTS.PayU,data)
        .then((response) => {
            console.log(response.data.requestMessage.requestUri);
            window.open(response.data.requestMessage.requestUri, '_blank');
        })  
        .catch((error) => {
            alert(error);
        })
    }

  return (
    <div>
     
      <Button
                  variant="contained"
                  onClick={handleButtonClick}
                  sx={{ mt: 3, ml: 1 }}
        >Płać</Button>
    </div>
  );
};

export default RedirectButtonPayu;
