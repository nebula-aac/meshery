import DataFetch from "@/lib/dataFetch";;

export const fetchKuberernetesClusters = () =>
  new Promise((res) => {
    res("Dummy");
  });

export const submitKubernetesClusterConfig = (formData) => new Promise((res, rej) => 
DataFetch(
      "/api/system/kubernetes",
      {
        credentials : "same-origin",
        method : "POST",
        body : formData,
      },
      (result) => res(result),
      (err) => rej(err)
    )
);
