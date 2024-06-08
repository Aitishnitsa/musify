import React from "react";
import SeekBar from './SeekBar';
import ControlButtons from './ControlButtons';
import Container from "./Container";

const PlayerSection = ({ is_paused, is_active, player, current_track }) => {
    return (
        <Container title={""} className={'col-span-1 sm:col-span-3 h-[65vh] sm:h-[85vh]'}>
            {is_active ? (
                <>
                    <img
                        src={current_track.item.album?.images[0]?.url || ""}
                        alt="album cover"
                        className='rounded-lg overflow-hidden max-h-full object-cover w-full'
                    />
                    <div className='flex-grow flex flex-col justify-between mt-2'>
                        <div>
                            <h1 className='text-white text-lg font-bold'>{current_track.item.name}</h1>
                            <h2 className='text-white text-base font-light'>{current_track.item.artists[0]?.name}</h2>
                        </div>
                        <div>
                            <ControlButtons player={player} isPaused={is_paused} />
                            <SeekBar
                                player={player}
                                progress={current_track.progress_ms}
                                duration={current_track.item.duration_ms}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div className="h-full w-full flex justify-center items-center">
                    <div class="h-10 w-10 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                </div>
            )}
        </Container>
    );
}

export default PlayerSection;
