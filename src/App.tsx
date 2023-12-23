import React, { useEffect, useState } from 'react';
import './App.css';
import OneRowOfImagesDiv from './OneRowOfImagesDiv';

const App = () => {
  const [array1voor, setArray1voor] = useState<any>(3);
  const [array1achter, setArray1achter] = useState<any>(4);
  const [array2voor, setArray2voor] = useState<any>(7);
  const [array2achter, setArray2achter] = useState<any>(12);
  const [array3voor, setArray3voor] = useState<any>(3);
  const [array3achter, setArray3achter] = useState<any>(4);

  const [getSelectedStand, setSelectedStand] = useState<any>(1);

  const handleRangeChange2 = (value: any) => {
    let x = getSelectedStand;
    if (value > x) {
      setArray1voor(array1voor + 1);
      setArray1achter(array1achter + 1);
      setArray2voor(array2voor + 1);
      setArray2achter(array2achter + 4);
      setArray3voor(array3voor + 2);
      setArray3achter(array3achter + 2);
    }
    if (value < x) {
      setArray1voor(array1voor - 1);
      setArray1achter(array1achter - 1);
      setArray2voor(array2voor - 1);
      setArray2achter(array2achter - 4);
      setArray3voor(array3voor - 2);
      setArray3achter(array3achter - 2);
    }
    setSelectedStand(value);
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="3"
        step="1"
        value={getSelectedStand}
        onChange={(event) => handleRangeChange2(event?.target.value)}
      />

      <div>
        <div className='twoTopPartsOfHeartShape' >
          {Array(2).fill(null).map(item =>
            <div>
              {Array(array1voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index + array1achter} />)}
            </div>
          )}
        </div>
        <div className='bottomPartOfHeartShape'>
          {Array(array2voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={array2achter - index} />)}
          {Array(array3voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={array3achter - index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
