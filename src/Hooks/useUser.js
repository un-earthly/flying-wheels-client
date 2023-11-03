import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import axiosPrivate from "../api/axiosPrivate"
import auth from "../firebase.init"
export default function useUser() {
    const [currentuser] = useAuthState(auth)
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axiosPrivate.get(`https://flying-wheels.onrender.com/user`)
            .then(res => {
                setUser(res.data)
                setIsLoading(false)
            })
    }, [currentuser])
    return { user, isLoading }
}
