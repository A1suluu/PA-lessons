import React from 'react'
import './Switch.css'

function Switch(props) {
  return (
    <button
      onClick={() => props.setToggle(props.toggleState === 'on' ? 'off' : 'on')}
    >
      {props.toggleState === 'on' ? 'turn off' : 'turn on'}
    </button>
  )
}

export default Switch
