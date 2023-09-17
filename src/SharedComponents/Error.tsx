import Link from 'next/link'
import React from 'react'

export default function Error() {
    return (
        <div className='min-h-screen lg:flex flex-col items-center justify-center'>
            <div className="p-3">
                <div className="relative hidden lg:flex">
                    <p className='text-7xl font-bold text-error'>404!</p>
                    <img className='absolute top-16 -left-80 opacity-5' src="https://monophy.com/media/h12RdXnZSvAlx1C4Zw/monophy.gif" alt="" />
                </div>
                <p className='text-7xl font-bold text-error lg:hidden'>404!</p>
                <img className='animate-pulse' src="https://manufacturer.stylemixthemes.com/bicycle/wp-content/themes/manufacturer/images/robo.png" alt="" />
            </div>
            <div className='relative overflow-hidden'>
                <img className='absolute -right-48 lg:hidden' src="https://monophy.com/media/h12RdXnZSvAlx1C4Zw/monophy.gif" alt="" />
                <Link className='text-success underline font-bold text-6xl' href='/'>Please Get Back To Home</Link>
            </div>
        </div>
    )
}
