import React, { useEffect, useState } from "react";
import { msToTime } from "../config";

const SeekBar = ({ player, progress, duration }) => {
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        setLineWidth((progress * 100) / duration);
    }, [progress, duration]);

    const currentTime = player ? msToTime(progress) : "00:00";
    const trackLength = player ? msToTime(duration) : "00:00";

    return (
        <div className='mt-2'>
            <div className="w-full bg-gray-700 rounded-full h-1.5 cursor-pointer">
                <div style={{ width: `${lineWidth}%` }} className="bg-white h-1.5 rounded-full"></div>
            </div>
            <div className="flex justify-between text-sm text-white">
                <span>{currentTime}</span>
                <span>{trackLength}</span>
            </div>
        </div>
    );
}

export default SeekBar;