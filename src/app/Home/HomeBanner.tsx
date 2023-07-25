import React from 'react'

export default function HomeBanner() {
    return (
        <div style={{

            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,13,49,1) 65%, rgba(0,180,222,1) 65%, rgba(0,212,255,1) 100%)"
        }} className="h-screen bg-gradient-to-r from-black from-10% to-white" >

            <div className='min-h-screen lg:flex items-center lg:items-start justify-between overflow-hidden relative'>
                <div className="p-2 lg:w-3/4 lg:mt-16">
                    <h1 className="text-7xl break-words text-white font-bold capitalize animate__animated animate__backInLeft animate__delay-2s">looking for a wheel manufacturer?</h1>
                    <p className="text-white lg:mt-3 font-semibold  lg:block lg:w-1/2 capitalize animate__animated animate__backInLeft animate__delay-1s">From startups to global brands, we supply
                        the world’s best Wheels And Wheel’s goods.</p>
                    <button className=' animate__animated animate__backInLeft uppercase hover:bg-black duration-500 hover:border-black text-white border py-3 bg-transparent rounded-full border-white px-12 mt-5'>get a quote <i className="bi bi-arrow-right"></i></button>
                </div>
                <div className="lg:w-1/4 lg:flex items-center justify-center flex-col hidden absolute right-12 bottom-24 space-y-4">
                    <p className="animate__animated animate__backInRight animate__delay-3s text-right font-semibold tracking-wider text-4xl font-[Yellowtail] text-white">Since 2012</p>
                    <button className=' animate__animated animate__backInRight animate__delay-4s uppercase hover:bg-black duration-500 hover:border-black text-white border py-3 bg-transparent rounded-full border-white px-12 mt-5'>Explore Our Journey <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div >
    )
}
