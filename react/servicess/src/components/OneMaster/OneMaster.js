import React from 'react'
import {Link} from 'react-router-dom'
import "./OneMaster.css"

export default function OneMaster({master}) {
    return (
        <div className="master-item">
            <h3><Link to={`/master/${master.id}/`}>Имя - {master.name}</Link></h3>
            <p>{master.price}</p>
        </div>
    )
}