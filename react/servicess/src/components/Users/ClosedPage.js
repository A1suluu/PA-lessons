import { useState, useEffect } from "react"


export default function ClosedPage({myToken}) {
    // const [myToken, setToken] = useState("9eff34c8661be65e248044d14f2cb21b823a03e8")
    const [userInfo, setUserInfo] = useState({
        login: "Данные загружаются",
        email: "Данные загружаются",
    })
    
    function getAuthUser() {  
        fetch(
          "http://localhost:8000/api/user",
          {headers: {Authorization: `token ${myToken}`}})
        .then(r => r.json())
        .then(data => {
            // console.log(myToken)
            // console.log(`token ${myToken}`)
            console.log(data)
            setUserInfo({
                login: data.data.username,
                email: data.data.email
            })
        })
    }

    useEffect(getAuthUser, [])

    return (
        <div>
            <div>Логин: {userInfo.login}</div>
            <div>Почта: {userInfo.email}</div>
        </div>
    )
}