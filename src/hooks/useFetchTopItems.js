import { useEffect, useState } from "react";
import { accessToken, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES, fetchWebApi } from '../config';

const useFetchTopItems = (type) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchTopItems = async () => {
            if (accessToken) {
                const response = await fetchWebApi(type);
                if (response && response.items) {
                    setItems(response.items);
                } else {
                    window.localStorage.removeItem("token");
                    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
                }
                console.log(items);
            }
        };

        fetchTopItems();
    }, [accessToken, type]);

    return items;
}

export default useFetchTopItems;