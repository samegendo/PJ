import React from 'react';

const OneImage = ({ teksten, images }: any) => {
    return (
        <div className="flip-box" >
            <div className="flip-box-inner"  >
                <div className="flip-box-front">
                    <img src={images[(Math.floor(Math.random() * images.length) + 1)]} alt={(Math.floor(Math.random() * 173) + 1).toString()} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="flip-box-back">
                    <p>{teksten[(Math.floor(Math.random() * 76) + 1)]}</p>
                </div>
            </div>
        </div>
    );
}

export default OneImage;