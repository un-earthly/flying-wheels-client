import axios from 'axios';
import React from 'react'
import Card from '@/SharedComponents/Card';
import Loading from '@/SharedComponents/Loading';
import Link from 'next/link';

export default function HomeProduction() {

  // const { isLoading, data: products } = useQuery("products",
  //   () => axios
  //     .get(GET_ALL_PRODUCTS_URL)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // )

  const products: [] = []
  const isLoading = false
  return (
    <div className='my-20 relative'>
      <img
        src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png"
        className='absolute -top-40 hidden opacity-40 lg:block'
        alt="" />
      <img
        src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png"
        className='absolute opacity-30 right-10 top-full hidden lg:block'
        alt="" />
      <h1 className="text-5xl font-bold text-center lg:my-10 duration-500 absolute -top-16 text-gray-200 -z-10 right-4 -mt-4">Some Of Our Wheels</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24 lg:my-0">
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
