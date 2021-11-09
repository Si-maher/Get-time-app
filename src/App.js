import React, {useState} from 'react'
import './App.css';

function App() {

  const now = new Date().toLocaleTimeString()
  const [time, setTime] = useState(now)

  return (
    <div className="container">
  <h1>{now}</h1>
  <button>Get Time</button>
    </div>
  );
}

export default App;
