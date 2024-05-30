import React from 'react';
import SeekBar from './SeekBar';
import ControlButtons from './ControlButtons';

const Player = ({ imgUrl, name, author }) => {
    return (<>
        <img
            src={imgUrl}
            alt="song"
            className='w-full rounded-lg p-1'
        ></img>
        <h1 className='text-white text-lg font-bold'>{name}</h1>
        <h2 className='text-white text-base font-light'>{author}</h2>
        <ControlButtons></ControlButtons>
        <SeekBar currentTime={"1:25"} trackLength={"4:13"}></SeekBar>
    </>)
}

export default Player;