import { appName } from '@/GlobalTexts'
import Footer from '@/SharedComponents/Footer'
import Link from 'next/link'
import React from 'react'
import Button from '../GlobalComponent/Button'
import { useRouter } from 'next/router'
interface Props {
    children: React.ReactNode
}
export default function UserLayout({ children }: Props) {
    const user = false
    const navigate = useRouter().push
    const menuLinks = <>
        <li>
            <Link className="hover:text-primary font-semibold duration-500 hover:bg-transparent text-gray-950" href='/'>Home</Link>
        </li>
        {/* <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 btn-ghost btn hover:bg-transparent">About Us</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className='w-full m-auto'>Item 1</a></li>
                <li><a className='w-full m-auto'>Item 2</a></li>
            </ul>
        </div> */}
        <li>
            <Link className="hover:text-primary font-semibold duration-500 hover:bg-transparent text-gray-950" href='/about'>About Us</Link>
        </li>
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 btn-ghost btn hover:bg-transparent">Services</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className='w-full m-auto'>Item 1</a></li>
                <li><a className='w-full m-auto'>Item 2</a></li>
            </ul>
        </div>

        <Button
            text='Get A Qoute'
            onClick={() => navigate("/get-a-qoute")}
        />
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar justify-around py-10 sticky top-0 z-50 bg-gray-50/70 bg-blend-saturation backdrop-blur-lg">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="px-2 mx-2 hover:text-primary duration-150  font-semibold text-xl">
                        <Link href="/">{appName}</Link>
                    </div>
                    <div className=' flex items-center justify-between  rounded-full pr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <input placeholder='Search Products' type="text" className="input flex-1 bg-transparent focus:outline-none" />

                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                <div className=''>
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
