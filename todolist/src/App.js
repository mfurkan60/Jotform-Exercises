import React, {useState} from "react";
import './App.css';

//import components 
import Form from './conponents/Form';
import Header from "./conponents/Header";
import ToDoList  from "./conponents/ToDoList";




function App() {
  const[inputText,setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
       <Header  />
       <Form toDos={toDos} setToDos={setToDos} setInputText={setInputText} inputText={inputText}  />
       <ToDoList toDos={toDos} setToDos={setToDos}  />
       
    </div>
  );
}

export default App;
