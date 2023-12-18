import React, { useState, useEffect } from 'react';
import { ENDPOINTS } from '../../utils/consts';
import ListComponent from "./ListComponent";

const Home = () => {
    const [data,setData] = useState([]);
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
                setLoading(false);
            } catch (error) {
                console.error('Wystąpił błąd:', error);
            }
        };

        // Wywołanie funkcji fetchData
        fetchData();
    }, []);
    
    return (<> {isLoading? <></> : <ListComponent data={data} /> }</>);

};

export default Home;