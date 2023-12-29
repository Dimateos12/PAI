import * as React from 'react';
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { jwtDecode } from "jwt-decode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



export default function ProfilePage() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token'); 

        setToken(jwtDecode(storedToken));
    }, []);

    
    console.log(token);

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Witaj  {token.name}</Typography>
                
            </CardContent>
        </Card>
    );
};

