import React from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useShowPass from '../../Hooks/useShowPass';
import Loading from '../../SharedComponents/Loading';

export default function Register() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUser, user, loading, error] = useCreateUserWithEmailAndPassword(auth)
    const [updateProfile, updating, updaingFailed] = useUpdateProfile(auth)
    const onSubmit = async (data) => {
        await createUser(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };
    const [show, updateShow] = useShowPass()
    if (user) {
        navigate('/')
    }
    if (loading || updating) {
        return <Loading />
    }
    return (
        <div className='bg-white md:w-1/2 mx-auto rounded px-8 pb-8 mb-4 space-y-7 mt-16'>
            <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl text-center font-bold">Register Now</h1>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="name">
                    <span>Name</span>
                    <input className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" {...register("name", { required: true })} />
                    {errors.name && <span className="text-error">Name Is required</span>}

                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="email">
                    <span>Email</span>
                    <input className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-error">Email Is required</span>}

                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="password">
                    <span>Password</span>
                    <input className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password"
                        type={show ? 'text' : 'password'} placeholder="Password" {...register("password", { required: true })} />
                    {errors.password && <span className="text-error">Password Is required</span>}
                    <p className={`${show ? 'text-success' : 'text-error'} cursor-pointer`} onClick={updateShow}>{show ? 'Hide' : 'Show'} Password</p>
                </label>
                {error && <span className="text-error">{error.message}</span>}
                {updaingFailed && <span className="text-error">{updaingFailed.message}</span>}
                <button className="btn w-full duration-500 hover:bg-transparent hover:text-black my-6">Register</button>
                <div className='flex justify-between mx-auto'>
                    <p>Already Have An Account?<Link to='/login' className='text-info underline ml-2 font-bold'>Login Now.</Link></p>
                </div>
            </form>
        </div>
    )
}
