import React, { useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axiosPrivate from '../../api/axiosPrivate';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


export default function CheckOutForm({ product, payAbleAmount: price }) {
    console.log(price)
    const { address, displayName, phone, email } = product
    const navigate = useNavigate()
    const { id } = useParams()
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        axiosPrivate.post('https://dry-bayou-12932.herokuapp.com/create-payment-intent', { price })
            .then(res => setClientSecret(res.data?.clientSecret))
    }, [price])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setErr(error.message)
        } else {
            setErr('')
        }


        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: displayName,
                        address,
                        email,
                        phone
                    },
                },
            },
        );
        console.log(confirmError, paymentIntent)
        confirmError ? toast.error(confirmError)
            : toast.success(`payment successful with transaction id ${paymentIntent?.id}`)

        paymentIntent && axiosPrivate.patch(`https://dry-bayou-12932.herokuapp.com/pay/${id}`, { transactionId: paymentIntent.id, paymentStatus: true })
            .then(res => navigate('/dashboard/myorders'))


    }
    return (
        <div className='space-y-3'>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {err && <span className="text-error block">{err}</span>}
                <button className='btn btn-success btn-xs' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
    )
}
