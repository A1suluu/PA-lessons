import './App.css';
import {Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import MasterAddForm from './components/MasterAddForm';
import MasterList from './components/MasterList/MasterList';
import MasterDetails from './components/MasterDetails/MasterDetails';
import UserInfo from './components/Users/UserInfo';
import Profile from './components/Users/Profile';
import ClosedPage from './components/Users/ClosedPage';
import { useState } from 'react'
import Authorization from './components/Users/Authorization';


function App() {
  const [token, setToken] = useState()

  function updateToken(newToken) {
    setToken(newToken)
  }

  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/add">Добавить</Link>
        <Link to="/user">Пользователь</Link>
        <Link to="/authorization">Войти</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/closed">Закрытая-Инфа</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MasterList/>}/>
        <Route path="/user" element={<UserInfo/>}/>
        <Route path="/authorization" element={<Authorization functionForTokenUpdate={updateToken}/>}/>
        <Route path="/add" element={<MasterAddForm/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/closed" element={<ClosedPage myToken={token}/>}/>
        <Route path="/master/:id/" element={<MasterDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App;
