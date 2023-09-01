import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function PageIndicator() {
  const pathName = useRouter().asPath.replace("/", "")
  const pageName = pathName.split("-").join(" ")
  console.log(pageName)
  return (
    <div className=''>
      <div className='relative overflow-hidden'>
        <img className='w-full h-96 object-cover' src="/doodle.jpg" alt="" />
        
        <div className='absolute flex flex-col items-center group justify-center bg-green-950/50 inset-0'>

          <img src="/wheel-thumb.png" style={{
            animationDuration: "10s",
          }}
            className='group-hover:animate-spin absolute top-5 group-hover:opacity-100 opacity-0 duration-300  h-18 w-18' alt="" />
          <div className=' border-4 hover:bg-green-400  hover:border-none duration-300 border-green-400 px-20 py-3 rounded-full'>
            <p className='font-bold text-white text-2xl uppercase flex items-center space-x-4 justify-center' ><Link href={"/"} >Flying Wheels </Link> <span className='font-mono'>{">"} {pageName}</span></p>
          </div>
        
        </div>
      </div>
    </div>
  )
}
