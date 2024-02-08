import React, { useEffect, useState } from 'react';
import Heart from './Heart';
import Login from './Login';

const App = () => {
  const [password, setPassword] = useState<any>("");
  const data = ["31/03/2012", "31/3/2012", "31-03-2012", "31-3-2012", "31032012", "3132012"]

  return (
    <div>

      {data.includes(password)
        ? <Heart />
        : <Login password={password} setPassword={setPassword} />
      }
    </div>
  )
}

export default App;
