import React, { useState, useEffect } from "react";
import Container from "./Container";
import { accessToken, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES, fetchProfile } from '../config';

const UserInfoSection = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            if (accessToken) {
                const profileData = await fetchProfile();
                if (profileData) {
                    setProfile(profileData);
                } else {
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
