import React from "react";

const Container = ({ title, className, children }) => {
    return (
        <section className={`animate-fade bg-customBlack rounded-2xl isolate overflow-hidden px-6 py-5 sm:py-3 flex flex-col ${className}`}>
            <div className="relative w-fit">
                <h1 className='text-white font-bold'>{title}</h1>
                <div className="bg-customGreen h-[2px]"></div>
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </section>
    );
};

export default Container;
