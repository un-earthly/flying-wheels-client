import axios from "axios"
import { useQuery } from "react-query"


export default function useOrders() {
    const { isLoading, data: orders, refetch } = useQuery("products", () => axios.get('http://localhost/orders').then(res => res.data))

    return { isLoading, orders, refetch }
}
