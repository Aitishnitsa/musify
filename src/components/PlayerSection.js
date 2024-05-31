import React from 'react';
import SeekBar from './SeekBar';
import ControlButtons from './ControlButtons';
import Container from "./Container";

const PlayerSection = ({ imgUrl, name, author }) => {
    return (
        <Container title={""} className={'col-span-3 h-[85vh]'}>
            <img
                src={imgUrl}
                alt="song"
                className='rounded-lg overflow-hidden max-h-full object-cover'
            ></img>
            <div className='flex-grow flex flex-col justify-between mt-2'>
                <div>
                    <h1 className='text-white text-lg font-bold'>{name}</h1>
                    <h2 className='text-white text-base font-light'>{author}</h2>
                </div>
                <div>
                    <ControlButtons></ControlButtons>
                    <SeekBar currentTime={"1:25"} trackLength={"4:13"}></SeekBar>
                </div>
            </div>
        </Container>
    );
}

export default PlayerSection;
