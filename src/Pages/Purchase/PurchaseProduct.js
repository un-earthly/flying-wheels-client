import axiosPrivate from '../../api/axiosPrivate'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../SharedComponents/Loading'
import { useQuery } from 'react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Helmet from 'react-helmet'
import useUser from '../../Hooks/useUser'

export default function PurchaseProduct() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, isLoading: userLoading } = useUser()

    const { isLoading, data: product } = useQuery(["product", user], async () => {
        const { data } = await axiosPrivate.get(`https://flying-wheels.onrender.com/products/${id}`)
        return data
    })
    useEffect(() => {
        user?.admin && navigate('/dashboard')

    })
    if (isLoading || userLoading) {
        return <Loading />
    }
    const { name: displayName, email } = user
    const { img, name, desc, minOrdQty, availableQty, pricePerUnit } = product
    const onSubmit = data => {
        const { address, orderQuantity, phone } = data
        axiosPrivate.post('https://flying-wheels.onrender.com/purchase', { address, orderQuantity, phone, displayName, email, id, name, pricePerUnit, paymentStatus: false })
            .then(res => res.data && navigate('/dashboard/myorders'))
            .catch(err => {
                err.request.status === 302 && toast.error('Order Already Exists For This Product') && navigate('/dashboard/myorders')
            })
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
            <Helmet>
                <title>Buy {name} - Fly Wheels</title>
            </Helmet>
            <div className="bg-base-100 p-5">
                <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
                    <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="name">
                        <span>Email</span>
                        <input value={email} disabled className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="email">
                        <span>Name</span>
                        <input value={displayName} disabled className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="address">
                        <span>Address</span>
                        <input
                            className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type='text' {...register("address", { required: { value: true, message: 'please provide a valid address' } })} />
                        {errors.address && <span className="text-error">{errors?.address.message}</span>}
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="address">
                        <span>Phone</span>
                        <input
                            className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type='tel' {...register("phone", { required: { value: true, message: 'Phone Number Is Required' }, pattern: { value: /^\d{11}$/, message: 'please enter a valid number' } })} />
                        {errors.phone && <span className="text-error capitalize">{errors?.phone.message}</span>}
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="address">
                        <span>Order Quantity</span>
                        <input
                            className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="orderQuantity"
                            defaultValue={minOrdQty}
                            type='number' {...register("orderQuantity", { required: true, min: { value: minOrdQty, message: `you cant order less than minimum order quantity` }, valueAsNumber: true, max: { value: availableQty, message: `you cant order more than available quantity` } })} />
                        {errors.orderQuantity && <span className="text-error capitalize">{errors?.orderQuantity.message}</span>}
                    </label>
                    <button className="btn w-full duration-500 hover:bg-transparent hover:text-black my-6">Proceed</button>

                </form>

            </div>
            <div className='lg:p-20 p-5 items-center flex-col flex space-y-5 col-span-2'>
                <img className='w-2/4 object-contain' src={img} alt={name} />
                <div className='space-y-4'>
                    <div>
                        <h1 className="capitalize text-gray-600 text-xl font-semibold">{name}</h1>

                        <p className='text-gray-400 text-sm'>Product Id:{id}</p>
                    </div>
                    <p className='text-gray-400 text-sm'>{desc}</p>
                    <div>
                        <p className='text-gray-400 text-sm'>Price Per Unit: <span className="text-gray-600 font-semibold">${pricePerUnit} </span>/Pc</p>
                        <p className='text-gray-400 text-sm'>Minimum Order Quantity: <span className="text-gray-600 font-semibold">{minOrdQty} </span>Pcs</p>
                        <p className='text-gray-400 text-sm'>Available Quantity: <span className="text-gray-600 font-semibold">{availableQty} </span>Pcs</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
