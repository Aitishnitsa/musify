import React from "react";

const AuthorItem = ({ imgUrl, artist }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={imgUrl}
                alt="artist"
                className='w-24 rounded-full'
            ></img>
            <p className="text-white pt-1">{artist}</p>
        </div>
    );
}

export default AuthorItem;