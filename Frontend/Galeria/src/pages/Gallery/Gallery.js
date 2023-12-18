import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/consts';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 1000,
        height: 1000,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


const Gallery = () => {
    const [news, setNews] = useState([]);
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Pobieranie danych z backendu (zakładając, że backend zwraca JSON)
                const response = await fetch(ENDPOINTS.GETGALLERY);

                // Sprawdzanie, czy odpowiedź jest OK
                if (!response.ok) {
                    throw new Error('Błąd pobierania danych');
                }

                // Parsowanie odpowiedzi do formatu JSON
                const result = await response.json();

                // Ustawienie danych w stanie komponentu
                setData(result.slice().sort((a, b) => a.displaySequence - b.displaySequence));
            } catch (error) {
                console.error('Wystąpił błąd:', error);
            }
        };

        // Wywołanie funkcji fetchData
        fetchData();
    }, []);

    return (

        <div className={classes.root}>
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Galeria </ListSubheader>
                </ImageListItem>
                {data.map((item) => (
                    <ImageListItem key={"item.img"}>
                        <img src={"https://localhost:7009"+item.filePath} alt={item.fileName} />
                        <ImageListItemBar
                            title={item.author}
                            subtitle={<span>by: {item.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${item.Id}`} className={classes.icon}>
                                    <PermIdentityIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );

};

export default Gallery;