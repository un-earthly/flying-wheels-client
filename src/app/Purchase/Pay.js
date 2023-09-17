import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import axiosPrivate from '../../api/axiosPrivate'
import Loading from '../../SharedComponents/Loading'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PAY_FOR_PRODUCT_URL } from '../../urls'
const stripePromise = loadStripe('pk_test_51L341gHnKmDPsoOitaN1VU4A1hMOWNLHbLdmsPNgMUVvaf6kKBi3kbGwFKYp2eQW0JYvrA4OBB9FYYcIoF766jWE00KquO9Iji');
export default function Pay() {
    const { id } = useParams()
    const { isLoading, data: product } = useQuery("product", async () => {
        const { data } = await axiosPrivate.get(PAY_FOR_PRODUCT_URL + id)
        return data
    })
    if (isLoading) {
        return <Loading />
    }
    const { orderQuantity, displayName, name, pricePerUnit } = product
    const payAbleAmount = (orderQuantity * pricePerUnit)
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row w-3/4">
                    <div className="text-center lg:text-left shadow-lg p-5 flex-grow">
                        <h1 className="text-lg font-bold">Hello {displayName}</h1>
                        <p className="py-3 text-xl capitalize">You Have ordered {orderQuantity} pcs {name}.</p>
                        <p className="text-lg text-info capitalize">Please Pay ${payAbleAmount.toLocaleString()}</p>

                    </div>
                    <div className="card w-full shadow-2xl bg-base-100 flex-grow">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm product={product} payAbleAmount={payAbleAmount} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
