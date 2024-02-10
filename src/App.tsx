import React, { useEffect, useState } from 'react';
import Heart from './Heart';
import Login from './Login';

const App = () => {
  const [password, setPassword] = useState<any>(null);
  const data = ["31/03/2012", "31/3/2012", "31-03-2012", "31-3-2012", "31032012", "3132012"];
  const audio = new Audio("/wakeup.mp3");

  const handlePassword = (event: any) => {
    setPassword(event)
    localStorage.setItem('password', event)
  }

  useEffect(() => {
    let saved = localStorage.getItem('password')
    setPassword(saved)
  })

  return (
    <div>
      <button onClick={() => audio.play()}>Play Sound</button>
      <button onClick={() => { audio.pause(); audio.currentTime = 0; }}>Stop Sound</button>
      {password && data.includes(password)
        ? <Heart />
        : <Login password={password} setPassword={handlePassword} />
      }
    </div>
  )
}

export default App;
