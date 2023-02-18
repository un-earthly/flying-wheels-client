import axios from "axios"
import { useQuery } from "react-query"
import { GET_ALL_PRODUCTS_URL } from "../urls"


export default function useProducts() {
    const { isLoading, data: products, refetch } = useQuery("products", () =>
        axios.get(GET_ALL_PRODUCTS_URL).then(res => res.data))

    return { isLoading, products, refetch }
}
