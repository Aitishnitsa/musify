import React, { useEffect, useState } from "react";
import Container from "./Container";
import Table from "./Table";
import { accessToken, fetchSearch } from '../config';

const SearchSection = () => {
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    useEffect(() => {
        const fetchQuery = async () => {
            if (accessToken && query !== "") {
                try {
                    const response = await fetchSearch(query);
                    if (response && response.tracks && response.tracks.items) {
                        setSearchResult(response.tracks.items);
                    } else {
                        console.log('No items found');
                    }
                } catch (error) {
                    console.log('Error fetching search results:', error);
                }
            }
        }

        fetchQuery();
    }, [accessToken, query]);

    return (
        <Container title={""} className={'col-span-3 h-[85vh]'}>
            <form className="relative mx-auto mb-3">
                <input
                    value={query}
                    onChange={handleInputChange}
                    name="search"
                    type="text"
                    className="text-white border-customGreen peer cursor-pointer z-10 h-12 rounded-full border bg-customBlack pl-12 outline-none w-full"
                />
                <div className="z-20 flex items-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="text-white absolute inset-y-0 h-10 w-12 border-r border-transparent px-3"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M15.1667 21.8333C18.8486 21.8333 21.8333 18.8486 21.8333 15.1667C21.8333 11.4848 18.8486 8.5 15.1667 8.5C11.4848 8.5 8.5 11.4848 8.5 15.1667C8.5 18.8486 11.4848 21.8333 15.1667 21.8333Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23.5 23.5L19.875 19.875" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </form>
            <Table array={searchResult}></Table>
        </Container>
    );
}

export default SearchSection;
