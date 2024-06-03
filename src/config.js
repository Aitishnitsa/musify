export const CLIENT_ID = "ca3e0e1e49734ede96087575dd883493";
export const REDIRECT_URI = "http://localhost:3000";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SCOPES = "user-read-private user-read-email user-top-read playlist-read-private user-read-currently-playing user-read-playback-state";

export const accessToken = localStorage.getItem("token");

const fetchWithToken = async (url) => {
    const result = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return await result.json();
}

export const fetchWebApi = (type) => fetchWithToken(`https://api.spotify.com/v1/me/top/${type}?time_range=short_term&limit=5`);

export const fetchProfile = () => fetchWithToken("https://api.spotify.com/v1/me");

export const fetchUserPlaylists = () => fetchWithToken(`https://api.spotify.com/v1/me/playlists?offset=0&limit=20`);

export const fetchCurrentlyPlaying = () => fetchWithToken(`https://api.spotify.com/v1/me/player/currently_playing`);

export const fetchQueue = () => fetchWithToken(`https://api.spotify.com/v1/me/player/queue`);

export const fetchSearch = (query) => fetchWithToken(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=0&limit=20`);

export const fetchPlayer = () => fetchWithToken(`https://api.spotify.com/v1/me/player`);