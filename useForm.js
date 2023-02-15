import { useState } from "react";


export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm)

   

    const onInputChange = ({target})=>{
        //console.log(target);
        const {name, value} = target;
        setformState({
            ...formState,
            [name] : value
        }) 
    }

    

    const onResetForm = ()=>{
        
        setformState(
            initialForm
        ) 
    }


    return {
        formState,
        onInputChange,
        onResetForm,
        
        
    }
}
