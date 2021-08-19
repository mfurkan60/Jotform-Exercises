import React, {useState} from "react";
import './App.css';

//import components
import Form from './conponents/Form';
import Header from "./conponents/Header";
import ToDoList  from "./conponents/ToDoList";




function App() {
   
  return (
    <div className="App">
       <Header title ="MasterWeb2000 React ToDoList"/>
         
          
       <Form/>
       

    </div>
  );
}

export default App;
