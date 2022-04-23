import React, {useState} from 'react'


export default function FormTodo(props) {

    const [inputState, setInputState] = useState("")

    function changeInput(event) {
        setInputState(event.target.value)
    }

    const buttonStyle = {
        background: "#61dafb",
        border: "1px solid #61dafb",
        borderRadius: "5px",
        padding: "3px 5px",
    }

    return (
        <div>
            <input value={inputState} onChange={changeInput} type="text"/>&nbsp;
            <button style={buttonStyle} onClick={() => props.addTodo(inputState)}>Добавить</button>
        </div>
    )
}