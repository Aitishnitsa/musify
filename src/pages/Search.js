import React from 'react';
import PlaylistSection from '../components/PlaylistSection';
import QueueSection from '../components/QueueSection';
import SearchSection from '../components/SearchSection';

const Search = () => {
    return (<>
        <div className='h-[93vh] flex justify-center items-center'>
            <div className='grid grid-cols-7 gap-8 w-full relative max-w-7xl mx-auto px-6 body-font'>
                <PlaylistSection></PlaylistSection>
                <SearchSection></SearchSection>
                <QueueSection></QueueSection>
            </div>
        </div>
    </>);
}

export default Search;