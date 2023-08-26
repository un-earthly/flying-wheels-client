import { SwiperSlide } from 'swiper/react';
import React from 'react';

const ReviewCard: React.FC = () => {
    return (
        <SwiperSlide>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xs mx-auto">
                <div className="flex items-center">
                    <img src="path-to-avatar-image.jpg" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">John Doe</h2>
                        <p className="text-gray-600">Product Designer</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-700">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                </div>
                <div className="flex mt-4">
                    <svg className="w-5 h-5 text-yellow-500 fill-current mr-1" viewBox="0 0 24 24">
                        <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm2 17h-4v-1h4v1zm2-3h-8v-1h8v1zm2-3h-8v-1h8v1zm0-3h-8v-1h8v1zm0-3h-8v-1h8v1z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current mr-1" viewBox="0 0 24 24">
                        <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm2 17h-4v-1h4v1zm2-3h-8v-1h8v1zm2-3h-8v-1h8v1zm0-3h-8v-1h8v1zm0-3h-8v-1h8v1z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current mr-1" viewBox="0 0 24 24">
                        <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm2 17h-4v-1h4v1zm2-3h-8v-1h8v1zm2-3h-8v-1h8v1zm0-3h-8v-1h8v1zm0-3h-8v-1h8v1z" />
                    </svg>
                    <svg className="w-5 h-5 text-gray-300 fill-current mr-1" viewBox="0 0 24 24">
                        <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm2-13h-4v6h4v-6z" />
                    </svg>
                    <span className="text-gray-600">4.8</span>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default ReviewCard;
