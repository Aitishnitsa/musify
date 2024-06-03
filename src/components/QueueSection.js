import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Container from "./Container";
import { accessToken, fetchCurrentlyPlaying, fetchQueue } from '../config';

const QueueSection = () => {
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
    }, [accessToken]);

    return (
        <Container title="Черга" className={'col-span-2 h-[85vh] overflow-y-auto'}>
            {queue.length == 0
                ?
                <h2 className='font-medium text-sm text-white py-2'>Увімкніть плеєр!</h2>
                :
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
            }
        </Container>
    );
}

export default QueueSection;
