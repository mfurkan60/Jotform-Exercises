import React from 'react';

const Form = ({setInputText, setToDos, toDos, inputText}) =>{
    const inputTextHandler = (e) =>{
        
       setInputText(e.target.value);
    };
    const submitTodoHandler = (e)=>{
       e.preventDefault();
       setToDos([
            ...toDos,
            {text: inputText, complated: false, id: Math.floor(Math.random()*100)}
       ]);
       setInputText(e.target.value = "");
    }
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
    </div>
    );
}

export default Form;

