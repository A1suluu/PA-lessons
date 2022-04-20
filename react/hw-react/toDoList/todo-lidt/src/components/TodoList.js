import React from 'react'
import TodoItem from './TodoItem'


function TodoList({todos}) {
    return (
        <ol>
            {todos.map((todoObject, index) => <TodoItem todoObject={todoObject} key={index}/>)}
        </ol>
    )
}

export default TodoList