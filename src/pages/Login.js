import React from "react";
import logo from "../assets/logo.svg";
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES } from '../config';

const Login = () => {
    return (
        <div className='h-full flex flex-col justify-center items-center space-y-4'>
            <a href="https://open.spotify.com/">
                <img width="363" height="108" src={logo} alt='logo' />
            </a>
            <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`}
                className='text-4xl font-bold bg-customBlack py-4 px-8 rounded-full'
            >Login to Spotify</a>
        </div>
    );
}

export default Login;