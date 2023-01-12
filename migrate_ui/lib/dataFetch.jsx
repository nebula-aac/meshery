import { useState, useEffect } from "react"

function DataFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log("dataFetch fetching...")
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, options);

                if (res.status === 401 || res.redirected) {
                    if (window.location.host.endsWith("3000")) {
                        window.location = "/user/login";
                    } else {
                        window.location.reload();
                    }
                }

                let result;
                if (res.ok) {
                    result = await res.text();
                    try {
                        result = JSON.parse(result);
                    } catch (e) { }
                    setData(result);
                } else {
                    throw new Error(res.statusText);
                }
            } catch (err) {
                setError(err);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url, options]);

    return { data, error, loading };
};

export function promisifiedDataFetch(url, options = {}) {
    return new Promise((resolve, reject) => {
        DataFetch(
            url,
            options,
            (result) => resolve(result),
            (err) => reject(err)
        );
    });
}

export default DataFetch;