import axios from 'axios'
import React from 'react'
import Helmet from 'react-helmet'
import { useQuery } from 'react-query'
import axiosPrivate from '../../api/axiosPrivate'
import Loading from '../../SharedComponents/Loading'

export default function AllUsers() {
    const { data: user, isLoading, refetch } = useQuery("alluser", () => axios.get('https://dry-bayou-12932.herokuapp.com/alluser').then(res => res.data))

    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = id => {
        axiosPrivate.patch('https://dry-bayou-12932.herokuapp.com/makeadmin', { id })
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

            <div class="overflow-x-auto">
                <table class="table w-full">
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
                                <tr>
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
