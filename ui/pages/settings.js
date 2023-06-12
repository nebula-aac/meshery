import Head from "next/head";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPath } from "@/utils/path";

export default function Settings({ updatePagePath }) {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(`path: ${getPath()}`);
        dispatch(updatePagePath({ path: getPath() }));
    }, [dispatch]);

    return (
        <Fragment>
            <Head>
                <title>Settings | Meshery</title>
            </Head>
        </Fragment>
    )
}