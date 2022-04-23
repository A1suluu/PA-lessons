import React from 'react';


function ClassCounter () {
    const [value, setValue] = React.useState('Text in input')

    function changeInput (event) {
        setValue(event.target.value)
    }

    return (
        <div>
            <h1>{value}</h1>
            <input type="text" onChange={changeInput} />
        </div>
    )
}

export default ClassCounter;

