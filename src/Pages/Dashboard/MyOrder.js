import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import axiosPrivate from '../../api/axiosPrivate'
import Loading from '../../SharedComponents/Loading'

export default function MyOrder() {
  const { data: orders, isLoading } = useQuery("orders", () => axiosPrivate.get('http://localhost/orders').then(res => res.data))
  const [id, setId] = useState('')
  if (isLoading) {
    return <Loading />
  }
  const deleteOrder = () => {
    axiosPrivate.delete('http://localhost/orders/' + id)
  }

  return (
    <div>
      <Helmet>
        <title>My Orders - Flying Wheels</title>
      </Helmet>
      <div className='border-b-2'>
        <h1 className="text-3xl font-bold p-5">My Orders</h1>
      </div>
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p>Do You Want To Delete?</p>
          <label for="deleteModal" onClick={deleteOrder} className="btn btn-success">Yes</label>
          <label for="deleteModal" className="btn btn-error" >No</label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Payment Status</th>
              <th>Delivery</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={o._id}>
                {console.log(o.paymentStatus)}
                <th>{i + 1}</th>
                <td>{o.name}</td>
                <td>{o.paymentStatus ? <p className="text-success">Paid</p> : <Link to='/pay' className="btn btn-success">Pay Now</Link>}</td>
                <td>{o.shippedStatus || 'Pending'}</td>
                <td>{!o.paymentStatus ? <label for="deleteModal" onClick={() => setId(o._id)}><i className="bi bi-x bg-error rounded-full text-2xl px-1"></i></label> : <span className="text-error">Order Cant Be Canceled</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
