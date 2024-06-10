import React, { useState, useEffect, useRef } from "react";
import ControlButtons from "./ControlButtons";
import SeekBar from "./SeekBar";
import ListItem from "./ListItem";

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

const Footer = (props) => {
    const [isHidden, setIsHidden] = useState(false);
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(null);
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

                fetch('https://api.spotify.com/v1/me/player', {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${props.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        device_ids: [device_id],
                        play: true
                    })
                });
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', (state) => {
                if (!state) {
                    console.log('User is not playing music through the Web Playback SDK');
                    return;
                }

                const newTrack = {
                    progress_ms: state.position,
                    item: state.track_window.current_track
                };
                setTrack(newTrack);
                setPaused(state.paused);

                player.getCurrentState().then(state => {
                    if (!state) {
                        console.error('User is not playing music through the Web Playback SDK');
                    } else {
                        setActive(state ? true : false);
                    }
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
            });

            player.connect();
        };

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        (!isHidden ?
            <footer className="animate-fade-up fixed bottom-0 border-2 border-transparent border-t-customGreen w-full bg-customBlack m-0 py-2 px-2 md:px-16" >
                {is_active ? (<>
                    <div className="relative flex items-center justify-between">
                        <ListItem
                            imgUrl={current_track.item?.album?.images[0]?.url}
                            song={current_track.item?.name}
                            artist={current_track.item?.artists[0]?.name}
                        />
                        <div className="absolute left-1/2 right-1/2">
                            <ControlButtons player={player} isPaused={is_paused} />
                        </div>
                        <button onClick={() => setIsHidden(true)}>
                            <svg fill="white" height="36" width="36" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                                <title />
                                <path d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z" />
                            </svg>
                        </button>
                    </div>
                    <SeekBar
                        player={player}
                        progress={current_track?.progress_ms}
                        duration={current_track?.item?.duration_ms}
                    />
                </>
                ) : (
                    <p>Instance not active. Transfer your playback using your Spotify app</p>
                )}
            </footer >
            :
            <div className="animate-flip-down absolute bottom-0 w-full flex justify-end m-0 py-2 px-2 md:px-16">
                <button onClick={() => setIsHidden(false)}>
                    <svg fill="white" height="36" width="36" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                        <title />
                        <path d="M82.6074,62.1072,52.6057,26.1052a6.2028,6.2028,0,0,0-9.2114,0L13.3926,62.1072a5.999,5.999,0,1,0,9.2114,7.6879L48,39.3246,73.396,69.7951a5.999,5.999,0,1,0,9.2114-7.6879Z" />
                    </svg>
                </button>
            </div>
        )
    );
}

export default Footer;
