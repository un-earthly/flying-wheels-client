import React from 'react'
import Navbar from '../../SharedComponents/Navbar'
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../../SharedComponents/Footer';
export default function MyPortfolio() {
    return (
        <div className='py-5 bg-[url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)] bg-[#1D2B38] bg-blend-multiply'>
            <Navbar />

            <div className='text-gray-300 w-5/6 mx-auto mt-14'>
                <div className='lg:flex items-center justify-between'>
                    <div>
                        <h1 className='lg:text-7xl text-5xl break-words'>MD.<ReactTypingEffect data-name
                            text={["ALAMIN"]}
                        /></h1>

                        <p className="text-xl text-[#CAF1FF]">- Frontend developer</p>

                    </div>
                    <div className='text-3xl space-x-5'>
                        <a href="https://github.com/un-earthly" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                        <a href="mailto:vijayalamin@gmail.com"><i className="bi bi-envelope"></i></a>
                    </div>
                </div>
                <div className='mt-20 lg:flex items-center justify-between py-5'>
                    <div>
                        <h1 className="text-2xl text-gray-600">Education</h1>
                        <p>Duaripara Govt. Collage</p>
                        <p>2020-2022</p>
                        <div className='my-5'>
                            <h1 className="text-2xl text-gray-600">Technologies</h1>
                            <ul>
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Express js</li>
                                <li>Mongo db</li>
                                <li>API Intregation</li>
                                <li>Tailwind CSS Daisy ui.</li>
                                <li>Stripe</li>
                                <li>JWT</li>
                            </ul>

                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl text-gray-600">Projects</h1>
                        <a href="https://gadgets-heaven-97bc2.web.app/" target="_blank" className='btn-link block' rel="noopener noreferrer">Gadgets Heaven</a>
                        <a href="https://the-passionate-photographer.web.app/" target="_blank" className='btn-link block' rel="noopener noreferrer">The Passionate Photographer</a>
                        <a href="https://money-master-solve.netlify.app/" target="_blank" className='btn-link block' rel="noopener noreferrer">Money Master</a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
