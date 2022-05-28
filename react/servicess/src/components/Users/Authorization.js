import {useState} from 'react'


export default function Authorization({functionForTokenUpdate}) {
    const [user, setUser] = useState({})

    function updateInput(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function auth(event) {
        event.preventDefault()
        fetch(
            'http://localhost:8000/api/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify({
                username: user.username,
                password: user.password,
              })
            }
          ).then(r=>r.json())
          .then(({key}) => {
            functionForTokenUpdate(key)
          })
    }

    return (
        <form onSubmit={auth}>
            <input type="text" name="username" placeholder='Логин' value={user.username ?? ""} onChange={updateInput}/>
            <input type="password" name="password" placeholder='Пароль' value={user.password ?? ""} onChange={updateInput}/>
            <button>Войти</button>
        </form>
    )
}