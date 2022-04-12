import React from 'react'; 
import './LightBulb.css'

function LightBulb(props) {
    return <div className={'lightbulb ${props.toggleState}'}></div>
}

export default LightBulb;