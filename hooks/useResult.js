import React, { useEffect, useState } from 'react';
import yelp from "../api/yelp";

const useResult = () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const onTermSubmit = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    // term: term,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (e) {
            console.log("Error--", e);
            setErrorMessage('Something went wrong. Please try again later');
        }
    }

    useEffect(() => {
        onTermSubmit('pasta');
    }, [])

    return [results, errorMessage, onTermSubmit];
}

export default useResult;
