import React, { useEffect, useState } from 'react';
import './App.css';
import OneRowOfImagesDiv from './OneRowOfImagesDiv';
import teksten from './data';
import './InputRange.css'

//Foto's importeren => uit map in array steken
const images = require.context('/imgs', true);
const imageList = images.keys().map(image => images(image));

const App = () => {
  //Alle waarden voor de drie delen van het hart
  const [array1voor, setArray1voor] = useState<any>(3);
  const [array1achter, setArray1achter] = useState<any>(4);
  const [array2voor, setArray2voor] = useState<any>(7);
  const [array2achter, setArray2achter] = useState<any>(12);
  const [array3voor, setArray3voor] = useState<any>(3);
  const [array3achter, setArray3achter] = useState<any>(4);

  //Stand van de inputrange/grootte van het hart
  const [getSelectedStand, setSelectedStand] = useState<any>(1);

  //Som berekenen van een array via recursie
  const array_sum = (my_array: any): any => {
    if (my_array.length === 1) { return my_array[0]; }
    else { return my_array.pop() + array_sum(my_array); }
  };

  //Functie die som berekent per apart deel van de 3 delen van het hart.
  const sum = (voor: any, achter: any, arraynummer: any) => {
    let array = [];
    for (let i = 1; i <= voor; i++) {
      if (arraynummer > 1) { array.push(achter - i + 1); }  //als het de onderste twee driehoeken zijn
      else { array.push((achter + i - 1) * 2); }            //als het de bovenste twee toppen zijn.
    }
    return array_sum(array);  //retourneert de som van bv [3, 2, 1]
  }

  //Als de range/stand veranderd wordt.
  const handleRangeChange2 = (value: any) => {
    //Eerst het verschil tussen de vorige en de nieuwe stand berekenen.
    //Als ik dit verschil niet instel, is het mogelijk om 
    //  1. groter en kleiner dan die 4 standen te gaan (niet in getal maar wel in hartgrootte)
    //  2. crasht hij als hij te klein zou gaan.
    let verschil = Math.abs(value - getSelectedStand);

    if (value > getSelectedStand) {
      setArray1voor(array1voor + (1 * verschil));
      setArray1achter(array1achter + (1 * verschil));
      setArray2voor(array2voor + (1 * verschil));
      setArray2achter(array2achter + (4 * verschil));
      setArray3voor(array3voor + (2 * verschil));
      setArray3achter(array3achter + (3 * verschil));
    }
    if (value < getSelectedStand) {
      setArray1voor(array1voor - (1 * verschil));
      setArray1achter(array1achter - (1 * verschil));
      setArray2voor(array2voor - (1 * verschil));
      setArray2achter(array2achter - (4 * verschil));
      setArray3voor(array3voor - (2 * verschil));
      setArray3achter(array3achter - (3 * verschil));
    }

    setSelectedStand(value);
  }

  return (
    <div>
      <div className='head'  >
        <div className='leftLabel' >Aantal quotes:</div>
        <div className='rightLabel' >{teksten.length}</div> <br />
        <div className='leftLabel' >Totaal aantal foto's:</div>
        <div className='rightLabel' >{imageList.length}</div> <br /><br />
        <div className='leftLabel' >Stel hier de grootte van het hart in:</div>
        <div className='rightLabel' >{sum(array1voor, array1achter, 1) + sum(array2voor, array2achter, 2) + sum(array3voor, array3achter, 3)}</div> <br />
        <input
          type="range"
          min="0"
          max="3"
          step="1"
          value={getSelectedStand}
          onChange={(event) => handleRangeChange2(event?.target.value)}
        />
      </div>

      <div>
        <div className='twoTopPartsOfHeartShape'>
          <div> {Array(array1voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index + array1achter} teksten={teksten} images={imageList} />)}</div>
          <div> {Array(array1voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={index + array1achter} teksten={teksten} images={imageList} />)}</div>
        </div>

        <div className='bottomPartOfHeartShape'>
          {Array(array2voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={array2achter - index} teksten={teksten} images={imageList} />)}
          {Array(array3voor).fill(null).map((item, index) => <OneRowOfImagesDiv stars={array3achter - index} teksten={teksten} images={imageList} />)}
        </div>
      </div>

    </div>
  );
}

export default App;
