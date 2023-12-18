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
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

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


const Home = () => {
    const [news, setNews] = useState([]);
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
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
                setData(result);
            } catch (error) {
                console.error('Wystąpił błąd:', error);
            }
        };

        // Wywołanie funkcji fetchData
        fetchData();
        setLoading(false);
    }, []);
    
   console.log(data);
    return (
            
            <div>
                <DragDropContext onDragEnd={()=>{
                    console.log("Drag drop event occured");
                }}>
                
                <Droppable droppableId="ROOT" type="group">
                        {(provided) =>{
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {data.map((item, index) => (
                                    <Draggable 
                                        draggableId={item.id} 
                                        key={item.id} 
                                        index={index}>
                                        {(provided) =>(
                                            <div
                                                innerRef={provided.innerRef}
                                                {...provided.dragHandleProps} 
                                                {...provided.draggableProps}
                                                
                                            >
                                                <h2>ELO</h2>
                                                <h3>{item.fileName}</h3> 
                                            </div>
                                        )}
                                      
                                    </Draggable>
                                ))}
                            </div>
                        }}
                    </Droppable>    
                </DragDropContext>
            </div>
    );

};

export default Home;