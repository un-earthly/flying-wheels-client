import axios from 'axios'
import React from 'react'
import Helmet from 'react-helmet'
import { useQuery } from 'react-query'
import axiosPrivate from '../../api/axiosPrivate'
import Loading from '../../SharedComponents/Loading'
import { GET_ALL_USERS_URL, MAKE_ADMIN_URL } from '../../urls'

export default function AllUsers() {
    const { data: user, isLoading, refetch } = useQuery("alluser",
        () => axios.get(GET_ALL_USERS_URL).then(res => res.data))

    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = id => {
        axiosPrivate.patch(MAKE_ADMIN_URL, { id })
            .then(res => {
                refetch()
            })
    }
    return (
        <div>
            <Helmet>
                <title>All Users - Flying Wheels</title>
            </Helmet>
            <div>
                <h1 className="text-3xl font-bold p-5">All Users</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((u, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td className='cursor-pointer capitalize' onClick={() => makeAdmin(u._id)}>{u.Admin ? 'admin' : 'user'}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
