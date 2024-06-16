export const CLIENT_ID = "ca3e0e1e49734ede96087575dd883493";
export const REDIRECT_URI = "http://localhost:3000/";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SCOPES = "user-read-private user-read-email user-top-read playlist-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state";

export const msToTime = (duration) => {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
}

const fetchWithToken = async (url, methodType) => {
    const accessToken = localStorage.getItem("token");
    const tokenExpiry = localStorage.getItem("tokenExpiry");

    if (Date.now() > tokenExpiry) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiry");
        window.location.reload();
        return null;
    }

    if (accessToken) {
        try {
            const result = await fetch(url, {
                method: methodType,
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            if (!result.ok) {
                const error = await result.json();
                throw new Error(error.message);
            }
            return await result.json();
        } catch (error) {
            console.error("Fetch error:", error);
            return null;
        }
    }
};

export const fetchWebApi = (type) => fetchWithToken(`https://api.spotify.com/v1/me/top/${type}?time_range=short_term&limit=5`, "GET");
export const fetchProfile = () => fetchWithToken("https://api.spotify.com/v1/me", "GET");
export const fetchUserPlaylists = () => fetchWithToken(`https://api.spotify.com/v1/me/playlists?offset=0&limit=50`, "GET");
export const fetchQueue = () => fetchWithToken(`https://api.spotify.com/v1/me/player/queue`, "GET");
export const fetchSearch = (query) => fetchWithToken(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=0&limit=20`, "GET");
export const fetchPlayer = () => fetchWithToken(`https://api.spotify.com/v1/me/player/currently-playing`, "GET");
export const fetchPlayPause = (action) => fetchWithToken(`https://api.spotify.com/v1/me/player/${action}`, "PUT");
export const fetchNextPrevious = (action) => fetchWithToken(`https://api.spotify.com/v1/me/player/${action}`, "POST");
export const fetchPlaylistsTracks = (playlist_id) => fetchWithToken(`https://api.spotify.com/v1/playlists/${playlist_id}`, "GET");
export const fetchAddToQueue = (uri) => fetchWithToken(`https://api.spotify.com/v1/me/player/queue?uri=${uri}`, "POST");