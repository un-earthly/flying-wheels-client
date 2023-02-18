import axios from 'axios'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import { LOGIN_URL, UPDATE_USER_URL } from '../urls'

export default function Social() {
    const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname
    if (user) {
        const email = user.user.email
        axios.post(LOGIN_URL, { email })
            .then(res => localStorage.setItem('token', res.data.token))
        axios.put(
            UPDATE_USER_URL,
            {
                email: user.user.email,
                name: user.user.displayName
            }
        )

        navigate(from || '/', { replace: true })
    }
    if (loading) {
        return <p>Please Select your google account...</p>
    }
    return (
        <div>
            <div className="divider">OR</div>
            {error && <span className='text-error'>{error.message}</span>}
            <button onClick={() => SignInWithGoogle()} className="uppercase h-12 mt-3 text-white w-full duration-500 bg-gray-900 hover:bg-transparent hover:text-black border border-black">
                <i className="bi bi-google mr-2">
                </i>
            </button>
        </div>
    )
}
