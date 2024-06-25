import React, { useContext } from "react";
import queueImg from "../assets/queue.svg";
import ListItem from "./ListItem";
import Loader from "./Loader";
import Container from "./Container";
import { fetchAddToQueue } from '../config';
import { PlayerContext } from "../context/PlayerContext";

const QueueSection = ({ onCurrentClick }) => {
    const { player, queue, fetchQueueData } = useContext(PlayerContext);

    return (
        <Container title={<div className="flex items-center">
            <img src={queueImg} alt='queue' className="mr-1" />
            <span>
                Черга
            </span>
        </div>}
            className={'hidden sm:block col-span-2 h-[85vh] overflow-y-auto'}>
            {queue.length === 0 ? (
                <Loader />
            ) : (
                <div className="mt-3 hidden sm:block">
                    <h2 className='font-medium text-sm text-white pb-1'>Відтворюється:</h2>
                    {player && (
                        <ListItem
                            imgUrl={player?.item?.album?.images[0]?.url}
                            song={player?.item?.name}
                            artist={player?.item?.artists[0]?.name}
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
                                onClick={async (e) => {
                                    e.preventDefault();
                                    await fetchAddToQueue(item.uri);
                                    fetchQueueData();
                                }}
                            />
                        )
                    ))}
                </div>
            )}
        </Container>
    );
}

export default QueueSection;
