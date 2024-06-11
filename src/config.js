export const CLIENT_ID = "ca3e0e1e49734ede96087575dd883493";
export const REDIRECT_URI = "http://localhost:3000/auth/callback";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "code";
export const SCOPES = "streaming user-read-email user-read-private user-top-read playlist-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state";

const fetchWithToken = async (token, url, methodType) => {
    const result = await fetch(url, {
        method: methodType,
        headers: { Authorization: `Bearer ${token}` }
    });
    const string = await result.text();
    const json = string === "" ? {} : JSON.parse(string);
    return json;
}

export const fetchWebApi = (token, type) => fetchWithToken(token, `https://api.spotify.com/v1/me/top/${type}?time_range=short_term&limit=5`, "GET");

export const fetchProfile = (token) => fetchWithToken(token, "https://api.spotify.com/v1/me", "GET");

export const fetchUserPlaylists = (token) => fetchWithToken(token, `https://api.spotify.com/v1/me/playlists?offset=0&limit=20`, "GET");

export const fetchCurrentlyPlaying = (token) => fetchWithToken(token, `https://api.spotify.com/v1/me/player/currently_playing`, "GET");

export const fetchQueue = (token) => fetchWithToken(token, `https://api.spotify.com/v1/me/player/queue`, "GET");

export const fetchSearch = (token, query) => fetchWithToken(token, `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=0&limit=20`, "GET");

export const fetchPlayer = (token) => fetchWithToken(token, `https://api.spotify.com/v1/me/player`, "GET");

export const fetchPlayPause = (token, action) => fetchWithToken(token, `https://api.spotify.com/v1/me/player/${action}`, "PUT");

export const fetchNextPrevious = (token, action) => fetchWithToken(token, `https://api.spotify.com/v1/me/player/${action}`, "POST");
