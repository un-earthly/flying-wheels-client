import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';

import auth from '../firebase.init'
export default function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();

    if (loading) {
        return toast.warning('Please Be patient')
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
}