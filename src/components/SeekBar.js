import React from "react";

const SeekBar = ({ currentTime, trackLength }) => {
    return (
        <div className='mt-2'>
            <div className="w-full bg-gray-700 rounded-full h-1.5 cursor-pointer">
                <div className="bg-white h-1.5 rounded-full w-1/3"></div>
            </div>
            <div className="flex justify-between text-sm text-white">
                <span>{currentTime}</span>
                <span>{trackLength}</span>
            </div>
        </div>
    );
}

export default SeekBar;