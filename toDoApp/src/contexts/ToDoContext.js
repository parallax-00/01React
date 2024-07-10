import React, { useContext,createContext } from "react";

const ToDoContext = createContext({
    todos: [{
        id: 1,
        todo: "todo msg",
        completed: false
    }],
    addToDo: (todo) => { },
    deleteToDo: ( id) => { },
    updateToDo: (id, todo) => { },
    toggleComplete:(id)=>{}
})

export default ToDoContext;

export const useToDo = () => {
    return (
        useContext(ToDoContext)
    )
}

export const ToDoProvider = ToDoContext.Provider 