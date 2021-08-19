import React, {useCallback, useState } from 'react';
import ToDoList from './ToDoList';


const Form = () =>{
  const [inputText,setInputText] = useState("");
  const [toDos, setToDos] = useState([]);


    const inputTextHandler = useCallback( (e) =>{
      //console.log("İnput Degeri algılandı")

       setInputText(e.target.value);
    }, [setInputText]);

    const submitTodoHandler = (e)=>{
      console.log("sumbit to do Handler");
      
       e.preventDefault();
       setToDos([
            ...toDos,
            {text: inputText, complated: false, id: Math.floor(Math.random()*100)}
       ]);
       setInputText(e.target.value = "");
    }
    console.log("form component rendering");
    return(
        <div>
          
            <form>
      <input value={inputText} onChange={inputTextHandler} type="text" class="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-check-circle"></i>
      </button>
      <div className="select">
        <select name="todos" class="filter-todo">
          <option value="all">All Todos</option>
          <option value="completed">Completed Todos </option>
          <option value="important">Important Todos </option>
          <option value="uncompleted">Uncompleted Todos</option>
        </select>
      </div>
    </form>

    <ToDoList toDos={toDos} setToDos={setToDos}  />
    </div>
    
    );
}

export default Form;
