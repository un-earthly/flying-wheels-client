import axios from "axios"
import { useQuery } from "react-query"


export default function useProducts() {
    const { isLoading, data: products, refetch } = useQuery("products", () => axios.get('http://localhost/products').then(res => res.data))

    return { isLoading, products, refetch }
}
