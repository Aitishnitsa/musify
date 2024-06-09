import React, { useState, useEffect } from "react";
import ControlButtons from "./ControlButtons";
import SeekBar from "./SeekBar";
import ListItem from "./ListItem";
import { accessToken, fetchPlayer } from '../config';

const Footer = () => {
    const [isHidden, setIsHidden] = useState(true);
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
        (!isHidden ?
            <footer className="animate-fade-up fixed bottom-0 border-2 border-transparent border-t-customGreen w-full bg-customBlack m-0 py-2 px-2 md:px-16" >
                <div className="relative flex items-center justify-between">
                    <ListItem
                        imgUrl={player.item.album.images[0].url}
                        song={player.item.name}
                        artist={player.item.artists[0].name}
                    />
                    <div className="absolute left-1/2 right-1/2">
                        <ControlButtons is_playing={player.is_playing} />
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
                    progress={player.progress_ms}
                    duration={player.item.duration_ms}
                />
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