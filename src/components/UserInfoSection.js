import React from "react";
import Container from "./Container";

const UserInfoSection = () => {
    return (<>
        <Container title={""} className={'row-span-3 h-[85vh] text-white'}>
            <div className="flex flex-col justify-between space-y-4">
                <div className="flex justify-around">
                    <img
                        src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/67/ba/a467ba62-87df-9d10-98d2-c517f68ac870/16UMGIM60882.rgb.jpg/600x600bf-60.jpg"
                        alt="song"
                        className='w-72 rounded-full'
                    ></img>
                </div>
                <div>
                    <p className="text-xs">Профіль</p>
                    <h1 className="text-5xl font-bold">User</h1>
                </div>
                <div>
                    <h2 className="font-semibold">Країна:</h2>
                    <p>Україна</p>
                </div>
                <div>
                    <h2 className="font-semibold">Email:</h2>
                    <p>example@gmail.com</p>
                </div>
                <div>
                    <h2 className="font-semibold">Підписка:</h2>
                    <p>Spotify Student</p>
                </div>
            </div>
        </Container>
    </>);
}

export default UserInfoSection;