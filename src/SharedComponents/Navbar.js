import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from '../firebase.init'
import Loading from './Loading'

export default function Navbar() {
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return <p>Loading</p>
  }
  const menuLinks = <>
    <NavLink className="text-gray-600" to='/'>Home</NavLink>
    <NavLink className="text-gray-600" to='/blogs'>Blogs</NavLink>
    <NavLink className="text-gray-600" to='/portfolio'>My Portfolio</NavLink>

    {user ?
      <>
        <NavLink className="text-gray-600" to='/profile'>My Profile</NavLink>
        <button className="btn btn-error rounded-xl" onClick={() => signOut(auth)} >Sign Out</button>
      </>
      :
      <>
        <NavLink className="text-gray-600" to='/login'>Login</NavLink>
        <NavLink className="text-gray-600" to='/register'>Register</NavLink></>

    }
  </>

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuLinks}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal items-center  space-x-6">
          {menuLinks}
        </ul>
      </div>
    </div>
  )
}
