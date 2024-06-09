import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Container from "./Container";
import { accessToken, fetchCurrentlyPlaying, fetchQueue, fetchAddToQueue } from '../config';

const QueueSection = ({ onCurrentClick }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [queue, setQueue] = useState([]);

    useEffect(() => {
        const fetchUserQueue = async () => {
            if (accessToken) {
                try {
                    const response = await fetchCurrentlyPlaying();
                    if (response && response.item) {
                        setCurrentSong(response.item);
                    } else {
                        setCurrentSong(null);
                    }

                    const responseQueue = await fetchQueue();
                    if (responseQueue && responseQueue.queue) {
                        setQueue(responseQueue.queue);
                    } else {
                        setQueue([]);
                    }
                } catch (error) {
                    setCurrentSong(null);
                    setQueue([]);
                }
            }
        }

        fetchUserQueue();

        const interval = setInterval(fetchUserQueue, 1000);
        return () => clearInterval(interval);
    }, [accessToken]);

    return (
        <Container title={<div className="flex items-center">
            <svg className="mr-1" fill="white" height="24" width="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect fill="none" height="256" width="256" />
                <line fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" x1="88" x2="216" y1="64" y2="64" />
                <line fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" x1="88" x2="216" y1="128" y2="128" />
                <line fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" x1="88" x2="216" y1="192" y2="192" />
                <circle cx="44" cy="64" r="12" />
                <circle cx="44" cy="128" r="12" />
                <circle cx="44" cy="192" r="12" />
            </svg>
            <span>
                Черга
            </span>
        </div>
        }
            className={'col-span-1 sm:col-span-2 h-[10vh] sm:h-[85vh] overflow-y-auto'} >
            {queue.length == 0
                ?
                <h2 className='font-medium text-sm text-white py-2'>Увімкніть плеєр!</h2>
                :
                <div className="mt-3 hidden sm:block">
                    <h2 className='font-medium text-sm text-white pb-1'>Відтворюється:</h2>
                    {currentSong && currentSong.album && (
                        <ListItem
                            imgUrl={currentSong.album.images[0]?.url}
                            song={currentSong.name}
                            artist={currentSong.artists[0].name}
                            className={'max-w-56'}
                            onClick={onCurrentClick}
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
                                className={'max-w-56'}
                                onClick={
                                    async (e) => {
                                        e.preventDefault();
                                        await fetchAddToQueue(item.uri);
                                    }
                                }
                            />
                        )
                    ))}
                </div>
            }
        </Container>
    );
}

export default QueueSection;
