import React, { useContext } from "react";
import ListItem from './ListItem';
import Container from "./Container";
import { msToTime, fetchPlaylistsTracks, fetchAddToQueue } from '../config';
import { PlayerContext } from "../context/PlayerContext";
import useFetchData from "../hooks/useFetchData";
import Loader from "./Loader";

const TracksSection = ({ playlist_id }) => {
    const { fetchQueueData } = useContext(PlayerContext);
    const currentPlaylist = useFetchData(fetchPlaylistsTracks, 'item', playlist_id);
    const tracks = useFetchData(fetchPlaylistsTracks, 'tracks', playlist_id);

    return (
        <Container title={""} className={'col-span-1 sm:col-span-3 h-[65vh] sm:h-[85vh] overflow-y-auto'}>
            {currentPlaylist && tracks ? (
                <div className='h-full'>
                    <div className="flex items-center py-2 border border-transparent border-b-customGreen">
                        <img
                            src={currentPlaylist.images[0]?.url}
                            alt="song"
                            className='h-24 w-24 rounded-sm'
                        ></img>
                        <div className={`pl-4`}>
                            <p className='text-white text-sm font-extralight truncate'>Плейлист</p>
                            <h1 className='text-white text-xl font-semibold truncate'>{currentPlaylist.name}</h1>
                            <div className="flex justify-between">
                                <p className='text-white text-base font-extralight truncate'>{`Автор ${currentPlaylist.owner.display_name},`}</p>
                                <p className='text-white text-base font-extralight truncate pl-4'>{`${currentPlaylist.tracks.total} треків`}</p>
                            </div>
                        </div>
                    </div>
                    <table className="table-auto text-white w-full text-sm text-left">
                        <tbody>
                            {tracks.map((item, index) => (
                                <tr key={index} className="rounded transition ease-in-out delay-50 hover:bg-black">
                                    <td className="pl-1.5">{index + 1}</td>
                                    <td className="truncate max-w-48">
                                        <ListItem
                                            imgUrl={item.track.album.images[0]?.url}
                                            song={item.track.name}
                                            artist={item.track.artists[0].name}
                                            className={"max-w-36"}
                                            onClick={
                                                async (e) => {
                                                    e.preventDefault();
                                                    await fetchAddToQueue(item.track.uri);
                                                    fetchQueueData();
                                                }
                                            }
                                        />
                                    </td>
                                    <td className="max-w-48 hidden sm:flex items-center py-2">{item.track.album.name}</td>
                                    <td>{msToTime(item.track.duration_ms)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) :
                <Loader />
            }
        </Container>
    );
};

export default TracksSection;
