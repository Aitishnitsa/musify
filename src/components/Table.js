import React from "react";
import time from "../assets/time.svg";
import ListItem from "./ListItem";
import { msToTime, fetchAddToQueue } from '../config';

const Table = ({ array }) => {
    return (<>
        <table className="table-auto text-white w-full text-sm text-left">
            <thead className="border-b-[1px] border-b-customGreen">
                <tr>
                    <th className="font-medium">№</th>
                    <th className="font-medium">Назва</th>
                    <th className="font-medium hidden sm:flex">Альбом</th>
                    <th className="font-medium">
                        <div className="flex items-end">
                            <img src={time} alt="clock" />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {array.map((item, index) => (
                    <tr key={index}
                        className="rounded transition ease-in-out delay-50 hover:bg-black"
                        onClick={
                            async (e) => {
                                e.preventDefault();
                                await fetchAddToQueue(item.uri);
                            }
                        }>
                        <td className="pl-1.5">{index + 1}</td>
                        <td className="truncate max-w-48">
                            <ListItem
                                imgUrl={item.album.images[0]?.url}
                                song={item.name}
                                artist={item.artists[0].name}
                                className={"max-w-36"}
                            />
                        </td>
                        <td className="max-w-48 hidden sm:flex items-center py-2">{item.album.name}</td>
                        <td>{msToTime(item.duration_ms)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>);
}

export default Table;