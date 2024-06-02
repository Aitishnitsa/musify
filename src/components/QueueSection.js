import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Container from "./Container";
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES, fetchCurrentlyPlaying, fetchQueue } from '../config';

const QueueSection = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [queue, setQueue] = useState([]);
    const accessToken = localStorage.getItem("token");

    useEffect(() => {
        const fetchUserQueue = async () => {
            if (accessToken) {
                try {
                    const response = await fetchCurrentlyPlaying(accessToken);
                    if (response && response.item) {
                        setCurrentSong(response.item);
                    } else {
                        setCurrentSong(null);
                    }

                    const responseQueue = await fetchQueue(accessToken);
                    if (responseQueue && responseQueue.queue) {
                        setQueue(responseQueue.queue);
                    } else {
                        setQueue([]);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                    window.localStorage.removeItem("token");
                    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
                }
            }
        }

        fetchUserQueue();
    }, [accessToken]);

    return (
        <Container title="Черга" className={'col-span-2 h-[85vh] overflow-y-auto'}>
            <div className="mt-3">
                <h2 className='font-medium text-sm text-white pb-1'>Відтворюється:</h2>
                {currentSong && currentSong.album && (
                    <ListItem
                        imgUrl={currentSong.album.images[0]?.url}
                        song={currentSong.name}
                        artist={currentSong.artists[0].name}
                    />
                )}
                <h2 className='font-medium text-sm text-white py-1'>Наступні в черзі:</h2>
                {queue.map((item, index) => (
                    item.album && (
                        <ListItem
                            key={index}
                            imgUrl={item.album.images[0]?.url}
                            song={item.name}
                            artist={item.artists[0].name}
                        />
                    )
                ))}
            </div>
        </Container>
    );
}

export default QueueSection;
