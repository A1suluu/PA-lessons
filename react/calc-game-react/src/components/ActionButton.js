import React from "react"


export default function ActionButton({mark, fn}) {
    return (
        <span>
            &nbsp;
            <button onClick={fn}>{mark}</button>
        </span>
    )
}