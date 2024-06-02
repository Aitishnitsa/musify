import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Container from "./Container";
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES, fetchUserPlaylists } from '../config';

const PlaylistSection = () => {
    const [playlists, setPlaylists] = useState([]);
    const accessToken = localStorage.getItem("token");

    useEffect(() => {
        const fetchPlaylists = async () => {
            if (accessToken) {
                const response = await fetchUserPlaylists(accessToken);
                if (response && response.items) {
                    setPlaylists(response.items);
                } else {
                    window.localStorage.removeItem("token");
                    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
                }
                console.log(playlists);
            }
        }

        fetchPlaylists()
    }, [accessToken])

    return (<>
        <Container title={"Плейлисти"} className={'col-span-2 h-[85vh] overflow-y-auto'}>
            <div className="mt-3">
                {playlists.map((playlist) => (
                    <ListItem
                        key={playlist.id}
                        imgUrl={playlist.images[0]?.url}
                        song={playlist.name}
                        artist={`Плейлист ${playlist.owner.display_name}`}
                    />
                ))}
            </div>
        </Container>
    </>);
}

export default PlaylistSection;