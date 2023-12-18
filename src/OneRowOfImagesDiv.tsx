import React, { useState } from 'react';
import './OneRowOfImagesDiv.css';

//         {Array(stars).fill(null).map(item => <div style={{ backgroundColor: 'yellow' }} >*</div>)}

const HalfDiv = ({ stars }: any) => {
    const [showText, setShowText] = useState<any>(false);
    //onClick={() => setShowText((item: any) => !item)}

    //   {Array(stars).fill(null).map(item => <img src="favicon.ico" alt="" />)}

    return (
        <div className='OneRowOfImagesDiv' >
            {Array(stars).fill(null).map(item =>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src="favicon.ico" alt="Paris" style={{ width: "30px", height: "30px" }} />
                        </div>
                        <div className="flip-box-back">
                            <h2>Paris</h2>
                            <p>What an amazing city</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default HalfDiv;