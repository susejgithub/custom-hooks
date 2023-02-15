import { useEffect, useState } from "react"


export const useFetch = (url, counter) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getfetch = async () => {

        setstate({
            ...state,
            data: null,
            isLoading: false,
        });

        const resp = await fetch(url);
        const data = await resp.json();
        //console.log(data);
        setstate({
            data: data,
            isLoading: false,
            hasError: null,
        });
    }
  
    useEffect(() => {
      

        getfetch();

    }, [counter])
    

  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        url
    }; 
}
