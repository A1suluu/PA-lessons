import {useState, useEffect} from 'react'
import axios from 'axios'


export default function UserInfo() {
    const [token, setToken] = useState()
    const [user, setUser] = useState({})

    // function getToken() {
    //   const newToken = '123'
    //   setToken()
    // }

    // useEffect(getToken, [])

    function setLogin(e) {
      setUser({
        ...user,
        username: e.target.value
      })
    }

    function setPassword(e) {
      setUser({
        ...user,
        password: e.target.value
      })
    }

    function auth(e) {
      e.preventDefault()
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
          setToken(key)
        })
    }

    if (token) {
      return <div>Информация</div>
    } else {
      return (
        <form onSubmit={auth}>
          <input placeholder='Логин' value={user.username ?? ""} onChange={setLogin}/>
          <input placeholder='Пароль' value={user.password ?? ""} onChange={setPassword}/>
          <button>Войти</button>
        </form>
      )
    }
}