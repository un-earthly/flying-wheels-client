import Button from "@/app/GlobalComponent/Button";
import CategoryCard from "@/app/Home/CategoryCard";
import UserLayout from "@/app/layouts/UserLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Home() {
  const navigator = useRouter()
  return (
    <UserLayout>
      {/* <div className="space-y-10 min-h-screen">
        
      </div> */}
      {/* <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 md:w-96">
            <img src="/cycle-wheel.png" alt="Wheel" className="w-full" />
          </div>
        </div>
      </div> */}

      <div className="p-10 bg-green-50">
        <p className="text-center font-semibold uppercase">the heaven of wheels and bike accesories</p>
        <h1 className="lg:text-5xl md:w-3/4 px-10 text-center mx-auto m-0 uppercase font-bold">Are you looking for wheels and bike accesories?</h1>
        {/* <p className="capitalize font-semibold text-center w-full">this Is The Perfect Place You've Came</p> */}
        <Image height={300} width={300} alt="banner" className="my-14 mx-auto hover:animate-spin" style={{
          animationDuration: "10s"
        }} src="/cycle-wheel.png" />

        <div className="flex justify-center">
          <Button text="Lets Explore" styles="h-14 w-1/4 hover:shadow-xl" isOutlined={true} />
        </div>
      </div>

      <div className="bg-green-100 p-10 backdrop-blur-3xl">
        <h1 className="md:text-4xl font-semibold text-center uppercase">
          Featured Categories
        </h1>

        <div className="flex items-center my-10 space-x-10">
          <CategoryCard
            icon={"/icon-wheel.png"}
            title="Wheels"
          />
          <CategoryCard
            icon={"/icon-wheel.png"}

            title="Wheels"
          />
          <CategoryCard
            icon={"/icon-wheel.png"}

            title="Wheels bike"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-between items-center py-16 px-8  backdrop-blur-3xl bg-green-200 rounded-lg">
        <div className="w-3/4">

          <div className="p-4 rounded-lg mb-4 md:mb-0">
            <div className="flex items-center  space-x-2">
              <div className="h-3 w-3 bg-green-400 rounded-full"></div>
              <p className="text-md font-bold">
                WHY CHOOSE US!
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl  font-bold">
                WE BRING THE BEST QUALITY WHEELS
              </h1>
              <ul className="list-disc font-semibold mt-3 pl-6">
                <li className="mb-2">Precision Craftsmanship</li>
                <li className="mb-2">Innovative Designs</li>
                <li className="mb-2">Durability Guaranteed</li>
                <li className="mb-2">Customization On Everything</li>
              </ul>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda facilis, eveniet placeat necessitatibus ipsa corporis dolorum itaque, nisi excepturi ad sequi doloremque alias voluptatibus! Quia consequuntur ea eos a.</p>

              <Button text="Explore More" styles="h-12 bg-green-900 " />
            </div>
            <div className="flex items-start justify-start mt-10 md:flex-col space-x-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                <p className="text-md font-bold">
                  WHAT WE DO!
                </p>
              </div>
              <div className="w-3/4 space-y-5">
                <h1 className="text-3xl uppercase font-bold">
                  we make the cycling world more interesting.
                </h1>
                <p>
                  Charge your electric vehicle at home using one of our smart home char ge solutions or gain access to over 3,000 public charging.
                </p>
                <p>
                  Charge your electric vehicle at home using one of our smart home char ge solutions or gain access to over 3,000 public charging.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam molestias dolores sunt ullam. Doloribus, non eum. Quas atque non reiciendis voluptas ea, impedit culpa, dolor cupiditate reprehenderit, debitis enim!
                </p>
                <Button text="About Us" isOutlined styles="h-12 border-green-900 hover:border-transparent hover:bg-green-900 " />

              </div>
            </div>




          </div>




        </div>


        <div className="rounded-lg p-3 group overflow-hidden w-2/4" >
          {/* Images on Right Side */}
          <Image width={300} height={300}
            style={{ animationDuration: "30s" }} className="group-hover:animate-spin"
            src="/icon-wheel.png" alt="Wheel Manufacturing" />
          <Image width={300} height={300}
            style={{ animationDuration: "20s" }} className="group-hover:animate-spin ml-auto"
            src="/cycle-wheel.png" alt="Wheel Manufacturing" />
          <Image width={300} height={300}
            style={{ animationDuration: "15s" }} className="group-hover:animate-spin"
            src="/wheel.png" alt="Wheel Manufacturing" />

        </div>



      </div>


      <div className="relative w-full">
        <div className="relative w-full h-2/4">
          <div className="bg-black/90 bg-blend-multiply absolute inset-0"></div>
          <img src="/bike_riding.jpg" className="object-cover h-96 w-full" alt="rider riding bike" />
          <div className="absolute inset-0 flex flex-col  text-white w-2/3 m-auto text-center space-y-4 justify-center items-center">
            <h2 className="text-white text-4xl font-bold uppercase">Have an idea for custom bike?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum eum hic tenetur fugit, exercitationem iure et ipsa libero neque similique modi! Et numquam laudantium dolore at eos laborum explicabo modi, dolorum in. Dolores animi exercitationem numquam ratione nobis laborum?</p>
            <Button text="Bike Builder" onClick={() => navigator.push("/bike-builder")} isOutlined styles="h-14 text-green-400 hover:text-black " />
          </div>
        </div>
      </div>

      <div className='my-10 relative'>
        <h1 className="text-3xl font-bold uppercase text-center">What our client says</h1>

        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>

    </UserLayout>
  )
}
