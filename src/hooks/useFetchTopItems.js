import { useContext, useEffect, useState } from "react";
import { fetchWebApi } from '../config';
import { PlayerContext } from "../context/PlayerContext";

const useFetchTopItems = (type) => {
    const { token } = useContext(PlayerContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchTopItems = async () => {
            if (token) {
                const response = await fetchWebApi(token, type);
                if (response && response.items) {
                    setItems(response.items);
                }
            }
        };

        fetchTopItems();
    }, [token, type]);

    return items;
}

export default useFetchTopItems;