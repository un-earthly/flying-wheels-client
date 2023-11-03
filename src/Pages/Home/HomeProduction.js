import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Card from '../../SharedComponents/Card';
import Loading from '../../SharedComponents/Loading';

export default function HomeProduction() {

  const { isLoading, data: products } = useQuery("products", () => axios.get('https://flying-wheels.onrender.com/products').then(res => res.data))
  return (
    <div className='my-20 lg:max-w-[1280px] mx-auto relative'>
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-bounce -top-40 hidden lg:block opacity-20' alt="" />
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-pulse right-10 top-full hidden lg:block opacity-20' alt="" />
      <h1 className="text-5xl font-bold text-center lg:my-10 duration-500">Some Of Our Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24 lg:my-0">
        {

          isLoading ?
            <Loading />
            : products.slice(0, 3).map(p => <Card key={p._id} product={p} />)
        }
      </div>
      <Link to='/products'> <button className='animate-pulse uppercase duration-500 hover:border-black hover:text-black mx-auto block text-white border py-3 hover:bg-transparent rounded-full bg-black px-12 mt-5'> Show
        More <i className="bi bi-arrow-right"></i></button>
      </Link>

    </div>
  )
}
