import React from "react";


function TodoList (todos, toggleComplete, removeTodo) {
    return (
        <ul>
            {
                todos.map(todo => (
                    <Todo key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}/>
                ))
            }
        </ul>
    )
}

export default TodoList;