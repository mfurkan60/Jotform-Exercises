import React, {useMemo, useCallback} from 'react';
//import Component 
 

const Todo = ({text,id, todo, toDos,setToDos}) =>{
    //Delete from list
    const deleteHandler =  useCallback(() =>{
        setToDos(toDos.filter((el)=> el.id !== todo.id));
    
    },[]);
    console.log("Todo Component rendering");
    return(
    <div className="todo">
 <button className="id-value">{id}</button>
     <li className="todo-item"> {text} </li>
    
     <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    


 </div>
    );
}

export default Todo;

