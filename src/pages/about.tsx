import LergeTitle from '@/app/GlobalComponent/LergeTitle'
import PageIndicator from '@/app/GlobalComponent/PageIndicator'
import SmallTitle from '@/app/GlobalComponent/SmallTitle'
import UserLayout from '@/app/layouts/UserLayout'
import React from 'react'

export default function About() {
    return (
        <UserLayout>
                <PageIndicator />
            <div className='p-10'>


                
                {/* <div className='flex items-center justify-center flex-col w-2/3 mx-auto text-center space-y-5 '>
                    <LergeTitle title='Crafting a Greener Tomorrow with Our Exquisite Eco-Friendly Accessories.'/>
                   
                </div> */}
                <div className="flex">
                    <div className='mt-10 font-Montserrat flex flex-col items-start w-2/3'>
                        <SmallTitle title='A Breif Intro !' />

                        <h1 className='uppercase text-6xl'>We Revolutionized the cycle manufacturing technology.</h1>
                        <img src="/bike-tech.jpg" className='w-10/12 mt-14' alt="" />
                    </div>

                    <div className='mt-52 mx-4 p-4'>
                        <p>We pride ourselves on revolutionizing the cycle manufacturing technology. With a relentless pursuit of excellence and a commitment to innovation, we have redefined the way bicycles are designed and produced. Our journey began with a simple yet powerful vision: to create cycles that not only provide an exceptional riding experience but also contribute to a greener and healthier planet.</p>
                        <img src="/tech.jpg" className='mt-14' alt="" />
                    </div>
                </div>
                
                <div>
                    <ul className="steps steps-vertical">
                        <li className={`step step-success before:content-['Hello_World'] `}>Register</li>
                        <li className="step step-success">Choose plan</li>
                        <li className="step step-success">Purchase</li>
                        <li className="step step-success">Receive Product</li>
                    </ul>
                </div>
            </div>
        </UserLayout>
    )
}
