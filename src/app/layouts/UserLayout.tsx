import { appName } from '@/GlobalTexts'
import Footer from '@/SharedComponents/Footer'
import Link from 'next/link'
import React from 'react'
interface Props {
    children: React.ReactNode
}
export default function UserLayout({ children }: Props) {
    const user = false
    const menuLinks = <>
        <li>
            <Link className="text-primary-content duration-500 hover:text-white" href='/'>Home</Link>
        </li>

        {user ?
            <>
                <li>
                    <Link className="text-primary-content duration-500 hover:text-white" href='/dashboard'>Dashboard</Link>
                </li>
                <button className="btn btn-error rounded-xl" onClick={() => { }} >Sign Out</button>


            </>
            :
            <>

                <li>
                    <Link className="text-primary-content duration-500 hover:text-white" href='/login'>Login</Link>
                </li>
                <li>
                    <Link className="text-primary-content duration-500 hover:text-white" href='/register'>Register</Link>
                </li>
            </>


        }
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-primary-content font-semibold text-xl">{appName}</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                <div className='container bg-base-100'>
                    {children}
                    <Footer />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {menuLinks}
                </ul>

            </div>
        </div>
    )
}
