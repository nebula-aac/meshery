import dataFetch from "@/lib/dataFetch"

export const fetchAvailableAdapters = () =>
    new Promise((res, rej) =>
        dataFetch(
            "/api/system/adapters",
            {
                credentials: "same-origin",
                method: "GET",
            },
            (result) => res(result),
            (err) => rej(err)
        )
    );