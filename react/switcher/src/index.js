import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Lightbulb from './components/Lightbulb'
import Switch from './components/Switch'

function App() {
  const [state, setState] = useState('off')

  return (
    <div>
      <Lightbulb toggleState={state} />
      <Switch toggleState={state} setToggle={setState} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
