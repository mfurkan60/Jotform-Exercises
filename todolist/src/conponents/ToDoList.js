import React from 'react';
//import Component 
import Todo from './Todo';

const ToDoList = ({toDos, setToDos}) =>{
    return(
       
    <div className="todo-container">
      <ul className="todo-list">
        {toDos.map((todo) =>(
            <Todo 
            setToDos = {setToDos}
            text={todo.text} 
            id={todo.id}
             toDos={toDos}
            todo ={todo}
            />
        ))}  
      </ul>
    </div>
 
    );
}

export default ToDoList;

