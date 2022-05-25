import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import axiosPrivate from "../api/axiosPrivate"
import auth from "../firebase.init"
export default function useUser() {
    const [currentuser] = useAuthState(auth)
    const { isLoading, data: user, refetch } = useQuery(["userProfile", currentuser], () => axiosPrivate.get(`https://dry-bayou-12932.herokuapp.com/user`).then(res => res.data))

    useEffect(() => {
        refetch()
    }, [currentuser, user, refetch])
    return { user, refetch, isLoading }
}
