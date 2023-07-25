import React from 'react'
import WorkingSetps from '../../SharedComponents/WorkingSetps'
export default function HowWeWork() {
  return (
    <div className='my-10 pb-14 relative'>

      <h1 className="text-5xl font-bold text-center my-10 duration-500 absolute -top-24 lg:-top-16 text-gray-200 -z-10 left-4">How We Work</h1>
      <div className='flex items-center justify-center flex-wrap lg:space-x-5 space-y-10 lg:space-y-0 my-10'>
        <WorkingSetps
          img='01' key='1' desc='Indicate what kind of wheels you are intested in' title='Request' anim='animate__fadeInLeft' />
        <WorkingSetps
          img='02' key='2' desc='You can give us a instruction or choose types and metarials to make your' title='Development' anim='animate__fadeInDown' />
        <WorkingSetps
          img='03' key='3' desc='We install the wheels with 1 week testing period' title='Installation' anim='animate__fadeInRight' />
      </div>
    </div>
  )
}
