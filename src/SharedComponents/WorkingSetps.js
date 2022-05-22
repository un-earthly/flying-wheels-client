import React from 'react'

export default function WorkingSetps({ img, title, desc, anim }) {
    return (
        <div class={`card lg:w-96 relative shadow-xl animate__animated animate__delay-3s ${anim}`}>
            <h1 className='absolute text-8xl text-gray-200 -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>{img}</h1>
            <div class="card-body">
                <h2 class="card-title text-blue-500">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}
