import React, { useState, useEffect } from "react";
import SeekBar from './SeekBar';
import ControlButtons from './ControlButtons';
import Container from "./Container";
import { accessToken, fetchPlayer } from '../config';

const PlayerSection = () => {
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            if (accessToken) {
                const response = await fetchPlayer();
                if (response && response.item) {
                    setPlayer(response);
                } else {
                    setPlayer(null);
                }
            }
        }

        fetchPlayerData();

        const interval = setInterval(fetchPlayerData, 1000);
        return () => clearInterval(interval);
    }, [accessToken]);

    const msToTime = (duration) => {
        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60)) % 60);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return minutes + ":" + seconds;
    }

    const currentTime = player ? msToTime(player.progress_ms) : "00:00";
    const trackLength = player ? msToTime(player.item.duration_ms) : "00:00";

    return (
        <Container title={""} className={'col-span-3 h-[85vh]'}>
            {player && player.item.album.images ? (
                <img
                    src={player.item.album.images[0].url}
                    alt="song"
                    className='rounded-lg overflow-hidden max-h-full object-cover'
                ></img>
            ) : (
                <div>No image available</div>
            )}
            <div className='flex-grow flex flex-col justify-between mt-2'>
                {player ? (
                    <div>
                        <h1 className='text-white text-lg font-bold'>{player.item.name}</h1>
                        <h2 className='text-white text-base font-light'>{player.item.artists[0].name}</h2>
                    </div>
                ) : (
                    <div>No player data available</div>
                )}
                <div>
                    <ControlButtons></ControlButtons>
                    <SeekBar currentTime={currentTime} trackLength={trackLength}></SeekBar>
                </div>
            </div>
        </Container>
    );
}

export default PlayerSection;
