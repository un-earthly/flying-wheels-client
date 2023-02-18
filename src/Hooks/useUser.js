import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import axiosPrivate from "../api/axiosPrivate"
import auth from "../firebase.init"
import { GET_SINGLE_USER_URL } from "../urls"
export default function useUser() {
    const [currentuser] = useAuthState(auth)
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axiosPrivate.get(GET_SINGLE_USER_URL)
            .then(res => {
                setUser(res.data)
                setIsLoading(false)
            })
    }, [currentuser])
    return { user, isLoading }
}
