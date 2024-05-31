import React, { useState, useEffect } from "react";
import Container from "./Container";

const CLIENT_ID = "ca3e0e1e49734ede96087575dd883493";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = "user-read-private user-read-email";

async function fetchProfile(accessToken) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
        //scope: 'playlist-read-private user-read-private user-read-email'
    });

    if (result.status === 401) {
        return null;
    }

    return await result.json();
}

const UserInfoSection = () => {
    const [profile, setProfile] = useState(null);
    const accessToken = localStorage.getItem("token");

    useEffect(() => {
        const getProfile = async () => {
            if (accessToken) {
                const profileData = await fetchProfile(accessToken);
                if (profileData) {
                    setProfile(profileData);
                } else {
                    // Token is invalid, redirect to login
                    window.localStorage.removeItem("token");
                    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
                }
                console.log(profile);
            }
        };

        getProfile();
    }, [accessToken]);

    return (
        <Container title={""} className={'row-span-3 h-[85vh] text-white'}>
            <div className="flex flex-col justify-between space-y-4">
                <div className="flex justify-around">
                    <img
                        src={profile ? profile.images[1].url : "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"}
                        alt="profile image"
                        className='w-72 rounded-full'
                    ></img>
                </div>
                <div>
                    <p className="text-xs">Профіль</p>
                    <h1 className="text-4xl font-bold">{profile ? profile.display_name : "User"}</h1>
                </div>
                <div>
                    <h2 className="font-semibold">Країна:</h2>
                    <p>{profile ? profile.country : "Україна"}</p>
                </div>
                <div>
                    <h2 className="font-semibold">Email:</h2>
                    <p>{profile ? profile.email : "example@gmail.com"}</p>
                </div>
                <div>
                    <h2 className="font-semibold">Підписка:</h2>
                    <p>{profile ? profile.product : "Невідомо"}</p>
                </div>
            </div>
        </Container>
    );
};

export default UserInfoSection;
