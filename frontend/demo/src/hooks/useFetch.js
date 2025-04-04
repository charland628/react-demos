import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
        }, 3000);
        return () => clearTimeout(timer);
    }, [url]);

    return [data];
};

export default useFetch;
