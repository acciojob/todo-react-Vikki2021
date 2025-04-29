import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [input,setInput] = useState("");
  const [data,setData] = useState([]);

  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value)
    console.log(input);
  }

  function handleData() {
    setData([...data, input]);
    console.log(data)
    setInput(""); 
  }

  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h2>To-Do List</h2>
        <div>
        <input type="text" onChange={handleInput}/>
        <button onClick={handleData}>Add Todo</button>
        </div>
        <Todo input={input} data={data} />
        
    </div>
  )
}

export default App
