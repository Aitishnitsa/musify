export const CLIENT_ID = "ca3e0e1e49734ede96087575dd883493";
export const REDIRECT_URI = "http://localhost:3000/";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SCOPES = "user-read-private user-read-email user-top-read playlist-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state";

export const accessToken = localStorage.getItem("token");

const fetchWithToken = async (url, methodType) => {
    try {
        // console.log("Request URL:", url);
        // console.log("Access Token:", accessToken);

        const result = await fetch(url, {
            method: methodType,
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        // console.log("Fetch result:", result);

        if (!result.ok) {
            const error = await result.json();
            throw new Error(error.message);
        }
        const json = await result.json();
        return json;
    } catch (error) {
        // console.error("Fetch error:", error);
        return null;
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

export const fetchPlaylistsTracks = (playlist_id) => {
    const url = `https://api.spotify.com/v1/playlists/${playlist_id}`;
    return fetchWithToken(url, "GET");
}

export const fetchAddToQueue = (uri) => fetchWithToken(`https://api.spotify.com/v1/me/player/queue?uri=${uri}`, "POST");