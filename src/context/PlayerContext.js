import React, { useState, useEffect, createContext } from "react";
import { accessToken, fetchPlayer, fetchQueue } from "../config";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    const [queue, setQueue] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);

    const fetchData = async () => {
        if (accessToken) {
            const response = await fetchPlayer();
            if (response) {
                setPlayer(response);
                setIsPlaying(response.is_playing);
            } else {
                console.log("Can't fetch user's player");
            }

            const resQueue = await fetchQueue();
            if (resQueue && resQueue.queue) {
                setQueue(resQueue.queue);
            } else {
                console.error("Oops... Can't fetch user's queue");
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, [accessToken]);

    // useEffect(() => {
    //     player && player.actions.disallows.pausing ? setIsPlaying(false) : setIsPlaying(true);
    // }, [player?.actions.disallows.pausing, player?.actions.disallows.resuming])

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(fetchData, 1000);
        } else {
            interval = setInterval(fetchData, 5000);
        }

        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <PlayerContext.Provider value={{ player, queue, isPlaying }}>
            {children}
        </PlayerContext.Provider>
    );
};
