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
    <>
      <h1 className="text-5xl font-bold text-center my-10 animate__animated animate__fadeInRight">Buisness Summery</h1>
      <div className='bg-gradient-to-b to-[#3B2667] from-[#BC78EC] text-white'>
        <div className="flex lg:flex-row w-full items-center justify-between p-16 flex-col lg:space-y-0 space-y-20">
          {
            summeries.map((s, i) => <BSummery sumInfo={s} key={i} />)
          }
        </div>
      </div>
    </>
  )
}
