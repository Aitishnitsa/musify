import React, { useState, useEffect, createContext } from "react";
import { accessToken, fetchPlayer } from "../config";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            if (accessToken) {
                const response = await fetchPlayer();
                if (response && response.item) {
                    setPlayer(response);
                } else {
                    console.log('Error fetching player');
                }
            }
        }

        fetchPlayerData();

        const interval = setInterval(fetchPlayerData, 1000);
        return () => clearInterval(interval);
    }, [accessToken]);

    return (
        <PlayerContext.Provider value={{ player }}>
            {children}
        </PlayerContext.Provider>
    )
}