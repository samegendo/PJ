import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import OneRowOfImagesDiv from './OneRowOfImagesDiv';

const App = () => {

  //2 divven met 11 kan ik korter schrijven (loop)

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'center' }} >

        <div>
          {Array(3).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index + 4} />)}
        </div>
        <div>
          {Array(3).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index + 4} />)}
        </div>
      </div>

      <div>
        {Array(7).fill(null).map((item, index) => <OneRowOfImagesDiv stars={12 - index} />)}
      </div>

      <div>
        {Array(3).fill(null).map((item, index) => <OneRowOfImagesDiv stars={4 - index} />)}
      </div>

    </div>
  );
}

export default App;
