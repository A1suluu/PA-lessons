import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MasterDetails() {
    const [master, setMaster] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        photo: "",
    })

    const {id} = useParams()

    // const axios = require('axios').default;

    function getMaster(){
        axios.get(`http://kaiaman.pythonanywhere.com/masters/${id}/`)
            .then(response => setMaster(response.data))        
    }

    useEffect(getMaster, [])

    const styles = {
        image: {
            width: "30%" 
        }
    }

    return (
        <div>
            <h3>Имя - {master.name}</h3>
            <h4>ID: {master.id}</h4>
            <h4>Описание</h4>
            <p>{master.description}</p>
            <h4>Цена: {master.price}</h4>
            <img style={styles.image} src={master.photo}/>
        </div>
    )

}