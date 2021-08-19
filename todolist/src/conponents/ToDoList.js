import React, {useMemo} from 'react';
//import Component
import Todo from './Todo';

const ToDoList = ({toDos, setToDos}) =>{
  
  function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

  const reversedTodos = useMemo(() => {
    return reverseArr(toDos)
  },[toDos,reverseArr ]);
  console.log("TodoList Component Rendering");
  //console.log(reversedTodos);
  //console.log(toDos);
    return(

    <div className="todo-container">
      <ul className="todo-list">
        {reversedTodos.map((todo) =>(
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

export default React.memo(ToDoList);
