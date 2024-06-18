import React, { useEffect, useState } from "react";
import { fetchSeek } from "../config";

const SeekBar = ({ player, progress, duration }) => {
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        setLineWidth((progress * 100) / duration);
    }, [progress]);

    const msToTime = (duration) => {
        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60)) % 60);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return minutes + ":" + seconds;
    }

    const handleSeek = async (e) => {
        e.preventDefault();
        const seekBar = e.currentTarget;
        const clickPosition = e.clientX - seekBar.getBoundingClientRect().left;
        const newProgress = Math.round((clickPosition / seekBar.offsetWidth) * duration);
        await fetchSeek(newProgress);
    };

    const currentTime = player ? msToTime(progress) : "00:00";
    const trackLength = player ? msToTime(duration) : "00:00";

    return (
        <div className='mt-2'>
            <div className="w-full bg-gray-700 rounded-full h-1.5 cursor-pointer"
                onClick={handleSeek}
            >
                <div style={{ width: `${lineWidth}%` }} className="bg-white h-1.5 rounded-full"></div>
            </div>
            <div className="flex justify-between text-sm text-white">
                <span>{currentTime}</span>
                <span>{trackLength}</span>
            </div>
        </div>
    );
};

export default SeekBar;