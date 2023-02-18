import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { toast } from 'react-toastify'
import axiosPrivate from '../../api/axiosPrivate'
import useOrders from '../../Hooks/useOrders'
import Loading from '../../SharedComponents/Loading'
import { UPDATED_SHIPPED_STATUS_URL, DELETE_ORDER_URL } from '../../urls'

export default function AllOrders() {
  const { isLoading, orders, refetch } = useOrders()
  const [id, setId] = useState('')
  const updateShipped = id => {

    axiosPrivate.patch(UPDATED_SHIPPED_STATUS_URL + id)
      .then(res => {
        toast.success("shipped successfully")
        refetch()
      })
  }
  const deleteOrder = () => {
    axiosPrivate.delete(DELETE_ORDER_URL + id).then(() => {
      toast.success('Deleted Successfull')
      refetch()
    })
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <Helmet>
        <title>All Orders - Flying Wheels</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold p-5">All Orders</h1>
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
              <th>Name</th>
              <th>payment Status</th>
              <th>Shipped Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((o, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{o.name}</td>
                  <td>{o.paymentStatus ? <span className="text-success">Paid <span className="block">{o.transactionId}</span></span> : <span className="text-error">Not Paid</span>}</td>
                  <td><button disabled={!o.paymentStatus} onClick={() => updateShipped(o._id)}>{o.shippedStatus ? <span className="text-success">Shipped</span> : <span className="text-error">Not Shipped</span>}</button></td>
                  <td>{!o.paymentStatus ? <label className="badge bg-error border-0" htmlFor="deleteModal" onClick={() => setId(o._id)}><i className="bi bi-x "></i></label> : <span className="text-error">Order Cant Be Canceled</span>}</td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
