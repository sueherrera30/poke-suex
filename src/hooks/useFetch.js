import React, { useEffect, useState } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null); 
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setIsLoading(false);
            } catch {
                setError(error);
                (   <>
                        <h1>Sorry, I'm broken, internet is having anxiety</h1>
                        <img alt="img" src='../../assets/cheems.png' />
                    </>
                )
            }
        };
        fetchData();
    }, []);
    return { response, error, isLoading }
};

export default useFetch;
