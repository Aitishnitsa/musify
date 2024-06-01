import React, { useState, useEffect } from "react";
import Table from '../components/Table';
import Container from '../components/Container';
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES } from '../config';

async function fetchWebApi(accessToken) {
    const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return await res.json();
}

const TopTracksSection = () => {
    const [topSongs, setTopSongs] = useState([]);
    const accessToken = localStorage.getItem("token");

    useEffect(() => {
        const fetchTopSongs = async () => {
            if (accessToken) {
                const response = await fetchWebApi(accessToken);
                if (response && response.items) {
                    setTopSongs(response.items);
                } else {
                    window.localStorage.removeItem("token");
                    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
                }
                console.log(topSongs);
            }
        };

        fetchTopSongs();
    }, [accessToken]);

    return (
        <Container title={"Топ треків у цьому місяці"} className={'row-span-2 col-span-3'}>
            <div className='h-full pt-3'>
                <Table array={topSongs}></Table>
            </div>
        </Container>
    );
}

export default TopTracksSection;
