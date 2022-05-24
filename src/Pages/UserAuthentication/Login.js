import axios from 'axios';
import React from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useShowPass from '../../Hooks/useShowPass';
import Social from '../../SharedComponents/Social';
export default function Login() {
    const navigate = useNavigate()
    const [sendPasswordResetEmail, resetLoading, resetError] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [login, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const email = watch(["email"]);
    const onSubmit = data => {
        axios.post('http://localhost/login', { email: data.email })
            .then(res => localStorage.setItem('token', res.data.token))
        login(data.email, data.password)
    }
    const [show, updateShow] = useShowPass()
    const location = useLocation()

    const from = location.state?.from?.pathname

    if (user) {
        axios.put('http://localhost/user', { email: user.user.email, name: user.user.displayName })
        navigate(from || '/', { replace: true })
    }
    if (loading || resetLoading) {
        console.log('resetin')
    }
    return (
        <div className='bg-white md:w-1/2 mx-auto rounded px-8 pb-8 mb-4 space-y-7 mt-16'>
            <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl text-center font-bold">Login Now</h1>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="email">
                    <span>Email</span>
                    <input className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-error">Email Is required</span>}
                    {resetError && <span className='text-error'>{resetError.message}</span>}
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="password">
                    <span>Password</span>
                    <input className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password"
                        type={show ? 'text' : 'password'} placeholder="Password" {...register("password", { required: true })} />
                    {errors.password && <span className="text-error">Password Is required</span>}
                    <div className='flex items-center justify-between'>
                        <p className={`${show ? 'text-success' : 'text-error'} cursor-pointer`} onClick={updateShow}>{show ? 'Hide' : 'Show'} Password</p>
                        <p className='cursor-pointer text-error' onClick={async () => {
                            if (email[0].length > 0) {
                                await sendPasswordResetEmail(email[0]);
                                toast.success('Success Fully Sent verfication mail')
                            } else {
                                toast.error('Please Provide Email')
                            }
                        }}>Forgot Password</p>

                    </div>
                </label>
                {
                    error && <span className='mt-4 text-error'>{error?.message}</span>
                }
                <button className="btn w-full duration-500 hover:bg-transparent hover:text-black my-6">Login</button>
                <div className='flex justify-between mx-auto'>
                    <p>New Here?<Link to='/register' className='text-info underline ml-2 font-bold'>Register Now.</Link></p>
                </div>
            </form>
            <Social />
        </div>
    )
}
