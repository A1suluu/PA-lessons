import React , {useState} from "react";
import uuid from "uuid";

function TodoForm (addTodo) {
    const [todo, setTodo] = useState({
       id: "",
       task: "",
       complete: false
    });
    

    function handdleTaskChange (event) {
        setTodo ({
            ...todo, 
            task: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({
                ...todo,
               id: uuid.v5()
            })
            setTodo({
                ...todo, 
                task: ""
            })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
             <input  name="task" value={todo.task} onChange={handdleTaskChange}></input>
             <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm;