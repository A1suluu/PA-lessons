import React from "react";

function Todo (todo, toggleComplete) {
    function checkboxCLick() {
        toggleComplete(todo.id)
    }

    function removeClick() {
        removeTodo(todo.id)
    }

    return (
        <div style={{display: "flex"}}>
            <input type={checkbox} onClick={checkboxCLick}></input>
            <li style={{color: "white",
             textDecoration: todo.completed ? "line-through" : null }}
             >
                {todo.task} 
                </li>
            <button onClick={removeClick}>X</button>
        </div>
    )
}


export default Todo;