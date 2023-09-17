import Image from 'next/image'
import React from 'react'

export default function HomeBanner() {
    return (
        <div className="lg:min-h-screen lg:w-3/4 m-auto relative" >
            <Image src="/wheel.png" className='animate-spin lg:absolute lg:right-10 lg:top-10 ' style={{ animationDuration: "10s" }} alt='wheel' width={300} height={300} />

            <div className='lg:flex items-center lg:items-start justify-between overflow-hidden relative'>
                <div className="p-2 lg:w-3/4 lg:mt-16">
                    <h1 className="text-base lg:text-2xl break-words uppercase font-semibold font-Montserrat text-primary-content">looking for a wheel <span className='font-bold text-2xl lg:text-5xl'>manufacturer?</span></h1>
                    <p className="text-neutral-content lg:mt-3 font-semibold  lg:block lg:w-1/2 ">From startups to global brands, we supply
                        the world’s best Wheels And Wheel’s goods.</p>

                    <div className="bg-white w-2/3">
                        <input type="text" className="flex-1 bg-transparent p-3 border-none outline-none text-black" />
                        <button className="bg-primary-content text-black font-semibold  px-10 p-3">Send</button>
                    </div>
                    <button className='uppercase text-xs hover:bg-black duration-500 hover:border-black text-primary-content border py-3 bg-transparent rounded-none lg:rounded-full border-primary-content px-12 mt-5'>get a quote <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>

            
            <div className="lg:w-1/4 lg:flex items-center justify-center flex-col hidden lg:absolute right-12 bottom-1/4 ">
                <p className="text-right font-semibold tracking-wider text-3xl font-[Yellowtail]">Since 2012</p>
                <button className='uppercase text-primary-content hover:bg-black duration-500 hover:border-black border py-3 bg-transparent rounded-full border-primary-content px-12 text-xs mt-2'>Explore Our Journey <i className="bi bi-arrow-right"></i></button>
            </div>

        </div >
    )
}
