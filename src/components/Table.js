import React from "react";
import ListItem from "./ListItem";

const Table = ({ array }) => {
    const msToTime = (duration) => {
        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60)) % 60);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return minutes + ":" + seconds;
    }

    return (<>
        <table className="table-auto text-white w-full text-sm text-left">
            <thead className="border-b-[1px] border-b-customGreen">
                <tr>
                    <th className="font-medium">№</th>
                    <th className="font-medium">Назва</th>
                    <th className="font-medium">Альбом</th>
                    <th className="font-medium">
                        <div className="flex items-end">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5625 13.125C5.26456 13.125 3.99577 12.7401 2.91657 12.019C1.83738 11.2979 0.996244 10.273 0.499544 9.07386C0.00284349 7.87472 -0.127116 6.55522 0.1261 5.28222C0.379315 4.00922 1.00433 2.8399 1.92211 1.92211C2.8399 1.00433 4.00922 0.379315 5.28222 0.1261C6.55522 -0.127116 7.87472 0.00284349 9.07386 0.499544C10.273 0.996244 11.2979 1.83738 12.019 2.91657C12.7401 3.99577 13.125 5.26456 13.125 6.5625C13.125 8.30299 12.4336 9.97218 11.2029 11.2029C9.97218 12.4336 8.30299 13.125 6.5625 13.125ZM6.5625 0.875003C5.43762 0.875003 4.338 1.20857 3.4027 1.83352C2.46739 2.45847 1.73841 3.34674 1.30794 4.38599C0.877465 5.42525 0.764833 6.56881 0.984287 7.67208C1.20374 8.77535 1.74542 9.78876 2.54083 10.5842C3.33624 11.3796 4.34966 11.9213 5.45293 12.1407C6.55619 12.3602 7.69976 12.2475 8.73901 11.8171C9.77827 11.3866 10.6665 10.6576 11.2915 9.72231C11.9164 8.787 12.25 7.68738 12.25 6.5625C12.25 5.05408 11.6508 3.60745 10.5842 2.54083C9.51756 1.47422 8.07092 0.875003 6.5625 0.875003Z" fill="white" />
                                <path d="M8.41751 9.03875L6.25188 6.87312C6.21133 6.83224 6.17925 6.78376 6.15748 6.73046C6.13571 6.67716 6.12467 6.62008 6.12501 6.5625V3.0625H7.00001V6.38313L9.03876 8.4175L8.41751 9.03875Z" fill="white" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {array.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="truncate max-w-48">
                            <ListItem
                                imgUrl={item.album.images[0]?.url}
                                song={item.name}
                                artist={item.artists[0].name}
                                className={"max-w-36"}
                            />
                        </td>
                        <td className="max-w-48">{item.album.name}</td>
                        <td>{msToTime(item.duration_ms)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>);
}

export default Table;