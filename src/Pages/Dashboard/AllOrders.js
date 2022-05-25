import React from 'react'
import Helmet from 'react-helmet'
import axiosPrivate from '../../api/axiosPrivate'
import useOrders from '../../Hooks/useOrders'
import Loading from '../../SharedComponents/Loading'

export default function AllOrders() {
  const { isLoading, orders, refetch } = useOrders()
  const updateShipped = id => {
    axiosPrivate.patch('http://localhost/orders', { id })
      .then(res => {
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
        <h1 className="text-3xl font-bold p-5">Add Products</h1>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>payment Status</th>
              <th>Shipped Status</th>
              <th>Ship To</th>
              <th>User's Phone</th>
              <th>User's Email</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((o, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{o.name}</td>
                  <td>{o.paymentStatus ? <span className="text-success">Paid <span className="block">{o.transactionId}</span></span> : <span className="text-error">Not Paid</span>}</td>
                  <td onClick={() => updateShipped(o._id)}>{o.shippedStatus ? <span className="text-success">Shipped</span> : <span className="text-error">Not Shipped</span>}</td>
                  <td>{o.address}</td>
                  <td>{o.phone}</td>
                  <td>{o.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
