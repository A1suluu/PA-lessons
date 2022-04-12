import logo from './logo.svg';
import './App.css';


import LightBulb from './LightBulb';
import Switch from './Switch';
import { useState } from 'react';

function App() {
  const [state, setState] = useState('off')
  return (
    <div>
      <lightbulb toggleState={state} />
      <Switch toggleState={state} setToggle={setState}/>
    </div>
  );
}

export default App;
