import React from 'react'
import BSummery from '../../SharedComponents/BSummery';
export default function BusinessSummary() {
  class Sum {
    tagLine;
    count
    sign;
    icon;
    constructor(tagLine, count, sign, icon) {
      this.tagLine = tagLine
      this.count = count
      this.icon = icon
      this.sign = sign
    }
  }

  const summeries = [
    new Sum('Years Of Exprience', 10, '+', 'file-bar-graph'),
    new Sum('Countries', 70, '', 'flag'),
    new Sum('Global Brands', 25, '', 'shop'),
    new Sum('Big Achivements', 18, '', 'trophy'),
  ]
  return (
    <div className='my-36 relative'>
      <h1 className="text-5xl font-bold text-center my-10 animate-pulse duration-500 absolute -top-24 lg:-top-16 text-gray-200 -z-10 right-4">Buisness Summery</h1>
      <div className='bg-gradient-to-b to-[#3b2667] from-[#bc78ecab] text-white'>
        <div className="flex lg:flex-row w-full items-center justify-between p-16 flex-col lg:space-y-0 space-y-20">
          {
            summeries.map((s, i) => <BSummery sumInfo={s} key={i} />)
          }
        </div>
      </div>
    </div>
  )
}
