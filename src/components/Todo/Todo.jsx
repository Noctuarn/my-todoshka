import React, { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

import Form from "../Form/Form";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });


  const updateHandler = (value) => {
    updateTodo(edit.id, value);

    setEdit({ 
        id: null,
        value: ""
    })
  }

  if(edit.id) {
    return <Form edit = {edit} onSubmit = {updateHandler}/>
  }

  return todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div className="" key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <FaRegEdit
            className="edit-btn"
            onClick={() => updateTodo({ id: todo.id, value: todo.text })}
          />
          <AiFillCloseCircle
            className="delete-btn"
            onClick={() => removeTodo(todo.id)}
          />
        </div>
      </div>
    );
  });
}

export default Todo;
