import React, { useState } from 'react';
import './OneRowOfImagesDiv.css';

//         {Array(stars).fill(null).map(item => <div style={{ backgroundColor: 'yellow' }} >*</div>)}

const HalfDiv = ({ stars }: any) => {
    return (
        <div className='OneRowOfImagesDiv' >
            {Array(stars).fill(null).map(item => <img src="favicon.ico" alt="" />)}
        </div>
    );
}

export default HalfDiv;