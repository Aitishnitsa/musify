export const CLIENT_ID = "ca3e0e1e49734ede96087575dd883493";
export const REDIRECT_URI = "http://localhost:3000";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SCOPES = "user-read-private user-read-email user-top-read playlist-read-private user-read-currently-playing user-read-playback-state";

export const fetchWebApi = async (accessToken, type) => {
    const result = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=short_term&limit=5`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return await result.json();
}

export const fetchProfile = async (accessToken) => {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    return await result.json();
}

export const fetchUserPlaylists = async (accessToken) => {
    const result = await fetch(`https://api.spotify.com/v1/me/playlists?offset=0&limit=20`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return await result.json();
}

export const fetchCurrentlyPlaying = async (accessToken) => {
    const result = await fetch(`https://api.spotify.com/v1/me/player/currently_playing`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return await result.json();
}

export const fetchQueue = async (accessToken) => {
    const result = await fetch(`https://api.spotify.com/v1/me/player/queue`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return await result.json();
}