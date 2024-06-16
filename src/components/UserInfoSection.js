import React, { useState, useEffect } from "react";
import Container from "./Container";
import { fetchProfile } from '../config';
import Loader from "./Loader";

const UserInfoSection = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            const profileData = await fetchProfile();
            if (profileData) {
                setProfile(profileData);
            } else {
                setProfile(null);
            }
        }

        getProfile();
    }, []);

    return (
        <Container title={""} className={'row-span-3 h-[85vh] text-white'}>
            {profile
                ?
                <div className="flex flex-col justify-between space-y-4">
                    <div className="flex justify-around">
                        <img
                            src={profile.images[1].url ?? "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"}
                            alt="profile"
                            className='w-72 rounded-full'
                        ></img>
                    </div>
                    <div>
                        <p className="text-xs">Профіль</p>
                        <h1 className="text-4xl font-bold">{profile.display_name ?? "User"}</h1>
                    </div>
                    <div>
                        <h2 className="font-semibold">Країна:</h2>
                        <p>{profile.country ?? "Україна"}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Email:</h2>
                        <p>{profile.email ?? "example@gmail.com"}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Підписка:</h2>
                        <p>{profile.product ?? "Невідомо"}</p>
                    </div>
                </div>
                :
                <Loader />
            }
        </Container>
    );
};

export default UserInfoSection;
