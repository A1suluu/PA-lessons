import React from 'react'
import TodoItem from './TodoItem'


function TodoList({todos}) {
    return (
        <div>
            {todos.map((todoObject, index) => <TodoItem todoObject={todoObject} key={index} id={index}/>)}
        </div>
    )
}

export default TodoList