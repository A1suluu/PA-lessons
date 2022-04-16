import React from 'react';


const myStyle = {
    textAlign: "center"
}

export default function OneHistoryRecord({recordObject}) {
    return (
        <tr>
            <td>{recordObject.num1}</td>
            <td style={myStyle}>{recordObject.sign}</td>
            <td>{recordObject.num2}</td>
            <td>{recordObject.result}</td>
            <td style={myStyle} className={recordObject.isCorrect ? "right" : "error"}>
                {recordObject.isCorrect ? "V" : "X"}
            </td>
        </tr>
    )
}
