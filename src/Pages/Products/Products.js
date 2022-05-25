import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Card from '../../SharedComponents/Card'
import Loading from '../../SharedComponents/Loading'
import Navbar from '../../SharedComponents/Navbar'

export default function Products() {
    const { isLoading, data: products } = useQuery("products", () => axios.get('https://dry-bayou-12932.herokuapp.com/products').then(res => res.data))

    return (
        <>
            <div className="bg-black"><Navbar /></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24 lg:p-5">
                {

                    isLoading ?
                        <Loading />
                        : products.map(p => <Card key={p._id} product={p} />)
                }
            </div>
        </>
    )
}
