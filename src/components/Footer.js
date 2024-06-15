import React, { useState, useContext } from "react";
import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/arrowUp.svg";
import ControlButtons from "./ControlButtons";
import SeekBar from "./SeekBar";
import ListItem from "./ListItem";
import { PlayerContext } from "../context/PlayerContext";

const Footer = () => {
    const [isHidden, setIsHidden] = useState(true);
    const { player } = useContext(PlayerContext);

    return (
        (!isHidden ?
            <footer className="animate-fade-up fixed bottom-0 border-2 border-transparent border-t-customGreen w-full bg-customBlack m-0 py-2 px-2 md:px-16" >
                <div className="relative flex items-center justify-between">
                    <ListItem
                        imgUrl={player?.item?.album?.images[0]?.url}
                        song={player?.item?.name}
                        artist={player?.item?.artists[0]?.name}
                    />
                    <div className="sm:absolute left-1/3 right-1/3">
                        <ControlButtons is_playing={player.is_playing} />
                    </div>
                    <button onClick={() => setIsHidden(true)}>
                        <img src={arrowDown} alt='hide footer' className="h-6 w-6 sm:h-9 sm:w-9" />
                    </button>
                </div>
                <SeekBar
                    player={player}
                    progress={player.progress_ms}
                    duration={player.item.duration_ms}
                />
            </footer >
            :
            <div className="animate-flip-down absolute bottom-0 w-full flex justify-end m-0 py-2 px-2 md:px-16">
                <button onClick={() => setIsHidden(false)}>
                    <img src={arrowUp} alt='show footer' className="h-6 w-6 sm:h-9 sm:w-9" />
                </button>
            </div>
        )
    );
}

export default Footer;