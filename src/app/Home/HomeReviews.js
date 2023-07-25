import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import ReviewCard from '../../SharedComponents/ReviewCard'
import Loading from '../../SharedComponents/Loading'
import { Carousel } from 'react-responsive-carousel'
import { GET_ALL_REVIEWS_URL } from '../../urls'

export default function HomeReviews() {
  const { isLoading, data: reviews } = useQuery("review", () => axios
    .get(GET_ALL_REVIEWS_URL).then(res => res.data))
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='my-20 relative lg:w-1/2 mx-auto'>

      <p className="text-5xl absolute text-gray-200 mt-10 text-center font-bold animate-pulse duration-500">Testimonials</p>
      <div className="grid grid-cols-1 gap-6 px-6">
        <Carousel infiniteLoop showStatus={false} showThumbs={false} autoPlay>
          {reviews && reviews.length > 0 ? reviews.slice(0, 10).reverse().map(r => <ReviewCard userReview={r} key={r._id} />) : <p>Reviews Not Found</p>}

        </Carousel>
      </div>
    </div>
  )
}
