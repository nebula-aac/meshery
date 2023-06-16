import { Fragment, useEffect } from "react"
import { useDispatch } from "react-redux"
import { updatePagePath } from "../features/page/appSlice"
import Head from "next/head"

/**
 * Extract title from page location
 * @param {*} path 
 * @returns 
 */
const extractTitleFromPath = (path) => {
    const pageTitle = path.replace('/', '')
    return pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
}

/**
 * HOC component to wrap different pages that needs a title and path
 * to be returned in console.log
 * @param {*} GetMetadataWrapper 
 * @returns 
 */
const withMetadata = (GetMetadataWrapper) => {
    const withMetadata = (props) => {
        const dispatch = useDispatch()

        useEffect(() => {
            console.log(`path: ${getPath()}`)
            dispatch(updatePagePath(getPath()))
        }, [])

        const getPath = () => {
            let path = (typeof window !== 'undefined' ? window.location.pathname : '')
            if (path.lastIndexOf('/') > 0) {
                path = path.substring(0, path.lastIndexOf('/'))
            }
            path += (typeof window !== 'undefined' ? window.location.search : '');
            return path
        }

        const pageTitle = extractTitleFromPath(getPath())

        return (
            <Fragment>
                <Head>
                <title>{pageTitle ? `${pageTitle} | Meshery` : 'Meshery'}</title>
                </Head>
                <GetMetadataWrapper getPath={getPath} pageTitle={pageTitle} {...props} />
            </Fragment>
        )
    }

    return withMetadata
}

export default withMetadata