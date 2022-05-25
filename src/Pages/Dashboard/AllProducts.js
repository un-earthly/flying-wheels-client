import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import useProducts from '../../Hooks/useProducts'
import Loading from '../../SharedComponents/Loading'
import axiosPrivate from '../../api/axiosPrivate'
export default function AllProducts() {
  const { isLoading, products, refetch } = useProducts()
  if (isLoading) {
    return <Loading></Loading>
  }
  const deleteProduct = id => {
    axiosPrivate.delete('https://dry-bayou-12932.herokuapp.com/product/' + id)
      .then(res => refetch())
  }
  return (
    <div>
      <Helmet>
        <title>All Users - Flying Wheels</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold p-5">All Users</h1>
      </div>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price Per Unit</th>
              <th>Available Quantity</th>
              <th>Minimum Order Quantity</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((p, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{p.name}</td>
                  <td>${p.pricePerUnit}</td>
                  <td>{p.availableQty}PCs</td>
                  <td>{p.minOrdQty}PCs</td>
                  <td><i onClick={() => deleteProduct(p._id)} className='bi bi-trash mx-auto text-error'></i></td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Link to='/dashboard/addproduct' className="btn w-full flex items-center justify-center my-10">Add Products<i className="bi bi-plus text-xl"></i></Link>
    </div>
  )
}
