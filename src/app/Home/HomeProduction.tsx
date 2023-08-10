import axios from 'axios';
import React from 'react'
import Loading from '@/SharedComponents/Loading';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('@/SharedComponents/Card'), { ssr: false })
export default function HomeProduction() {

  // const { isLoading, data: products } = useQuery("products",
  //   () => axios
  //     .get(GET_ALL_PRODUCTS_URL)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // )

  const products = [{
    "_id": "product_id",
    "name": "Mountain Bike",
    "description": "A sample mountain bike",
    "price": 899,
    "quantityInStock": 15,
    "category": "Mountain Bike",
    "images": ["/wheel.png", "/cycle-wheel.png"],
    "specifications": {
      "Suspension Type": "Full Suspension",
      "Frame Material": "Aluminum",
      "Wheel Size": "29 inches",
      "Gears": "21-speed"
    },
    "minOrderQuantity": 100,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }]
  const isLoading = false
  return (
    <div className='lg:min-h-screen'>

      <h1 className="lg:text-5xl text-2xl font-bold lg:my-10 duration-500 text-gray-200 -z-10 lg:text-center -mt-4">Some Of Our Wheels</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:my-0 h-full p-4">
        {

          isLoading ?
            <Loading />
            : products ? products?.slice(0, 3)?.map(p => <Card
              key={p._id}
              product={p}
            />
            ) : <p>Product Not Found</p>
        }
      </div>
      <Link
        href='/products'>
        <button
          className='animate-pulse uppercase duration-500 hover:border-black hover:text-black mx-auto block text-white border py-3 hover:bg-transparent rounded-full bg-black px-12 mt-5'
        > Show More
          <i className="bi bi-arrow-right"></i>
        </button>
      </Link>

    </div>
  )
}
