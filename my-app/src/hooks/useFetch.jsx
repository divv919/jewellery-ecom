import { useEffect, useState } from "react";

export function useFetch(url){
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    const [error,setError] = useState(null);


    async function fetchData (){
        setIsLoading(true);
        try{
            const response = await fetch(url);
        const dataFetched = await response.json();
        setData(dataFetched);

        }catch(err){
            setError(err);
        }finally{
            setIsLoading(false)
        }
        
    }

    const reFetch = ()=>{
        fetchData();
    }

    useEffect(()=>{
        
        fetchData();

        
    },[url]);

    return {data, isLoading, error, reFetch};
}