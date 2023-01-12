import DataFetch from "@/lib/dataFetch";;

export const fetchMesheryServerDetails = () =>
  new Promise((res, rej) =>
    DataFetch(
      "/api/system/version",
      {
        credentials: "same-origin",
        method: "GET",
      },
      (result) => res(result),
      (err) => rej(err)
    )
  );
