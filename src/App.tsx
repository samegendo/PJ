import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import OneRowOfImagesDiv from './OneRowOfImagesDiv';

const App = () => {

  return (
    <div>

      <div style={{ display: 'inline-block' }} >
        <div>
          {Array(10).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index} />)}
        </div>
        <div>
          {Array(10).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index} />)}
        </div>
      </div>

      <div>
        {Array(20).fill(null).map((item, index) => <OneRowOfImagesDiv stars={20 - index} />)}
      </div>

    </div>
  );
}

export default App;
