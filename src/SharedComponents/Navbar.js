import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from '../firebase.init'
import Loading from './Loading'

export default function Navbar() {
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return <Loading />
  }
  const menuLinks = <>
    <NavLink className="text-gray-300 duration-500 hover:text-white" to='/'>Home</NavLink>
    <NavLink className="text-gray-300 duration-500 hover:text-white" to='/blogs'>Blogs</NavLink>
    <NavLink className="text-gray-300 duration-500 hover:text-white" to='/portfolio'>My Portfolio</NavLink>

    {user ?
      <>
        <NavLink className="text-gray-300 duration-500 hover:text-white" to='/dashboard'>Dashboard</NavLink>
        <button className="btn btn-error rounded-xl" onClick={() => signOut(auth)} >Sign Out</button>
      </>
      :
      <>
        <NavLink className="text-gray-300 duration-500 hover:text-white" to='/login'>Login</NavLink>
        <NavLink className="text-gray-300 duration-500 hover:text-white" to='/register'>Register</NavLink></>

    }
  </>

  return (
    <div className="navbar">
      <div className="lg:navbar-start navbar">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
            {menuLinks}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-white normal-case text-4xl font-[Yellowtail]">Flying Wheels</Link>
      </div>
      <div className="lg:navbar-end navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center  space-x-6">
          {menuLinks}
        </ul>
      </div>
      <label htmlFor="my-drawer-2" className="text-white lg:hidden navbar-end">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
  )
}
