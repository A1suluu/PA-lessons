import React from "react"


function Counter(props) {
    return (
        <div>
            {props.text}:&nbsp;
            <span className={props.styleClass}>
                {props.currentValue}
            </span>
        </div>
    )
  }

export default Counter;