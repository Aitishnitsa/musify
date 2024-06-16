import React, { createContext, useEffect, useState } from 'react';
import { fetchPlayPause } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        let tokenExpiry = window.localStorage.getItem("tokenExpiry");

        if (!token && hash) {
            token = hash
                .substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1];

            window.location.hash = "";

            const expiryTime = Date.now() + 3600 * 1000; // 1 hour
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("tokenExpiry", expiryTime);
            window.location.reload(); // refresh the page after login
        }

        if (token) {
            const currentTime = Date.now();

            // check if the token has expired
            if (tokenExpiry && currentTime > tokenExpiry) {
                logout();
            } else {
                setToken(token);
                setLoggedIn(true);

                const timeoutDuration = tokenExpiry - currentTime;
                const logoutTimer = setTimeout(() => {
                    logout();
                }, timeoutDuration);

                return () => clearTimeout(logoutTimer);
            }
        }
    }, []);

    const logout = async () => {
        setToken("");
        setLoggedIn(false);
        await fetchPlayPause('pause');
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenExpiry");
        window.location.reload();
    }

    return (
        <AuthContext.Provider value={{ token, loggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
}