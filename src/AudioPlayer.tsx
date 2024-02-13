
import React, { useEffect, useState } from 'react';

const AudioPlayer = () => {
    const wakeup = new Audio("/wakeup.mp3");
    const mamadora1 = new Audio("/mamadora1.mp3");
    const mamadora2 = new Audio("/mamadora2.mp3");
    const afrQueen = new Audio("/afrQueen.mp3");
    //const baby = new Audio("/baby.wma");
    const loveCrime = new Audio("/loveCrime.mp3");
    const middleNight = new Audio("/middleNight.mp3");
    const [playlist, setPlaylist] = useState<any>([wakeup, mamadora1, mamadora2, afrQueen, loveCrime, middleNight]);
    const [counter, setCounter] = useState<any>(0);

    const handleStopButton = (callback?: any) => {
        playlist[counter].pause();
        playlist[counter].currentTime = 0;

        if (callback) callback();
    }

    const handleCounter = (callback?: any) => {
        if (counter === playlist.length - 1) { setCounter(0) }
        else { setCounter(counter + 1) }

        if (callback) callback();
    }

    const handlePlayButton = (addOne?: any) => {
        if (addOne && counter < playlist.length - 1) { playlist[counter + addOne].play(); }
        else if (addOne && counter === playlist.length - 1) { playlist[0].play(); }
        else { playlist[counter].play(); }
    }

    const handleNextButton = () => {
        handleStopButton(handleCounter(handlePlayButton(1)));
    }

    useEffect(() => {
        console.log(counter)
    }, [counter])

    return (
        <div>
            <button onClick={() => handlePlayButton()}>Play Sound</button>
            <button onClick={() => handleStopButton()}>Stop Sound</button>
            <button onClick={() => handleNextButton()}>Next={counter}</button>
        </div>
    );
}

export default AudioPlayer;