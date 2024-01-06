import React, { useState } from 'react';
import './OneRowOfImagesDiv.css';
import OneImage from './OneImage';

const OneRowOfImagesDiv = ({ stars, teksten, images }: any) => {
    const [showText, setShowText] = useState<any>(false);

    return (
        <div className='OneRowOfImagesDiv' >
            {Array(stars).fill(null).map((item, index) => <OneImage teksten={teksten} images={images} />)}
        </div>
    );
}

export default OneRowOfImagesDiv;