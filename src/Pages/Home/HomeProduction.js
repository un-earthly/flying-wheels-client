import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Card from '../../SharedComponents/Card';
import Loading from '../../SharedComponents/Loading';

export default function HomeProduction() {

  const { isLoading, data: products } = useQuery("products", () => axios.get('https://dry-bayou-12932.herokuapp.com/products').then(res => res.data))
  return (
    <div className='my-20 relative'>
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-bounce -top-40' alt="" />
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-pulse right-10 top-full' alt="" />
      <h1 className="text-5xl font-bold text-center lg:my-10 animate-pulse duration-500 absolute -top-16 text-gray-200 -z-10 right-4 -mt-4">Some Of Our Wheels</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24 lg:my-0">
        {

          isLoading ?
            <Loading />
            : products.slice(0, 3).map(p => <Card key={p._id} product={p} />)
        }
      </div>
      <button className='animate-pulse uppercase duration-500 hover:border-black hover:text-black mx-auto block text-white border py-3 hover:bg-transparent rounded-full bg-black px-12 mt-5'> Show
        More <i className="bi bi-arrow-right"></i></button>

    </div>
  )
}
