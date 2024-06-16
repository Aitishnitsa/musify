import { useEffect, useState } from "react";
import { fetchWebApi } from '../config';

const useFetchTopItems = (type) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchTopItems = async () => {
            const response = await fetchWebApi(type);
            if (response && response.items) {
                setItems(response.items);
            }
        }

        fetchTopItems();
    }, [type]);

    return items;
}

export default useFetchTopItems;