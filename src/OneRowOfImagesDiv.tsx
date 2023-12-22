import React, { useState } from 'react';
import './OneRowOfImagesDiv.css';

//         {Array(stars).fill(null).map(item => <div style={{ backgroundColor: 'yellow' }} >*</div>)}

const OneRowOfImagesDiv = ({ stars }: any) => {
    const [showText, setShowText] = useState<any>(false);
    //onClick={() => setShowText((item: any) => !item)}

    //   {Array(stars).fill(null).map(item => <img src="favicon.ico" alt="" />)}

    return (
        <div className='OneRowOfImagesDiv' >
            {Array(stars).fill(null).map(item =>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src="favicon.ico" alt="" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="flip-box-back">
                            <p>What an amazing city What an amazing city What an amazing city What an amazing city</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default OneRowOfImagesDiv;