import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import ReviewCard from '../../SharedComponents/ReviewCard'

export default function HomeReviews() {
  class Tesimonial {
    img;
    name;
    review;
    ratings;
    constructor(img, name, review, ratings) {
      this.img = img
      this.name = name
      this.review = review
      this.ratings = ratings
    }
  }
  const tesimonials = [
    new Tesimonial('https://randomuser.me/api/portraits/women/61.jpg', 'Nash Patrik', 'Pretty Great! were totally satified', 4),
    new Tesimonial('https://randomuser.me/api/portraits/women/62.jpg', 'Julia Allen', 'Incredible service', 5),
    new Tesimonial('https://randomuser.me/api/portraits/men/63.jpg', 'Roy Scott', 'impressive', 4),
    new Tesimonial('https://randomuser.me/api/portraits/women/84.jpg', 'Michelle Garcia', 'nice commercial enviroment and fast shipping', 4),
    new Tesimonial('https://randomuser.me/api/portraits/women/65.jpg', 'June Richards', 'packaging was great', 4),
    new Tesimonial('https://randomuser.me/api/portraits/men/66.jpg', 'Nelson Little', 'loved the service', 4),
    new Tesimonial('https://randomuser.me/api/portraits/women/68.jpg', 'Bernice Knight', 'satisfying', 5),
    new Tesimonial('https://randomuser.me/api/portraits/men/69.jpg', 'Austin Kelly', 'late delivery ', 3),
    new Tesimonial('https://randomuser.me/api/portraits/men/79.jpg', 'Owen Davis', 'recommended', 5),
  ]
  return (
    <div className='my-20 relative'>

      <p className="text-5xl absolute text-gray-200 mt-10 text-center font-bold animate-pulse duration-500">Testimonials</p>
      <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
          {
            tesimonials.slice(0, 3).map((t, i) => <ReviewCard key={i} userReview={t} />)
          }
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">

          {
            tesimonials.slice(3, 6).map((t, i) => <ReviewCard key={i} userReview={t} />)
          }
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">

          {
            tesimonials.slice(6, 9).map((t, i) => <ReviewCard key={i} userReview={t} />)
          }
        </div>
      </Carousel>
    </div>
  )
}
