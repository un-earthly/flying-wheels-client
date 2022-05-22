import React from 'react'
import Card from '../../SharedComponents/Card';

export default function HomeProduction() {
  class Product {
    name;
    img;
    desc;
    minOrdQty;
    availableQty;
    pricePerUnit;
    constructor(name, img, desc, minOrdQty, availableQty, pricePerUnit) {
      this.img = img
      this.desc = desc
      this.name = name
      this.minOrdQty = minOrdQty
      this.availableQty = availableQty
      this.pricePerUnit = pricePerUnit
    }
  }
  const products = [
    new Product('Tubeless road bike wheels', 'https://guides.wiggle.co.uk/sites/default/files/resize/u1938/mavic-ksyrium-ust-disc-wheelset-wheel-sets-black-lp8977100_0-400x400.jpg', 'Tubeless wheelsets have become hugely popular in recent years. These wheels are usually slightly heavier than a clincher-only version as there is extra material required on the rim to provide an airtight seal for the special tubeless tyres used. The upside is you dont use inner tubes so lose some of the all important rotating mass.Pinch punctures are also less likely due to the construction.', 100, 10000, 8),
    new Product('Tubular road bike wheels', 'https://guides.wiggle.co.uk/sites/default/files/resize/u1938/fulcrum-rapid-red-3-c24-gravel-wheelset_01-400x400.jpg', 'These are normally lighter than a clincher alternative, as there is no need for a bead seat on the inside of the rim. If using tubular tyres for sportives or while training, its recommended to carry a spare tubular tyre with you.These are more cumbersome than a spare innertube.Changing a tubular tyre is just as quick as changing an inner tube, so there is no time penalty.', 100, 10000, 6),
    new Product('Clincher road bike wheels', 'https://guides.wiggle.co.uk/sites/default/files/resize/u1938/fulcrum-racing-3-disc-brake-wheelset-wheel-sets-fulc146300-400x400.jpg', 'This type of wheel is by far the most popular and offers maximum convenience for instant riding upon installation of clincher tyres and tubes. A bead seat on the rim prevents the tyre from leaving the rim while the pressure inside the inner tube pushes the bead of the tyre into position giving you a safe to ride on wheel.', 100, 10000, 9),
    new Product('Campagnolo Khamsin C17 Road Wheelset', 'https://www.wigglestatic.com/product-media/101025334/Campagnolo-Khamsin-C17-Road-Wheelset-2019-Internal-Black-2019-CPW722A.jpg?w=430&h=430&a=7', 'The lightweight Campagnolo Khamsin C17 Road Wheelset is engineered for high-performance, even on the toughest roads.', 50, 10000, 12),
    new Product('Deep section wheels', 'https://guides.wiggle.co.uk/sites/default/files/resize/u1938/fw_f9d_0-400x401.jpg', 'Deep section wheels over the biggest aerodynamic gains for road riding speed. They cut through the wind with ease and make out-of-the-saddle sprinting an exhilerating experience thats hard to put into words.They are suited for flat terrain in general as this is where aerodynamics play a greater role.But due to technological advancements in manufacturing, they can be light enough even for riding in the mountains.', 80, 5000, 14),
    new Product('Mid section wheels', 'https://guides.wiggle.co.uk/sites/default/files/resize/u1938/reynolds-ar-41-carbon-disc-road-wheelset_01-400x400.jpg', 'These wheels are not as popular or easily noticeable as a deep section alternative. This is largely due to a common misunderstanding that a deeper wheel means faster and better. This is not necessarily the case. Your riding style and characteristics may lean towards one wheel type more than another. A mid section wheel, however, means you can reap the benefits of a lightweight rim, combined with the aerodynamic gains of a deeper section. Lots of riders highly recommend them for all-round use, as theyre light enough for climbing and fast enough for the flat roads.', 50, 10000, 20)
  ]
  return (
    <div className='my-20 relative'>
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-bounce -top-40' alt="" />
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-pulse right-10 top-full' alt="" />
      <p className="text-5xl mb-20 text-center font-bold">Some Of Our Wheels</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {products.map((p, i) => <Card key={i} id={i} product={p} />)}
      </div>
    </div>
  )
}
