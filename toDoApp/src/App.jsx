import { useContext, useState } from "react";
import ToDoProvider from "./contexts";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([])
  
  const addToDo = (todo) => {
    setTodo((prev)=>[{id:Date.now, ...todo}, ...prev])
  }
  const upadateToDo = (id, todo) => {
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id===id)?todo :prevTodo ))
  }
  const deleteToDo = (id) => {
    setTodo((prev)=>prev.filter((prev)=>prev.id !== id))
  }
  const toggleComplete = (id) => {
    setTodo((prev)=>prev.map((prev)=>prev.id===id)?{...prev, completed:!prev.completed}:prev)
  }

  // Working On Local Storage functionality---
  //
  ///
  //START HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //
  //
  //
  


  return (
    <ToDoProvider value={{todos,addToDo,deleteToDo, upadateToDo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
