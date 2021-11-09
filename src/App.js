import React, {useState} from 'react'
import './App.css';

function App() {
  const now = new Date().toLocaleTimeString()
  const [time, setTime] = useState(now)
  
  const upDateTime = () => {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }
  setInterval(upDateTime, 1000)
  return (
    <div className="container">
  <h1>{time}</h1>
  <button onClick = {upDateTime}>Get Time</button>
    </div>
  );
}

export default App;
