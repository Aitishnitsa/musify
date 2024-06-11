import React, { useState, useEffect, useContext } from "react";
import Container from "./Container";
import { fetchProfile } from '../config';
import { PlayerContext } from "../context/PlayerContext";

const UserInfoSection = () => {
    const { token } = useContext(PlayerContext);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            if (token) {
                const profileData = await fetchProfile(token);
                if (profileData) {
                    setProfile(profileData);
                }
                // console.log(profile);
            }
        };

        getProfile();
    }, [token]);

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
