import { useEffect, useState } from "react";

export const useFetchCharacter = (url) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] =useState(true);
    


    useEffect(() => {
        const fectchInfo = async () => {
            try {
                const response = await fetch(url);
                const info = await response.json();
                console.log(info)
                setCharacter(info);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fectchInfo();
    }, [url]);
    return {character, loading };
};