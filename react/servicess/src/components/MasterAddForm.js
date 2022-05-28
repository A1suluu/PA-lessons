import axios from 'axios'
import React, {useState} from 'react'

const MasterAddForm = () => {
    const [state, setState] = useState({
        name: '',
        description: '',
        price: ''
    })

    function changeName(event) {
        setState({
            ...state,
            name: event.target.value
        })
    }

    function changeDescription(event) {
        setState({
            ...state,
            description: event.target.value
        })
    }

    function changePrice(event) {
        setState({
            ...state,
            price: event.target.value
        })
    }

    function sendForm(event) {
        event.preventDefault()

        axios.post(
            "http://kaiaman.pythonanywhere.com/masters/",
            state
        ).then(response => {
            console.log(response)
            if (response.status === 201) {
                alert("Мастер добавлен в базу")
                setState({
                    name: '',
                    description: '',
                    price: ''
                })
            }
        }).catch(error => {
            if (error.response.status === 400) {
                alert("Форма заполнена неверна")
            }
        })      
    }

    return (
        <form onSubmit={sendForm}>
            <input placeholder='Имя' maxLength='15' value={state.name} onChange={changeName} type="text"/><br/><br/>
            <input placeholder='Описание' required value={state.description} onChange={changeDescription} type="text"/><br/><br/>
            <input placeholder='Цена в час' value={state.price} type="number" onChange={changePrice}/><br/><br/>
            <button>Добавить</button>
        </form>
    )
}

export default MasterAddForm