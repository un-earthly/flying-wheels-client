import React from 'react'


export default function ReviewCard({ userReview }) {
    const { img, name, review, ratings } = userReview
    return (

        <div className="px-8 py-4 mx-auto mt-16 border-2 border-gray-500 rounded-lg text-left w-full">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 rounded-full border-gray-500" alt="Testimonial avatar" src={img} />
            </div>

            <div className="mt-2 text-2xl font-semibold text-gray-800 md:mt-0 md:text-3xl flex items-center justify-between">
                <span>{[...Array(ratings).keys()].map((i, index) => <i key={index} className={`bi bi-star-fill `}></i>)}</span>
                <span>{ratings}/5</span>
            </div>

            <p className="mt-2 text-gray-900">{review}</p>

            <div className="flex justify-end mt-4">
                <p className="text-xl font-medium text-gray-500">{name}</p>
            </div>
        </div>


    )
}
