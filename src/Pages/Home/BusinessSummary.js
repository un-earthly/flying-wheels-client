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
    <div className='bg-gradient-to-b to-[#3B2667] from-[#BC78EC] text-white'>
      <div className="flex w-full items-center justify-between p-16">
        {
          summeries.map((s, i) => <BSummery sumInfo={s} key={i} />)
        }
      </div>
    </div>
  )
}
