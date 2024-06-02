export const CLIENT_ID = "ca3e0e1e49734ede96087575dd883493";
export const REDIRECT_URI = "http://localhost:3000";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SCOPES = "user-read-private user-read-email user-top-read";

export const fetchWebApi = async (accessToken, variable) => {
    const res = await fetch(`https://api.spotify.com/v1/me/top/${variable}?time_range=long_term&limit=5`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return await res.json();
}


export const fetchProfile = async (accessToken) => {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (result.status === 401) {
        return null;
    }

    return await result.json();
}