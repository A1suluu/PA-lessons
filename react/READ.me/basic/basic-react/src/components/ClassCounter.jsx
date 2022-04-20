import React from 'react';

// class ClassCounter extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             value: " ls"
//         }
//     }

//     changeInput () {
//      this.setState({
//          value: this.state.target.value
//      })
//    }


//     render () {
//         return(
//             <div>
//                 <h1>{this.state.value}</h1>
//                 <input type="text" value={this.value} onChange={this.changeInput}/>
//             </div>
//         )
//     }
// }


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