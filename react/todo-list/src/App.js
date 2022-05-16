import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import TodoWithState from './components/TodoWithState';
import Homepage from './components/Homepage';
import TodoWithAPI from './components/TodoWithAPI';

function App() {
  const styles = {
    nav: {
      marginLeft: "15px",
    }
  }

  return (
    <Router>
      <nav>
        <Link  to="/homepage">Homepage</Link>
        <Link style={styles.nav} to="/with-state"> With State</Link>
        <Link style={styles.nav} to="/with-api">With API</Link>
      </nav>
        <Routes>
          <Route exapt path='/homepage' element={<Homepage/>}/>
          <Route exapt path='/with-state' element={<TodoWithState/>}/>
          <Route exapt path='/with-api' element={<TodoWithAPI/>}/>
        </Routes>
    </Router>
  )
}

export default App;