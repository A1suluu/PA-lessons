
  
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function TodoPage() {
    const [state, setState] = React.useState({
        text: '',
        user: '',
    })

    const { id } = useParams()

    function ourRequest() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            setState({
                text: data.title,
                user: data.userId,
            })
        })
    }

    useEffect(ourRequest, [])


    return <div>'{state.text}' by user number: {state.user}</div>
}