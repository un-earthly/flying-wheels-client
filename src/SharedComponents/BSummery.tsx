import React from 'react'
import CountUp from 'react-countup';

export default function BSummery({ sumInfo }) {
    const { tagLine, count, sign, icon } = sumInfo
    return (
        <div className='flex flex-col items-center justify-center font-bold'>
            <p className="text-8xl">
                <CountUp end={count} />{sign}</p>
            <div className='flex text-3xl items-center space-x-2'>
                <i className={`bi bi-${icon}`}></i>
                <p className='text-center'>{tagLine}</p>
            </div>
        </div>
    )
}
