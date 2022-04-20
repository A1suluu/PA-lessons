import React from "react";

function FormTodo ({addTodo}) {
    function myCallback () {
        const newTodo = document.getElementsByTagName("input").value
        document.getElementsByTagName("input") = " "
        return addTodo(newTodo)
    }
    return (
        <div>
            <input type={text}></input>
            <button onClick={myCallback}>Save</button>
        </div>
    )
}

export default FormTodo

