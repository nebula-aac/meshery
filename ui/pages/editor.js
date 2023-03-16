import { NoSsr } from "@mui/material";
import useUpdatePath from "features/hooks/useUpdatePath";
import Head from "next/head";

export default function Editor () {
  useUpdatePath();

  return (
    <NoSsr>
      <Head>
        <title>Dashboard | Editor</title>
      </Head>
      Hello Editor
    </NoSsr>
  )
}