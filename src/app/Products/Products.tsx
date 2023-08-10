import axios from 'axios'
import React from 'react'
import Card from '@/SharedComponents/Card'
import Loading from '@/SharedComponents/Loading'
import UserLayout from '../layouts/UserLayout'

export default function Products() {
    const { isLoading, data: products } = {}
    return (
        <UserLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24 lg:p-5">
                {

                    isLoading ?
                        <Loading />
                        : products.map(p => <Card key={p._id} product={p} />)
                }
            </div>
        </UserLayout>
    )
}
