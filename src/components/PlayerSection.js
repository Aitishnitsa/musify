import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import SeekBar from './SeekBar';
import ControlButtons from './ControlButtons';
import Container from "./Container";

const PlayerSection = () => {
    const { player, current_track, is_paused } = useContext(PlayerContext);

    return (
        <Container title={""} className={'col-span-1 sm:col-span-3 h-[65vh] sm:h-[85vh]'}>
            {player && current_track ? (
                <>
                    <img
                        src={current_track.item?.album?.images[0]?.url}
                        alt="song"
                        className='rounded-lg overflow-hidden max-h-full object-cover'
                    ></img>
                    <div className='flex-grow flex flex-col justify-between mt-2'>
                        <div>
                            <h1 className='text-white text-lg font-bold'>{current_track.item?.name}</h1>
                            <h2 className='text-white text-base font-light'>{current_track.item?.artists[0]?.name}</h2>
                        </div>
                        <div>
                            {player && <ControlButtons player={player} isPaused={is_paused} />}
                            <SeekBar
                                player={player}
                                progress={current_track?.progress_ms}
                                duration={current_track?.item?.duration_ms}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div>oops</div>
            )}
        </Container>
    );
}

export default PlayerSection;
