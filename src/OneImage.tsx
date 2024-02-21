import React from 'react';
import './OneImage.css';

const OneImage = ({ teksten, images, videos, imgOrVideo }: any) => {
    return (
        <div>
            {
                imgOrVideo
                    ?
                    <div>
                        <div className="flip-box" >
                            <div className="flip-box-inner"  >
                                <div className="flip-box-front">
                                    <img src={images[(Math.floor(Math.random() * images.length) + 1)]} alt={(Math.floor(Math.random() * images.length) + 1).toString()} style={{ width: "100%", height: "100%" }} />
                                </div>
                                <div className="flip-box-back">
                                    <p>{teksten[(Math.floor(Math.random() * teksten.length) + 1)]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <video src={videos[(Math.floor(Math.random() * videos.length) + 1)]} width="150" height="150" controls></video>
            }
        </div>
    );
}

export default OneImage;


