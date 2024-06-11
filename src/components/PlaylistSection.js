import React, { useState, useEffect, useContext } from "react";
import ListItem from "./ListItem";
import Container from "./Container";
import { fetchUserPlaylists } from '../config';
import { PlayerContext } from "../context/PlayerContext";

const PlaylistSection = () => {
    const { token } = useContext(PlayerContext);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            if (token) {
                const response = await fetchUserPlaylists(token);
                if (response && response.items) {
                    setPlaylists(response.items);
                }
            }
        }

        fetchPlaylists()
    }, [token])

    return (<>
        <Container
            title={<div className="flex items-center">
                <svg className="mr-1" fill="white" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z" />
                    <path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z" />
                </svg>
                <span>
                    Моя бібліотека
                </span>
            </div>
            }
            className={'col-span-1 sm:col-span-2 h-[10vh] sm:h-[85vh] overflow-y-auto'}>
            <div className="mt-3 hidden sm:block">
                {playlists.map((playlist) => (
                    <ListItem
                        key={playlist.id}
                        imgUrl={playlist.images[0]?.url}
                        song={playlist.name}
                        artist={`Плейлист ${playlist.owner.display_name}`}
                        className={'max-w-56'}
                    />
                ))}
            </div>
        </Container>
    </>);
}

export default PlaylistSection;