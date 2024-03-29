import axios from "axios"
import { useQuery } from "react-query"


export default function useOrders() {
    const { isLoading, data: orders, refetch } = useQuery("products", () => axios.get('https://flying-wheels.onrender.com/orders').then(res => res.data))

    return { isLoading, orders, refetch }
}
