import Button from '@/app/GlobalComponent/Button';
import React, { ReactElement } from 'react';

const Footer: React.FC = (): ReactElement => {
    return (
        <footer className="footer p-10 bg-gray-800">
            <div className='relative z-0 md:flex items-center justify-between w-full' >
                <div className="bg-gray-900 rounded-tr-[4rem]  space-y-8 py-14 px-8 md:w-[30rem]">
                    <div className="flex flex-col text-left space-y-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-14 w-14 text-deep-green " viewBox="0 0 16 16">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l4.222 2.475c.024-.058.05-.114.08-.17.665-1.3 2.362-1.917 3.698-1.25 1.336-.667 3.033-.05 3.699 1.25a3.3 3.3 0 0 1 .08.17L16 5.713V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM0 6.873l4 2.344c-.012.542.124 1.117.416 1.694l.004.006L0 13.372v-6.5Zm.059 7.611 4.9-2.723c.563.73 1.383 1.467 2.49 2.198l.551.365.551-.365c1.107-.73 1.927-1.467 2.49-2.198l4.9 2.723A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516ZM16 13.372l-4.42-2.455.004-.006c.292-.577.428-1.152.415-1.694L16 6.873v6.5Z" />
                            <path d="M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                        </svg>
                        <h1 className="text-white text-xl font-bold">Subscribe For Our Newest Wheels, Infos, Spec Details.</h1>
                    </div>
                    <div className="mt-4 space-y-3">
                        <label className="block text-white text-sm text-left">Email Address</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 rounded mt-1 bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <Button text="Subscribe" styles='h-14' />
                </div>
                <footer className="footer p-10  text-gray-200 hover:text-white">
                    <div>
                        <span className="text-2xl mb-3  text-white">Company Info</span>
                        <p className='w-52 text-base'>A leading developer of A-grade commercial, electric car and bike projects in USA. Since its foundation the company has doubled its turnover year on year, with its staff numbers.</p>
                        <p className='flex items-center justify-center text-deep-green font-semibold'>Get a quote   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 ml-2 pt-1" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></p>
                    </div>
                    <div>
                        <span className=" text-2xl mb-3">Company Info</span>
                        <a className="link text-base link-hover">About us</a>
                        <a className="link text-base link-hover">Contact</a>
                        <a className="link text-base link-hover">Jobs</a>
                        <a className="link text-base link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="text-2xl mb-3  text-white">Company Info</span>
                        <p className='w-52 text-base'>A leading developer of A-grade commercial, electric car and bike projects in USA. Since its foundation the company has doubled its turnover year on year, with its staff numbers.</p>
                        <p className='flex items-center justify-center text-deep-green font-semibold'>01533701094</p>
                    </div>
                </footer>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;
