import React from 'react'
import HotelBooking__Navbar from '../components/HotelBooking__Navbar'
import HotelBooking__Slider from '../components/HotelBooking__Slider'
import HotelBooking__CheckAvailabilty from '../components/HotelBooking__CheckAvailabilty'
import HotelBooking__Card from '../components/HotelBooking__Card'
import { HotelBooking__RoomCard } from '../components/HotelBooking__RoomCard'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules'
import HotelBooking__Discover from '../components/HotelBooking__Discover'
import HotelBooking__TakeTour from '../components/HotelBooking__TakeTour'
import HotelBooking__RefineFilters from '../components/HotelBooking__RefineFilters'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

function HotelBooking() {

  const bookingCardsData = [
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/30/da/06/facade.jpg?w=1200&h=-1&s=1", 
      title: "Cozzet Victoria",
      description:
        "Cozzet Victoria Hotel is a luxury hotel known for offering a blend of modern amenities and elegant comfort, providing an exceptional hospitality experience. Located in a prime area, it attracts both business and leisure travelers.",
      price: 7056,
      rating: 4.2
    },
    {
      image: "https://image.wedmegood.com/resized/800X/uploads/member/817613/1574343063_dfrdse.JPG", 
      title: "Odisha Hotel",
      description: "Odisha Hotel is a popular chain of restaurants that celebrates the authentic flavors of Odisha's cuisine",
      price: 359,
      rating: 4.2
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipOj_LJgO86uX4DsyWfUtYaAXRbAmFMYxA6FxKlP=w287-h192-n-k-rw-no-v1", 
      title: "Hello Stay Hotel Bhubaneswar",
      description: "Near Highland Residency, Milan Paradise, Sailashree Vihar, Chandrasekharpur, Bhubaneswar, Odisha 751021•090360 74997",
      price: 1119,
      rating: 3.5
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipMrQgKqmLLIvUiBD8Je8QF4Xv_4f6Uwn3uQgiLu=w287-h192-n-k-rw-no-v1", 
      title: "Vivanta Bhubaneswar, DN Square",
      description: "near DN Regalia Mall, Kalinga Vihar, Patrapada, Bhubaneswar, Odisha 751019•0674 688 8888",
      price: 11523,
      rating: 4.5
    },
  ];


  return (
    <div>
      {/* Background Theme */}
      <div className="fixed inset-0 z-[-1] bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <Navbar2 />

      <HotelBooking__Slider />

      {/* <HotelBooking__CheckAvailabilty /> */}

      <div className='bg-gray-700 text-white py-20'>
        <h5 className='text-center text-2xl font-semibold'>Explore</h5>
        <h2 className='text-6xl py-2 text-center font-medium'>The Hotel</h2>
        <p className='text-center text-md font-medium px-64 py-2'>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
        </p>
        <div className='grid grid-cols-3 gap-10 place-items-center min-h-[100vh] px-16'>
          <HotelBooking__Card
            icon={<img src='../Imgs-Videos/h-105.png' />}
            title="Qulity Room"
            description="Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others."
            buttonText="Read More"
            buttonLink="#"
          />

          <HotelBooking__Card
            icon={<img src='../Imgs-Videos/h-104.png' />}
            title="Best Accommodation"
            description="Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others."
            buttonText="Read More"
            buttonLink="#"
          />
          <HotelBooking__Card
            icon={<img src='../Imgs-Videos/h-103.png' />}
            title="Wellness & Spa"
            description="Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others."
            buttonText="Read More"
            buttonLink="#"
          />
          <HotelBooking__Card
            icon={<img src='../Imgs-Videos/h-102.png' />}
            title="Restaurants & Bars"
            description="Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others."
            buttonText="Read More"
            buttonLink="#"
          />
          <HotelBooking__Card
            icon={<img src='../Imgs-Videos/h-101.png' />}
            title="Special Offers"
            description="Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others."
            buttonText="Read More"
            buttonLink="#"
          />
        </div>
      </div>

      <div className="container text-white w-full mx-auto my-16">
        <h5 className='text-center text-2xl py-3 font-semibold'>The pleasure of luxury in Odisha</h5>
        <h2 className='text-7xl py-3 text-center font-medium'>Rooms & Suites</h2>
        <p className='text-center text-md font-medium px-64 py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, amet voluptatem quaerat commodi sed reiciendis aspernatur accusamus quod obcaecati illum.</p>
        <div className='mt-24'>
        <Swiper
          modules={[Autoplay]} // Add Autoplay module
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 5000, // Time in milliseconds between slides
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          loop={true} // Enable looping
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {bookingCardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <HotelBooking__RoomCard
                image={card.image}
                title={card.title}
                description={card.description}
                price={card.price}
                rating={card.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>

      <HotelBooking__Discover />

      <HotelBooking__TakeTour /> 

      {/* <HotelBooking__RefineFilters /> */}

      <Footer />
    </div >
  )
}

export default HotelBooking
