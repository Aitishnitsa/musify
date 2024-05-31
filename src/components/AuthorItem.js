import React from "react";

const AuthorItem = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/67/ba/a467ba62-87df-9d10-98d2-c517f68ac870/16UMGIM60882.rgb.jpg/600x600bf-60.jpg"
                alt="song"
                className='w-24 rounded-full'
            ></img>
            <p className="text-white pt-1">Author</p>
        </div>
    );
}

export default AuthorItem;