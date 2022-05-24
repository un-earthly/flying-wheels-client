import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../SharedComponents/Navbar'

export default function Dashboard() {
    return (
        <div>
            <div className="bg-black"><Navbar /></div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='myprofile'>My Profile</Link></li>
                        <li><Link to='myreview'>My Review</Link></li>
                        <li><Link to='myorders'>My Order</Link></li>
                        <li><Link to='allusers'>All Users</Link></li>
                        <li><Link to='allproducts'>All Products</Link></li>
                        <li><Link to='addproduct'>Add Product</Link></li>
                        <li><Link to='allorders'>All Orders</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
