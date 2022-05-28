import React from 'react'
import './Lightbulb.css'

function Lightbulb(props) {
  return <div className={`lightbulb ${props.toggleState}`}></div>
}

//className='lightbulb on' if props.toggleState === 'on'

export default Lightbulb
