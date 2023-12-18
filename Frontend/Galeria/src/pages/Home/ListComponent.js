import React, { useState, useEffect } from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {baseUrl, ENDPOINTS} from "../../utils/consts";
import axios from "axios";


const ListComponent = ({data}) => {
    
    const [characters, updateCharacters] = useState(data.slice().sort((a, b) => a.displaySequence - b.displaySequence));
    console.log(characters);
    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        const updatedItems = items.map((item, index) => ({
            ...item,
            displaySequence: index + 1,
            
        }));
        
        console.log(items);
        const sortedCharacters = updatedItems.slice().sort((a, b) => a.displaySequence - b.displaySequence);
        updateCharacters(sortedCharacters);
    }

    const handleButtonClick = async () => {
        try {

            const  URL = ENDPOINTS.EDITGALLERY;
            console.log(URL);
            const response = await axios.put(URL, characters);

            console.log(response.data);
            window.location.reload(false);
        } catch (error) {
            console.error('Błąd podczas wysyłania danych:', error);
        }
    };
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Kolejnosc Galerii</h1>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                        {(provided) => (
                            <ol className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {characters.map(({displaySequence, filePath}, index) => {
                                    return (
                                        <Draggable key={displaySequence.toString()} draggableId={displaySequence.toString()} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <p>
                                                        <img src={baseUrl+filePath} width={400} alt={`${displaySequence.toString()}` }/>
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ol>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
            <p>
                <button onClick={handleButtonClick}>Wyślij dane</button>
            </p>
        </div>
    );
}

export default ListComponent;