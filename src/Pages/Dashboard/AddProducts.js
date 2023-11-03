import React from 'react'
import Helmet from 'react-helmet'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axiosPrivate from '../../api/axiosPrivate'

export default function AddProducts() {
  const { formState: { errors }, register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    axiosPrivate.post('https://flying-wheels.onrender.com/product', data)
      .then(res => {
        toast.success('Added Successfully')
        reset()
      })
  }
  return (
    <div>
      <Helmet>
        <title>Add Products - Flying Wheels</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold p-5">Add Products</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input className='bg-gray-200 input focus:outline-none' placeholder='Name' type="text" {...register("name", { required: { value: true, message: "Product Name is reuired" } })} />
          <label className="label">
            {errors?.name && <span className="text-error">{errors.name?.message}</span>}

          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Desciption</span>
          </label>
          <input className='bg-gray-200 input focus:outline-none' placeholder='Desc' type="text" {...register("desc", { required: { value: true, message: "Product Desciption is reuired" } })} />
          <label className="label">
            {errors?.desc && <span className="text-error">{errors.desc?.message}</span>}
          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input className='bg-gray-200 input focus:outline-none' placeholder='Img' type="text" {...register("img", { required: { value: true, message: "Product Image is reuired" } })} />
          <label className="label">
            {errors.img && <span className="text-error">{errors.img?.message}</span>}

          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input className='bg-gray-200 input focus:outline-none' placeholder='MinOrdQty' type="text" {...register("minOrdQty", { required: { value: true, message: "Minimum Order Quantity is reuired" } })} />
          <label className="label">
            {errors.minOrdQty && <span className="text-error">{errors.minOrdQty?.message}</span>}

          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price Per Unit</span>
          </label>
          <input className='bg-gray-200 input focus:outline-none' placeholder='PricePerUnit' type="text" {...register("pricePerUnit", { required: { value: true, message: "Price Per Unit is reuired" } })} />
          <label className="label">
            {errors.pricePerUnit && <span className="text-error">{errors.pricePerUnit?.message}</span>}

          </label>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input className='bg-gray-200 input focus:outline-none' placeholder='AvailableQty' type="text" {...register("availableQty", { required: { value: true, message: "Available Quantity is reuired" } })} />
          <label className="label">
            {errors.availableQty && <span className="text-error">{errors.availableQty?.message}</span>}

          </label>
        </div>
        <input className='btn w-full' type="submit" />

      </form>
    </div>
  )
}
