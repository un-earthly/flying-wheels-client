import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function HomeAbout() {
    return (
        <div className='flex items-center justify-between lg:flex-row lg:space-y-0 space-y-4 flex-col lg:max-w-[1280px] mx-auto lg:px-10'>
            <div className='lg:w-1/2 space-y-5  p-2 lg:p-5'>
                <p className="font-semibold">About</p>
                <h1 className="text-5xl font-bold">Our Capabilities</h1>
                <p>We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with our technical and creative expertise</p>
                <button className=' animate__animated animate__backInLeft uppercase hover:bg-black duration-500 hover:border-black hover:text-white border border-black py-3 bg-transparent rounded-full px-12 mt-5'>get a quote <i className="bi bi-arrow-right"></i></button>
            </div>
            <div className='lg:w-1/2'>
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} showIndicators={false}>
                    <img src="https://d2gqkshisthvn1.cloudfront.net/blog/wp-content/uploads/2018_06_Sfeershoot-Mantel-wielen-R50-R50D-2018-Koen-en-Martijn-100_-speedcraft-Trek-Emonda-SL6-Vredestein-Fortezza-Tubeless-Ready-banden-Bontrager-Ballista-MIPS-helm-MNTL8619.jpg" style={{ width: '100%', height: '100%', border: 'none' }} alt="" />
                    <img src="https://d2gqkshisthvn1.cloudfront.net/blog/wp-content/uploads/2-2017_06_Koopgids-wielen-Martin-DSC_6265-Mavic-Cosmic-Pro-Carbon-768x513.jpg" style={{ width: '100%', height: '100%', border: 'none' }} alt="" />
                </Carousel>
            </div>
        </div>
    )
}
