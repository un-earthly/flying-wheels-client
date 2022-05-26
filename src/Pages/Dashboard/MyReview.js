import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Helmet from 'react-helmet'
import { useForm } from 'react-hook-form'
import axiosPrivate from '../../api/axiosPrivate'
import auth from '../../firebase.init'
import Loading from '../../SharedComponents/Loading'
import ReviewCard from '../../SharedComponents/ReviewCard'

export default function MyReview() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [user, loading] = useAuthState(auth)
  const [loadin, setLoadin] = useState(true)
  const onSubmit = data => {
    const { review, ratings } = data
    const { displayName: name, photoURL: img } = user
    axiosPrivate.post('https://dry-bayou-12932.herokuapp.com/review', { review, name, img, ratings })
  }
  const [myReview, setMyReview] = useState({})
  useEffect(() => {
    axiosPrivate.get('https://dry-bayou-12932.herokuapp.com/review/byUser')
      .then(res => {
        setLoadin(false)
        setMyReview(res.data)
      })
  })

  if (loading || loadin) {
    return <Loading />
  }
  return (
    <div className='max-w-xl shadow-lg p-5'>
      <Helmet>
        <title>My Review - Flying Wheels</title>
      </Helmet>
      <div className='border-b-2'>
        <h1 className="text-3xl font-bold p-5">My Review</h1>
      </div>
      <form className='my-10 space-y-5' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="review" className="flex flex-col space-y-3">
          <span>Review</span>
          <input id="review" type="text" className='input bg-gray-200' {...register("review", { required: { value: true, message: 'Review is important' } })} />
          <span className="text-error"> {errors.review && errors.review?.message}</span>
        </label>
        <label htmlFor="ratings" className="flex flex-col space-y-3">
          <span>Rating</span>
          <input id="ratings" type="number" className='input bg-gray-200' {...register("ratings", { required: { value: true, message: 'Review is important' }, min: { value: 1, message: 'Rating Cant Be Less Than 1' }, max: { value: 5, message: 'Rating Cant Be more Than 5' }, valueAsNumber: true })} />
          <span className="text-error"> {errors.ratings && errors.ratings?.message}</span>
        </label>
        <input className='btn w-full' disabled={myReview} type="submit" value="Post Review" />
      </form>


      {loading ? 'Please Wait' : myReview && <ReviewCard userReview={myReview} />}
    </div>
  )
}
