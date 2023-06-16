const { useEffect, useState } = require("react")
const { useDispatch } = require("react-redux")
const { default: dataFetch } = require("../utils/dataFetch")

const useFetchUserData = (url, options = {}) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await dataFetch('/api/user', {
                    credentials: 'same-origin'
                })
                setUser(userData)
                setLoading(false)
            } catch (e) {
                setError(e)
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    return { user, loading, error }
}

export default useFetchUserData