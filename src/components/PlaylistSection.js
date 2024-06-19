import React from "react";
import playlist from "../assets/playlist.svg";
import ListItem from "./ListItem";
import Loader from "./Loader";
import Container from "./Container";
import { fetchUserPlaylists } from '../config';
import useFetchData from "../hooks/useFetchData";

const PlaylistSection = ({ onClick }) => {
    const playlists = useFetchData(fetchUserPlaylists, 'array');

    return (
        <Container
            title={<div className="flex items-center">
                <img src={playlist} alt='playlist' className="mr-1" />
                <span>Моя бібліотека</span>
            </div>}
            className={'col-span-1 sm:col-span-2 h-[10vh] sm:h-[85vh] overflow-y-auto'}
        >
            {playlists.length === 0
                ?
                <Loader />
                :
                <div className="mt-3 hidden sm:block">
                    {playlists.map((playlist) => (
                        <ListItem
                            key={playlist?.id}
                            imgUrl={playlist?.images[0]?.url}
                            song={playlist.name}
                            artist={`Плейлист ${playlist?.owner?.display_name}`}
                            className={'max-w-56'}
                            onClick={() => onClick(playlist?.id)}
                        />
                    ))}
                </div>
            }
        </Container>
    );
}

export default PlaylistSection;
