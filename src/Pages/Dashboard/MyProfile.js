import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Helmet from 'react-helmet'
import { useForm } from 'react-hook-form'
import axiosPrivate from '../../api/axiosPrivate'
import auth from '../../firebase.init'
import useUser from '../../Hooks/useUser'
import Loading from '../../SharedComponents/Loading'
export default function MyProfile() {
  const [query, loading] = useAuthState(auth);
  const [updateProfile, setupdateProfile] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { isLoading, user } = useUser()

  const onSubmit = data => {
    axiosPrivate.put('https://dry-bayou-12932.herokuapp.com/updateProfile', data)
      .then(res => {
        setupdateProfile(false)
        reset()
      })
  }
  if (isLoading || loading) {
    return <Loading />
  }
  return (
    <div className='shadow-md py-5 max-w-3xl'>
      <Helmet>
        <title>My Profile - Flying Wheels</title>
      </Helmet>
      <div className='border-b-2'>
        <h1 className="text-3xl font-bold p-5">My Profile</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 my-10 p-5 space-y-4 lg:space-y-0'>
        <div className="flex flex-col items-center">
          <img src={user.img || query.photoURL} className='rounded-full w-28 h-28 object-contain' alt={user.name} />
          <button className='btn-error mt-5 btn rounded-full px-12' onClick={() => setupdateProfile(!updateProfile)}>Edit Profile</button>
        </div>
        {updateProfile ?
          <div className="col-span-2 space-y-4">

            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="name">
                <span>name</span>
                <input
                  className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  defaultValue={user.name || query.displayName}
                  placeholder="name"
                  {...register("name", { required: { value: true, message: 'name is required' } })} />
                {errors.name && <span className="text-error">{errors.name.message}</span>}
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="linkedin">
                <span>linkedin</span>
                <input
                  className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="linkedin"
                  type="text"
                  placeholder="linkedin"
                  defaultValue={user.linkedin}

                  {...register("linkedin", { required: { value: true, message: 'linked url in is required' } })} />
                {errors.linkedin && <span className="text-error">{errors.linkedin.message}</span>}
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="education">
                <span>education</span>
                <input
                  className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="education"
                  type="text"
                  placeholder="education"
                  defaultValue={user.education}

                  {...register("education", { required: { value: true, message: 'education is required' } })} />
                {errors.education && <span className="text-error">{errors.education.message}</span>}
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="location">
                <span>location</span>
                <input
                  className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="location"
                  defaultValue={user.phone}
                  {...register("location", { required: { value: true, message: 'education is required' } })} />
                {errors.location && <span className="text-error">{errors.location.message}</span>}
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="phone">
                <span>phone</span>
                <input
                  className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  placeholder="phone"
                  defaultValue={user.phone}
                  {...register("phone", { required: { value: true, message: 'phone is required' } })} />
                {errors.phone && <span className="text-error">{errors.phone.message}</span>}
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2 space-y-3" htmlFor="img">
                <span>Image</span>
                <input
                  className="appearance-none border-b focus:border-success outline-none duration-300 w-full py-2 md:text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="img"
                  type="text"
                  placeholder="Image"
                  defaultValue={query.photoURL || user.img}
                  {...register("img", { required: { value: true, message: 'image is required' } })} />
                {errors.img && <span className="text-error">{errors.img.message}</span>}
              </label>
              <button className="mt-10 btn w-full">update Profile</button>
            </form>
          </div>

          :
          <div className="col-span-2 space-y-4">
            <div>
              <p className="text-sm">Name</p>
              <p className="text-xl">{user?.name || query.displayName}</p>
            </div>
            <div>
              <p className="text-sm">Email</p>
              <p className="text-xl">{user?.email || query.email}</p>
            </div>
            <div>
              <p className="text-sm">Linked In</p>
              <p className="text-xl break-words">{user?.linkedin || 'You Havent Added Any Linked In Account'}</p>
            </div>
            <div>
              <p className="text-sm">Education</p>
              <p className="text-xl">{user?.education || 'You Havent Added Yet'}</p>
            </div>
            <div>
              <p className="text-sm">Address</p>
              <p className="text-xl">{user?.location || 'Kindly add Your Location'}</p>
            </div>
            <div>
              <p className="text-sm">Phone</p>
              <p className="text-xl">{user?.phone || 'Please Provide YOure Phone Number'}</p>
            </div>
          </div>
        }

      </div>
    </div>
  )
}
