import DataFetch from "@/lib/dataFetch";

export const fetchAvailableAdapters = () =>
    new Promise((res, rej) =>
        DataFetch(
            "/api/system/adapters",
            {
                credentials: "same-origin",
                method: "GET",
            },
            (result) => res(result),
            (err) => rej(err)
        )
    );