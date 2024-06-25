import { useEffect, useState } from "react";

const useFetchData = (fetchFunction, responseType, ...args) => {
    const [data, setData] = useState(
        responseType === 'array' || responseType === 'tracks' ? [] : null
    );

    useEffect(() => {
        const areArgsValid = args.every(arg => arg !== "" && arg !== null && arg !== undefined);

        if (!areArgsValid) {
            if (responseType === 'array' || responseType === 'tracks') {
                setData([]);
            } else {
                setData(null);
            }
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetchFunction(...args);
                if (response) {
                    switch (responseType) {
                        case 'array':
                            setData(response.items || []);
                            break;
                        case 'item':
                            setData(response);
                            break;
                        case 'tracks':
                            setData(response.tracks?.items || []);
                            break;
                        default:
                            setData(response);
                            break;
                    }
                } else {
                    if (responseType === 'array' || responseType === 'tracks') {
                        setData([]);
                    } else {
                        setData(null);
                    }
                }
            } catch (error) {
                console.error("Fetch error:", error);
                if (responseType === 'array' || responseType === 'tracks') {
                    setData([]);
                } else {
                    setData(null);
                }
            }
        };

        fetchData();
    }, [fetchFunction, responseType, ...args]);

    return data;
};

export default useFetchData;
