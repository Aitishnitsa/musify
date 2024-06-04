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

    return (
        <Container title={""} className={'col-span-3 h-[85vh]'}>
            {player && player.item.album.images ? (
                <>
                    <img
                        src={player.item.album.images[0].url}
                        alt="song"
                        className='rounded-lg overflow-hidden max-h-full object-cover'
                    ></img>
                    <div className='flex-grow flex flex-col justify-between mt-2'>
                        <div>
                            <h1 className='text-white text-lg font-bold'>{player.item.name}</h1>
                            <h2 className='text-white text-base font-light'>{player.item.artists[0].name}</h2>
                        </div>
                        <div>
                            <ControlButtons is_playing={player.is_playing} />
                            <SeekBar
                                player={player}
                                progress={player.progress_ms}
                                duration={player.item.duration_ms}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div>Плеєр недоступний</div>
            )}
        </Container>
    );
}

export default PlayerSection;
