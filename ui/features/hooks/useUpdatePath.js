const { pageAtom } = require("features/atoms")
const { getPath } = require("lib/path")
const { useEffect } = require("react")
const { useSetRecoilState } = require("recoil")

const useUpdatePath = () => {
    const setPage = useSetRecoilState(pageAtom)

    useEffect(() => {
        const path = getPath();
        setPage(prevPage => ({ ...prevPage, path }))
    }, [setPage])

    return null;
}

export default useUpdatePath;