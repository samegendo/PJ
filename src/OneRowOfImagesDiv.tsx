import React from 'react';
import './OneRowOfImagesDiv.css';
import OneImage from './OneImage';

const OneRowOfImagesDiv = ({ stars, teksten, images }: any) => {
    return (
        <div className='OneRowOfImagesDiv' >
            {Array(stars).fill(null).map(item => <OneImage teksten={teksten} images={images} />)}
        </div>
    );
}

export default OneRowOfImagesDiv;