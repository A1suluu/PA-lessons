import React from 'react'
import TaskNumber from './TaskNumber'
import ActionButton from './ActionButton'
import MathSign from './MathSign'

export default function Task(props) {
    const taskStyle = {
        fontSize: "48px",
        color: "#eee",
        background: "black",
        marginBottom: "5px",
        display: "inline-block",
    }

    return (
        <div>
            <div style={taskStyle}>
              <TaskNumber num={props.num1}/>
              <MathSign value={props.currentSign}/>
              <TaskNumber num={props.number2} />
            </div>
            <ActionButton fn={props.changeSign} mark="+"/>
            <ActionButton fn={props.changeSign} mark="-"/>
            <ActionButton fn={props.changeSign} mark="/"/>
            <ActionButton fn={props.changeSign} mark="*"/>
            <br/>
        </div>
    )
}