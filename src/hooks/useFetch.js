import  { useEffect, useState } from 'react';

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
            }
        };
        fetchData();
    }, [error, options,url]);
    return { response, error, isLoading }
};

export default useFetch;
