import React, { useEffect, useState } from 'react';
import './App.css';
import OneRowOfImagesDiv from './OneRowOfImagesDiv';

const App = () => {
  const [getAlleStanden, setAlleStanden] = useState<any>([
    {
      stand: 0,
      array1voor: 2,
      array1achter: 3,
      array2voor: 6,
      array2achter: 8,
      array3voor: 2,
      array3achter: 1
    },
    {
      stand: 1,
      array1voor: 3,
      array1achter: 4,
      array2voor: 7,
      array2achter: 12,
      array3voor: 3,
      array3achter: 4
    },
    {
      stand: 2,
      array1voor: 4,
      array1achter: 4,
      array2voor: 8,
      array2achter: 14,
      array3voor: 4,
      array3achter: 5
    }
  ]);

  const [getSelectedStand, setSelectedStand] = useState<any>(1);

  const [getSelectedStandObject, setSelectedStandObject] = useState<any>(getAlleStanden[1]);

  const handleRangeChange = (value: any) => {
    setSelectedStand(value);
    if (value === "0") { setSelectedStandObject(getAlleStanden[0]) }
    if (value === "1") { setSelectedStandObject(getAlleStanden[1]) }
    if (value === "2") { setSelectedStandObject(getAlleStanden[2]) }
  }

  return (
    <div>

      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value={getSelectedStand}
        onChange={(event) => handleRangeChange(event?.target.value)}
      />

      {getSelectedStandObject &&
        <div>
          <div className='twoTopPartsOfHeartShape' >
            {Array(2).fill(null).map(item =>
              <div>
                {Array(getSelectedStandObject.array1voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index + getSelectedStandObject.array1achter} />)}
              </div>
            )}
          </div>

          <div className='bottomPartOfHeartShape'>
            {Array(getSelectedStandObject.array2voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={getSelectedStandObject.array2achter - index} />)}
            {Array(getSelectedStandObject.array3voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={getSelectedStandObject.array3achter - index} />)}
          </div>

        </div>
      }

    </div>
  );
}

export default App;
