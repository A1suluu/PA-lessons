import React, {useState} from 'react'
import TodoList from './TodoList'
import FormTodo from './FormTodo'

export default function TodoWithAPI() {
    const [todos, setTodos] = useState([])

    const api = "https://jsonplaceholder.typicode.com/todos/"
    
    fetch(api)
        .then(response => response.json())
        .then(resultJson => setTodos(resultJson))

    function addTodo(text) {
        const requestBody = {
            title: text,
            body: text,
            userId: 1,
        }

        const myHeaders = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: myHeaders,
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <FormTodo addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}