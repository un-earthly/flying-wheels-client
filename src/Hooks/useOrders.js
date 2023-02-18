import axios from "axios"
import { useQuery } from "react-query"
import { GET_ALL_ORDERS_URL } from "../urls"

export default function useOrders() {
    const { isLoading, data: orders, refetch } = useQuery(
        "products",
        () => axios.get(GET_ALL_ORDERS_URL)
            .then(res => res.data)
            .catch(err => console.log(err))
    )

    return {
        isLoading,
        orders,
        refetch
    }
}
