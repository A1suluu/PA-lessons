import React from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

export default function TodoWithState () {
    const [todoState, setTodoState] = React.useState({
        todos: [],
      })

    function addTodo(text) {
        const todoObj = {
            title: text,
        }

        setTodoState({
          ...todoState,
          todos: todoState.todos.concat([text])
        })
      }
    
    return (
        <div className="App">
          <header className="App-header">
            <div>
              <FormTodo addTodo={addTodo}/>
              <TodoList todos={todoState.todos}/>
            </div>
          </header>
        </div>
      );
}