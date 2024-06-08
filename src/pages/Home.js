import React, { useState, useEffect, useRef } from 'react';
import PlayerSection from '../components/PlayerSection';
import PlaylistSection from '../components/PlaylistSection';
import QueueSection from '../components/QueueSection';

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

const Home = (props) => {
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(initialTrack);
    const [queue, setQueue] = useState([]);
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

            player.addListener('player_state_changed', (state => {
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
                setQueue(state.track_window.next_tracks);

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
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-7 gap-1 sm:gap-3 md:gap-5 lg:gap-8 relative max-w-7xl mx-auto px-2 md:px-6 body-font'>
                <PlaylistSection />
                <PlayerSection is_paused={is_paused}
                    is_active={is_active}
                    player={player}
                    current_track={current_track} />
                <QueueSection
                    is_active={is_active}
                    current_track={current_track.item}
                    queue={queue} />
            </div>
        </div>
    );
}

export default Home;
