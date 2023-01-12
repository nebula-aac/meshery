import DataFetch from "@/lib/dataFetch";;

export const fetchProviderDetails = () => new Promise((res, rej) => {
    DataFetch(
      "/api/provider/capabilities",
      {
        credentials: "same-origin",
        method: "GET",
      },
      (result) => {
        res(result)
      },
      (err) => rej(err)
    );
}) 