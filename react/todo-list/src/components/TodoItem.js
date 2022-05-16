import React from 'react'
import {Link} from 'react-router-dom'

function clickCheckbox(event) {
    const id = event.target.id
    const liElem = document.getElementById(`li${id}`)
    if (event.target.checked) {
        liElem.style.textDecoration = "line-through"
    } else {
        liElem.style.textDecoration = "none"
    }
}

function TodoItem({todoObject, id}) {
    return (
        <div id={`li${id}`}>
            <input id={id} type="checkbox" onClick={clickCheckbox} />
            {id+1}. <Link to={`/todo/${id+1}/`}>{todoObject.title}</Link>
        </div>
    )
}

export default TodoItem
