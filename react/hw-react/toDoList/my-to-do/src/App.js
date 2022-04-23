import logo from './logo.svg';
import './App.css';
import FormTodo from './components/Form';
import TodoList from './components/TodoList';
import React from 'react'

function App() {
  const [todoState, setTodoState] = React.useState({
    todos: [],
  })

  function addTodo(text) {
    setTodoState({
      ...todoState,
      todos: todoState.todos.concat([text]),
    })
  }

  function changeInput(event) {
    setTodoState({
      ...todoState,
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <FormTodo addTodo={addTodo}/>
          <TodoList todos={todoState.todos}/>
        </div>
      </header>
    </div>
  );
}

export default App;
