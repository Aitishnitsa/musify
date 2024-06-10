import { useEffect, useState } from "react";
import { accessToken, fetchWebApi } from '../config';

const useFetchTopItems = (type) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchTopItems = async () => {
            if (accessToken) {
                const response = await fetchWebApi(type);
                if (response && response.items) {
                    setItems(response.items);
                }
            }
        };

        fetchTopItems();
    }, [accessToken, type]);

    return items;
}

export default useFetchTopItems;