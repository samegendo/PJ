import React, { useEffect, useState } from 'react';
import Heart from './Heart';
import Login from './Login';
import Heart2 from './Heart2';

const App = () => {
  const [password, setPassword] = useState<any>(null);
  const data = ["31/03/2012", "31/3/2012", "31-03-2012", "31-3-2012", "31032012", "3132012"];

  const handlePassword = (event: any) => {
    setPassword(event)
    localStorage.setItem('password', event)
  }

  useEffect(() => {
    let saved = localStorage.getItem('password')
    setPassword(saved)
  }, [])

  return (
    <div>
      {password && data.includes(password)
        ? <Heart2 />
        : <Login password={password} setPassword={handlePassword} />
      }
    </div>
  )
}

export default App;
