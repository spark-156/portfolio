import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [state, setState] = useState(null);
    useEffect(() => {
        setState(null);
        fetch(url)
            .then((v) => v.json())
            .then((v) => setState(v));
    }, [url]);
    
    return state;
}