import {useState} from 'react'
import ToDo from './to-do'
import ToDoForm from './to-do-form'


function App() {
  const [todos, setTodos] = useState({})

  const addTask = () => {
    
  }

  const removeTask = () => {

  }

  const handleToggle = () => {

  }
  return (
    <div className="App">
      <header>
      <h1> List of tasks:</h1>
      </header>
      <ToDoForm />
      {todos.map(() => {
        return (
          <ToDo key={todos.id}/>
        )
      })}
    </div>
  );
}

export default App;
