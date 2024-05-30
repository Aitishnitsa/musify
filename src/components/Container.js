import React from "react";

const Container = ({ title, children, className }) => {
    return (
        <div className={`bg-customBlack rounded-2xl isolate px-6 py-3 ${className}`}>
            <div className="relative w-fit">
                <h1 className='text-white font-bold'>{title}</h1>
                <div className="bg-customGreen h-[2px] mb-3"></div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Container;
