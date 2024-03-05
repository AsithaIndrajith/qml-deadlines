import React, { createContext, useState, useEffect } from 'react';
import jsonData from '../data/data.json';

const CallForPapersContext = createContext();

const CallForPapersProvider = ({ children }) => {
    const [callForPapers, setCallForPapers] = useState([]);
    useEffect(() => {
        // Fetch data from the server
        const fetchData = async () => {
            try {
                // const response = await fetch('../data/data.json');
                // const result = await response.json();
                setCallForPapers(jsonData.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <CallForPapersContext.Provider value={{ callForPapers }}>
            {children}
        </CallForPapersContext.Provider>
    );
};

export { CallForPapersContext, CallForPapersProvider };
