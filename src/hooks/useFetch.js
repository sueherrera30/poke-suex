import  { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [response, setResponse] = useState(null); 
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
                setIsLoading(false);
            } catch {
                setError(error);
            }
        };
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { response, error, isLoading }
};

export default useFetch;
