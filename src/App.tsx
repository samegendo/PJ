import React from 'react';
import './App.css';
import OneRowOfImagesDiv from './OneRowOfImagesDiv';

const App = () => {
  return (
    <div>

      <div className='twoTopPartsOfHeartShape' >
        {Array(2).fill(null).map(item =>
          <div>
            {Array(3).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index + 4} />)}
          </div>
        )}
      </div>

      <div className='bottomPartOfHeartShape'>
        {Array(7).fill(null).map((item, index) => <OneRowOfImagesDiv stars={12 - index} />)}
        {Array(3).fill(null).map((item, index) => <OneRowOfImagesDiv stars={4 - index} />)}
      </div>

    </div>
  );
}

export default App;
