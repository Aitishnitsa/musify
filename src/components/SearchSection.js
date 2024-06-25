import React, { useState } from "react";
import search from "../assets/search.svg";
import Container from "./Container";
import Table from "./Table";
import { fetchSearch } from '../config';
import useFetchData from "../hooks/useFetchData";

const SearchSection = () => {
    const [query, setQuery] = useState("");
    const searchResult = useFetchData(fetchSearch, 'tracks', query);

    const handleInputChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    return (
        <Container title={""} className={'col-span-1 sm:col-span-3 h-[85vh] overflow-y-auto'}>
            <form className="sticky top-0 mx-auto mb-3">
                <input
                    value={query}
                    onChange={handleInputChange}
                    name="search"
                    type="text"
                    className="text-white border-customGreen peer cursor-pointer z-10 h-12 rounded-full border bg-customBlack pl-12 outline-none w-full"
                />
                <div className="z-20 flex items-center h-full">
                    <img src={search} alt='search' className="text-white absolute inset-y-0 h-10 w-12 border-r border-transparent px-3" />
                </div>
            </form>
            <Table array={searchResult}></Table>
        </Container>
    );
}

export default SearchSection;
