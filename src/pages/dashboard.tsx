import Link from 'next/link'
import React from 'react'
export default function Dashboard() {
    const { user, isLoading } = {}
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link href='myprofile'>My Profile</Link></li>
                        {user.Admin ?
                            <>
                                <li><Link href='allusers'>All Users</Link></li>
                                <li><Link href='allproducts'>All Products</Link></li>
                                <li><Link href='addproduct'>Add Product</Link></li>
                                <li><Link href='allorders'>All Orders</Link></li>
                            </> :
                            <>
                                <li><Link href='myreview'>My Review</Link></li>
                                <li><Link href='myorders'>My Order</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}
