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
    new Product('Campagnolo Khamsin C17 Road Wheelset', 'https://www.wigglestatic.com/product-media/101025334/Campagnolo-Khamsin-C17-Road-Wheelset-2019-Internal-Black-2019-CPW722A.jpg?w=430&h=430&a=7', 'The lightweight Campagnolo Khamsin C17 Road Wheelset is engineered for high-performance, even on the toughest roads.', 50, 10000, 402),
    new Product('Spank SPOON 32 Rear Wheel', 'https://www.wigglestatic.com/product-media/103736073/Spank%20SPOON%2032%20Rear%20Wheel.jpg?w=430&h=430&a=7', 'Prepared for extreme MTB rides, the Spank SPOON 32 Rear Wheel gives you exceptionally smooth and reliable performance on your mountain bike.', 80, 5000, 401),
    new Product('DT Swiss HX 1501 Spline 30 Boost Wheelset', 'https://www.wigglestatic.com/product-media/110348334/dtswiss-hx5101-wheelset.jpg?w=200&h=200&a=7', 'Featuring a high-quality aluminium rim construction, 6-bolt disc brake compatibility and Boost axle spacing, the DT Swiss HX 1501 Spline 30 Boost Wheelset is ready to conquer wherever your next mountain bike adventure takes you.', 80, 5000, 340),
    new Product('Hope Fortus 30 MTB Rim', 'https://www.wigglestatic.com/product-media/102996532/Hope-Fortus-30-MTB-Rim-Rims-Black-WHSP069-0.jpg?w=430&h=430&a=7', 'A hard and hearty rim for taking on everything the mountain has to offer, this Hope hoopgives a sturdy and solid performance as you tackle the trails and hunt for the cross country podium.', 80, 5000, 540),
    new Product('Race Face Arc Offset 35 MTB Rim', 'https://www.wigglestatic.com/product-media/157344/Race-Face-Arc-MTB-Rim-Rims-Black-Grey-2017-ORM17ARC2727-532H-2.jpg?w=430&h=430&a=7', 'A favourite of bike and wheel builders everywhere, the Race Face Arc MTB Rim is tubeless ready, strong and surprisingly lightweight.', 80, 5000, 324),
    new Product('Octane One Solar Trail MTB Rim', 'https://www.wigglestatic.com/product-media/155809/prod155809_Black_NE_01.jpg?w=430&h=430&a=7', 'The Octane One Solar Trail MTB Rim is engineered to work perfectly as part of a front or rear wheel build for enduro, all mountain and trail use', 80, 5000, 604),
    new Product('Sun Ringle Duroc 50 MTB Rim', 'https://www.wigglestatic.com/product-media/101863347/prod183874_Black_NE_01.jpg?w=430&h=430&a=7', 'If youre looking for a MTB rim that s as big as they come, youll also want the assured performance of Sun Ringles Duroc range.', 80, 5000, 714),
    new Product('Hope Fortus 23 MTB Rim', 'https://www.wigglestatic.com/product-media/102996503/Hope-Fortus-23-MTB-Rim-Rims-Black-WHSP065.jpg?w=430&h=430&a=7', 'Rolling you through the roughest terrains and bumpiest trails with consistency and reliability, this hard-wearing Hope hoop is the ideal rim for the rampant MTB rider.', 80, 5000, 104),
    new Product('Hope Fortus 26 MTB Rim', 'https://www.wigglestatic.com/product-media/102996439/Hope-Fortus-26-MTB-Rim-Rims-Black-WHSP067.jpg?w=430&h=430&a=7', 'Rolling you from trail to trail with poise, power and pace, this robust Hope rim is heartily built to withstand the abuse of the cross country course.', 80, 5000, 75),
    new Product('Nukeproof Horizon V2 Rim', 'https://www.wigglestatic.com/product-media/104702686/Nukeproof-Horizon-V2-Rim-Rims-Black-27-5-NUKHORV2275RF-0.jpg?w=430&h=430&a=7', 'The Nukeproof Horizon V2 Rim is engineered to meet the demands of Enduro and DH by delivering exceptional strength and durability on the toughest of MTB rides.', 80, 5000, 65),
    new Product('Spank Oozy Trail 395+ MTB Rim', 'https://www.wigglestatic.com/product-media/90142540/Spank-Oozy-Trail-395-MTB-Rim-Rims-Black-2017-C02OZ392920ASPK.jpg?w=430&h=430&a=7', 'The Oozy Trail 395+ is an ultra-wide alloy rim with Trail weight and true All-Mountain strength and durability. Designed to optimise the performance of both plus-size and modern "high volume" standard tyres, this rim gets the most from your tyre', 80, 5000, 75),
    new Product('Stans No Tubes Crest MK4 XC Rim Black/Grey 29"', 'https://www.wigglestatic.com/product-media/109640933/Stans-No-Tubes-Crest-MK4-XC-Rim-Rims-Black-Grey-850-RTC470002.jpg?w=430&h=430&a=7', 'Featuring a robust aluminium construction, a gravel optimised 25mm rim width and a lightweight tubeless-ready design, the Stans No Tubes Crest MK4 XC Rim is ready for exploring wherever your next adventure takes you.', 80, 5000, 105),
    new Product('Easton EC90 TT Road Rim', 'https://www.wigglestatic.com/product-media/100965055/prod176648_Black_NE_01.jpg?w=430&h=430&a=7', 'Focused on the fastest run possible, this terrific Time Trial rim from Easton has all the attributes to propel you to the podium with pace and precision', 80, 5000, 145),
    new Product('Sun Ringle Duroc 30 MTB Rim', 'https://www.wigglestatic.com/product-media/101863331/prod183871_Black_NE_01.jpg?w=430&h=430&a=7', 'For a sturdy MTB rim built to withstand the toughest trails, youll want the strength and performance that comes with Sun Ringles Duroc range.', 80, 5000, 75),
    new Product('Blank Generation XL BMX Rim', 'https://www.wigglestatic.com/product-media/154400/Blank-Generation-XL-BMX-Rim-Internal-Blue-NotSet.jpg?w=430&h=430&a=7', 'Replace your old or damaged rim without the need to break the bank with Blanks Generation XL BMX Rim.Offering extra strength to your ride, youll be kicking that halfpipe in no time.', 100, 5000, 20),
    new Product('Easton EC90 TT Front Road Rim', 'https://www.wigglestatic.com/product-media/100965058/Easton-EC90-TT-Front-Road-Rim-Internal-Black-Not-Set-EA1000008999.jpg?w=430&h=430&a=7', 'A giant of a second-shaving road rim, this TT model makes sure you have time on your side with its massive rim depth and full carbon construction.', 320, 5000, 300),
    new Product('Mavic E-Deemax S 30 Disc MTB Wheelset', 'https://www.wigglestatic.com/product-media/106405835/P16321_0.jpg?w=430&h=430&a=7', 'Featuring unique technologies to help you ride smoother and have more fun on the trail, the Mavic E-Deemax S 30 Disc MTB Wheelset is designed to improve your skills and upgrade the performance of your electric mountain bike (E-MTB).', 80, 5000, 505),
    new Product('Shimano MT500 BOOST Front Wheel', 'https://www.wigglestatic.com/product-media/101756169/prod180498_Black_NE_01.jpg?w=430&h=430&a=7', 'This front mountain bike wheel offers a wide-side alloy rim to make climbing easy on the trail.', 80, 5000, 85),
    new Product('DT Swiss HX 1501 Spline 30 Boost Rear Wheel', 'https://www.wigglestatic.com/product-media/110338474/dtswiss-HX%201501%20Spline%2030%20Boost%20Rear%20Wheel.jpg?w=430&h=430&a=7', 'Engineered for both mountain bike (MTB) and electric mountain bike (E-MTB) riding disciplines, the DT Swiss HX 1501 Spline 30 Boost Rear Wheel comes kitted out with an aluminium rim build, 6-bolt disc brake compatibility and Boost axle spacing.', 80, 5000, 405),
    new Product('SRAM MTH 716 on WTB ST i25 TCS Front Wheel', 'https://www.wigglestatic.com/product-media/109601422/SRAM-MTH-716-on-WTB-ST-i25-TCS-Front-Wheel-Front-Wheels-Black-Not-Set-46-19378-0.jpg?w=430&h=430&a=7', 'Featuring a robust aluminium alloy rim, Boost axle spacing and disc brake compatibility, the SRAM MTH 716 on WTB ST i25 TCS Front Wheel is all set for day-long gravel adventures and epic cross country (XC) rides.', 80, 5000, 55),
    new Product('Easton Haven Carbon 29" Front MTB Wheel', 'https://www.wigglestatic.com/product-media/5360103988/Easton-Haven-Carbon-29-Front-MTB-Wheel-Front-Wheels-Black-NotSet-EA2034882-0.jpg?w=430&h=430&a=7', 'The Easton Haven Carbon is a lightweight race 29er wheel, which is virtually indestructible and designed for rugged conditions in All Mountain/Trail riding..', 80, 5000, 335),
    new Product('Reynolds Black Label 275 Trail Carbon Boost MTB Wheelset', 'https://www.wigglestatic.com/product-media/108275831/Reynolds-Black-Label-275-Trail-Carbon-Boost-MTB-Wheelset-Wheel-Sets-Black-Not-Set-R-WC-76506.jpg?w=430&h=430&a=7', 'Benefitting from a carbon fibre rim construction with an asymmetric, hookless profile and boost axle spacing, the Reynolds Black Label 275 Trail Carbon Boost MTB Wheelset offers excellent speed, durability and precision for trail-riding.', 80, 5000, 495),
    new Product('Mid section wheels', 'https://guides.wiggle.co.uk/sites/default/files/resize/u1938/reynolds-ar-41-carbon-disc-road-wheelset_01-400x400.jpg', 'These wheels are not as popular or easily noticeable as a deep section alternative. This is largely due to a common misunderstanding that a deeper wheel means faster and better. This is not necessarily the case. Your riding style and characteristics may lean towards one wheel type more than another. A mid section wheel, however, means you can reap the benefits of a lightweight rim, combined with the aerodynamic gains of a deeper section. Lots of riders highly recommend them for all-round use, as theyre light enough for climbing and fast enough for the flat roads.', 50, 10000, 600)
  ]
  return (
    <div className='my-20 relative'>
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-bounce -top-40' alt="" />
      <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png" className='absolute animate-pulse right-10 top-full' alt="" />
      <h1 className="text-5xl font-bold text-center my-10 animate-pulse duration-500 absolute -top-16 text-gray-200 -z-10 right-4">Some Of Our Wheels</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {products.map((p, i) => <Card key={i} id={i} product={p} />)}
        {
          console.log(JSON.stringify(products))
        }
      </div>
    </div>
  )
}
