import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosPrivate from '../../api/axiosPrivate'
import useUser from '../../Hooks/useUser'
import Loading from '../../SharedComponents/Loading'
import { DELETE_ORDER_URL, GET_ORDERS_BY_EMAIL_URL } from '../../urls'

export default function MyOrder() {
  const { data: orders, isLoading, refetch } = useQuery(["orders"], () => axiosPrivate
    .get(GET_ORDERS_BY_EMAIL_URL)
    .then(res => res.data))
  const [id, setId] = useState('')
  const navigate = useNavigate()
  const { user, isLoading: userLoading } = useUser()
  useEffect(() => {
    user?.admin && navigate('/dashboard')
    refetch()
  }, [orders, refetch, user, navigate])
  if (isLoading || userLoading) {
    return <Loading />
  }
  const deleteOrder = () => {
    axiosPrivate
      .delete(DELETE_ORDER_URL + id).then(res => {
        toast.success('Deleted Successfull')
        refetch()
      })
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
          <label htmlFor="deleteModal" onClick={deleteOrder} className="btn btn-success">Yes</label>
          <label htmlFor="deleteModal" className="btn btn-error" >No</label>
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
                <th>{i + 1}</th>
                <td>{o.name}</td>
                <td>{o.paymentStatus ? <p className="text-success">Paid <span className="block"> {o.transactionId}</span></p> : <Link to={`/pay/${o._id}`} className="btn btn-success">Pay Now</Link>}</td>
                <td>{o.shippedStatus ? <span className="text-success">Shipped</span> : 'Pending'}</td>
                <td>{!o.paymentStatus ? <label htmlFor="deleteModal" onClick={() => setId(o._id)}><i className="bi bi-x bg-error rounded-full text-2xl px-1"></i></label> : <span className="text-error">Order Cant Be Canceled</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to='/products' className='btn flex items-center justify-center hover:bg-transparent hover:text-black mt-10'>Add More <i className="bi bi-plus text-lg"></i></Link>
    </div>
  )
}
