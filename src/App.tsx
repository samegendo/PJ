import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  for (let y = 1.5; y > -1.5; y -= 0.1) {
    for (let x = -1.5; x < 1.5; x += 0.05) {
      let a = x * x + y * y - 1;
      console.log(a * a * a - x * x * y * y * y <= 0 ? "*" : " ");
      //cw
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="backgroun9.jpg" alt="" width={100} height={100} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
