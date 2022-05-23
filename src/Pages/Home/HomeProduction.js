import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../../SharedComponents/Card';

export default function HomeProduction() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://dry-bayou-12932.herokuapp.com/products')
      .then(res => setProducts(res.data))
  })
  return (
    <div className='my-20 relative'>
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-bounce -top-40' alt="" />
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-pulse right-10 top-full' alt="" />
      <h1 className="text-5xl font-bold text-center lg:my-10 animate-pulse duration-500 absolute -top-16 text-gray-200 -z-10 right-4 -mt-4">Some Of Our Wheels</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24 lg:my-0">
        {products.slice(0, 3).map((p, i) => <Card key={p._id} product={p} />)}
      </div>
      <Link className="btn" to='/products'>Show More</Link>
    </div>
  )
}
