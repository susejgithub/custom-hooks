import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";


const initialstate = [];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    
   

    const [todos, dispatch] = useReducer(todoReducer, initialstate, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    

    const handleNewTodo = (todo) =>{
        

        const action = {
            type:'[TODO] Add Todo',
            payload: todo,
        }

        console.log(action);

        dispatch(action);
    }

    const handleDeleteTodo = (id) =>{
        const action = {
            type:'[TODO] Remove Todo',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) =>{
        const action = {
            type:'[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action);
    }
  
  
    return {
        todos:todos,
        handleNewTodo:handleNewTodo,
        handleDeleteTodo:handleDeleteTodo,
        handleToggleTodo:handleToggleTodo,
        todosCount: todos.length,
        pendingtodosCount: todos.filter( todo => !todo.done ).length,




  }
}
