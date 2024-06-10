import React from "react";
import SeekBar from './SeekBar';
import ControlButtons from './ControlButtons';
import Container from "./Container";
import Loader from "./Loader";
import useFetchPlayer from "../hooks/useFetchPlayer";

const PlayerSection = () => {
    const player = useFetchPlayer();

    return (
        <Container title={""} className={'col-span-1 sm:col-span-3 h-[65vh] sm:h-[85vh]'}>
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
                <Loader />
            )}
        </Container>
    );
}

export default PlayerSection;
