import logo from './logo.svg';
import './App.css';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import React from 'react'

function App() {
  const [todoState, setTodoState] = React.useState({
    todos: []
  })

  function addTodo(newTodo) {
    setTodoState({
      ...todoState,
      todos: todoState.todos.concat([newTodo])
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


