import React, { createContext, useState, useEffect, useRef } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children, token }) => {
    const [player, setPlayer] = useState(null);
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [current_track, setTrack] = useState(initialTrack);
    const intervalRef = useRef();

    useEffect(() => {
        if (!token) return;

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);

                fetch('https://api.spotify.com/v1/me/player', {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
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

                if (player) {
                    player.getCurrentState().then(state => {
                        if (!state) {
                            console.error('User is not playing music through the Web Playback SDK');
                        } else {
                            setActive(state ? true : false);
                        }
                    });
                }

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

            player.setName("My Player").then(() => {
                console.log('Player name updated!');
            });

            player.connect();

            return () => {
                player.disconnect();
                clearInterval(intervalRef.current);
            };
        };

        return () => document.body.removeChild(script);
    }, [token]);

    return (
        <PlayerContext.Provider value={{ player, is_paused, is_active, current_track, token }}>
            {children}
        </PlayerContext.Provider>
    );
};

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
