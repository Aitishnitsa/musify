import React from "react";

const Loader = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="h-10 w-10 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
        </div>
    )
}

export default Loader;