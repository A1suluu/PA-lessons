import './App.css';
import React from 'react';
import MathSign from './components/MathSign';
import HistoryList from './components/HistoryList';
import TaskNumber from './components/TaskNumber';
import Counter from './components/Counter';
import ActionButton from './components/ActionButton';


function App() {
  const [state, setState] = React.useState({
      num1: Math.ceil(Math.random() * 100),
      num2: Math.ceil(Math.random() * 100),
      result: "",
      correct: 0,
      wrong: 0,
      currentSign: "+",
      history: []
  })

  function changeRes(event) {
      setState({
          ...state,
          result: event.target.value
        })
  }

  function check(event) {
      if (event.key === "Enter") {
          const currentSign = state.currentSign
          let isRight = false

          if (currentSign == "+"){
              isRight = state.num1 + state.num2 === Number(state.result)
          } else if (currentSign == "-") {
              isRight = state.num1 - state.num2 === Number(state.result)
          } else if (currentSign == "*") {
              isRight = state.num1 * state.num2 === Number(state.result)
          } else if (currentSign == "/") {
              isRight = state.num1 / state.num2 === Number(state.result)
          }

          let task = {
            num1: state.num1,
            num2: state.num2,
            sign: state.currentSign,
            result: state.result,
            isCorrect: isRight,
          }

          if (isRight) {
                setState({
                    ...state,
                    correct: state.correct + 1,
                    num1: Math.ceil(Math.random() * 100),
                    num2: Math.ceil(Math.random() * 100),
                    result: "",
                    history: state.history.concat([task])
                })
          } else {
                setState({
                    ...state,
                    wrong: state.wrong + 1,
                    history: state.history.concat([task])
                })
          }
      }                 
  }

  function changeSign(event) {
      setState({
          ...state,
          currentSign: event.target.textContent,
          num1: Math.ceil(Math.random() * 100),
          num2: Math.ceil(Math.random() * 100),
      })
  }

  const elemStyle = {
      inputStyle: {
          color: "blue",
      }
  }

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
              <TaskNumber num={state.num1}/>
              <MathSign value={state.currentSign}/>
              <TaskNumber num={state.num2} />
          </div>
          <ActionButton fn={changeSign} mark="+"/>
          <ActionButton fn={changeSign} mark="-"/>
          <ActionButton fn={changeSign} mark="/"/>
          <ActionButton fn={changeSign} mark="*"/>
          <br/>
          <input style={elemStyle.inputStyle} autoFocus={true} type="text" value={state.result} onChange={changeRes} onKeyPress={check}/>
          <Counter text="Correct" styleClass="right" currentValue={state.correct}/>
          <Counter text="Wrong" styleClass="error" currentValue={state.wrong}/>
          <HistoryList list={state.history}/>
      </div>
  )
}

export default App;

// npm install
// npm start
// ctrl z/x
