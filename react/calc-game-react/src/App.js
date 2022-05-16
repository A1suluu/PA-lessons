import './App.css';
import React from 'react';
import MathSign from './components/MathSign';
import HistoryList from './components/HistoryList';
import TaskNumber from './components/TaskNumber';
import Counter from './components/Counter';
import ActionButton from './components/ActionButton';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Info from './components/Info';
import Main from './components/Main';
import Contacts from './components/Contacts';;


function App() {
  return (
      <BrowserRouter>
        <div>
            <Link to='/'>Домой</Link> | &nbsp;
            <Link to='/info'>Информация</Link> | &nbsp;
            <Link to='/contacts'>Контакты</Link> | &nbsp;
        </div>
        <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/info' element={<Info/>}/>
            <Route exact path='/contacts' element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;

// npm install
// npm start
// ctrl z/x
