import React, { useEffect, useState } from "react";
import Container from "./Container";
import AuthorItem from "./AuthorItem";
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES, fetchWebApi } from '../config';

const TopArtistsSection = () => {
    const [topArtists, setTopArtists] = useState([]);
    const accessToken = localStorage.getItem("token");

    useEffect(() => {
        const fetchTopArtists = async () => {
            if (accessToken) {
                const response = await fetchWebApi(accessToken, `artists`);
                if (response && response.items) {
                    setTopArtists(response.items);
                } else {
                    window.localStorage.removeItem("token");
                    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
                }
                console.log(topArtists);
            }
        };

        fetchTopArtists();
    }, [accessToken]);

    return (
        <Container title={"Топ виконавців у цьому місяці"} className={'col-span-3'}>
            <div className='h-full flex justify-between space-x-2'>
                {topArtists.map((item) => (
                    <AuthorItem imgUrl={item.images[0]?.url} artist={item.name} />
                ))}
            </div>
        </Container>
    );
}

export default TopArtistsSection;