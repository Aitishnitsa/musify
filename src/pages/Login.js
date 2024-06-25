import React from "react";
import logo from "../assets/logo.svg";

const Login = () => {
    const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;
    const SCOPES = process.env.REACT_APP_SCOPES;

    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-4'>
            <a href="https://open.spotify.com/" className="flex justify-center">
                <img src={logo} alt='logo' className="w-2/3 sm:w-full" />
            </a>
            <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`}
                className='text-2xl sm:text-4xl font-bold bg-customBlack py-4 px-8 rounded-full'
            >Login to Spotify</a>
        </div>
    );
}

export default Login;