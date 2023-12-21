import React, { useState } from 'react';
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

  const [getSelectedStand, setSelectedStand] = useState<any>(0);

  const [getSelectedStandObject, setSelectedStandObject] = useState<any>(getAlleStanden.find((x: any) => x.stand === getSelectedStand));

  return (
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
  );
}

export default App;
