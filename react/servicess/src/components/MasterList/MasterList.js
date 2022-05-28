import React, {useState, useEffect} from 'react'
import "./MasterList.css"
import OneMaster from '../OneMaster/OneMaster'
import axios from 'axios'


export default function MasterList() {
    const [list, setList] = useState([])

    function getList() {
        axios.get("http://kaiaman.pythonanywhere.com/masters/")
            .then(response => setList(response.data))
    }

    useEffect(getList, [])

    return (
        <div className='master-list'>
            <h2>Список мастеров</h2>
            {list.map((master) => <OneMaster master={master} key={master.id}/>)}
        </div>
    )
}