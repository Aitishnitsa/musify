import React, { useState, useEffect, createContext, useContext } from "react";
import { fetchPlayer, fetchQueue } from "../config";
import { AuthContext } from "./AuthContext";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const { token } = useContext(AuthContext);
    const [player, setPlayer] = useState(null);
    const [queue, setQueue] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentSongId, setId] = useState('');

    const fetchPlayerData = async () => {
        const response = await fetchPlayer();
        if (response) {
            setPlayer(response);
            setIsPlaying(response.is_playing);
            setId(response.item?.id);
        } else {
            console.log("Can't fetch user's player");
        }
    };

    const fetchQueueData = async () => {
        const response = await fetchQueue();
        if (response && response.queue) {
            setQueue(response.queue);
        } else {
            console.error("Oops... Can't fetch user's queue");
        }
    };

    useEffect(() => {
        fetchPlayerData();
        fetchQueueData();
    }, [token]);

    useEffect(() => {
        const interval = setInterval(fetchPlayerData, 1000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    useEffect(() => {
        fetchQueueData();
    }, [currentSongId]);

    return (
        <PlayerContext.Provider value={{ player, queue, isPlaying, fetchQueueData }}>
            {children}
        </PlayerContext.Provider>
    );
};
