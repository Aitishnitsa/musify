import React, { useState, useEffect, useRef } from "react";
import SeekBar from './SeekBar';
import ControlButtons from './ControlButtons';
import Container from "./Container";

const initialTrack = {
    progress_ms: 0,
    item: {
        name: "",
        album: {
            images: [
                { url: "" }
            ]
        },
        artists: [
            { name: "" }
        ],
        duration_ms: 0
    }
};

const PlayerSection = (props) => {
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(initialTrack);
    const intervalRef = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', (state => {
                if (!state) {
                    return;
                }

                const newTrack = {
                    progress_ms: state.position,
                    item: state.track_window.current_track
                };
                setTrack(newTrack);
                setPaused(state.paused);

                player.getCurrentState().then(state => {
                    setActive(state ? true : false);
                });

                clearInterval(intervalRef.current);

                if (!state.paused) {
                    intervalRef.current = setInterval(() => {
                        setTrack(prevTrack => ({
                            ...prevTrack,
                            progress_ms: prevTrack.progress_ms + 1000
                        }));
                    }, 1000);
                }
            }));

            player.connect();
        };

        return () => clearInterval(intervalRef.current);
    }, [props.token]);

    return (
        <Container title={""} className={'col-span-1 sm:col-span-3 h-[65vh] sm:h-[85vh]'}>
            {is_active ? (
                <>
                    <img
                        src={current_track.item.album?.images[0]?.url}
                        alt="album cover"
                        className='rounded-lg overflow-hidden max-h-full object-cover'
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
                <div>Instance not active. Transfer your playback using your Spotify app</div>
            )}
        </Container>
    );
}

export default PlayerSection;
