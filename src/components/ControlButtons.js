import React, { useContext } from "react";
import previous from "../assets/previous.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import next from "../assets/next.svg";
import { fetchPlayPause, fetchNextPrevious } from '../config';
import { PlayerContext } from "../context/PlayerContext";

const ControlButtons = () => {
    const { isPlaying, setIsPlaying } = useContext(PlayerContext);

    const handlePrevious = async (e) => {
        e.preventDefault();
        await fetchNextPrevious("previous");
    }

    const handleTogglePause = async (e) => {
        e.preventDefault();
        const action = isPlaying ? "pause" : "play";
        await fetchPlayPause(action);
        setIsPlaying(!isPlaying);
    }

    const handleNext = async (e) => {
        e.preventDefault();
        await fetchNextPrevious("next");
    }

    return (
        <div className='flex items-center justify-center'>
            <button onClick={handlePrevious}>
                <img src={previous} alt='previous' className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <button onClick={handleTogglePause} className='mx-4'>
                <img src={isPlaying ? pause : play} alt='play pause button' className="h-10 w-10 sm:h-12 sm:w-12" />
            </button>
            <button onClick={handleNext}>
                <img src={next} alt='next' className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
        </div>
    );
}

export default ControlButtons;