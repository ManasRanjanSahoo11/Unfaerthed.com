import React from 'react'

function HotelBooking__Discover() {
  return (
    <div className='flex gap-9 h-[100vh] w-full bg-gray-700'>
     <div className='w-1/2 h-full bg-red-100'>
        <img className='object-cover h-full w-full' src="https://react.mediacity.co.in/riorelax/static/media/feature.19e9aa21add79eabff7d.png" alt="" />
     </div>
     <div className='w-1/2 h-full p-2 text-white'>
        <h5 className='text-xl font-semibold pt-10'>Luxury Hotel & Resort</h5>
        <h1 className='text-[80px] font-semibold py-5 w-[40vw] leading-[5rem]'>Pearl Of The Adriatic.</h1>
        <p className='pb-3 text-lg text-gray-300'>Luxury Hotels & Resorts represent the epitome of comfort, exclusivity, and exceptional service, catering to those seeking high-end experiences. These establishments offer world-class amenities such as opulent rooms, private pools, fine dining restaurants, and personalized concierge services. </p>

        <p className='py-3 text-lg text-gray-300'>In addition to top-tier accommodations, luxury resorts often provide a wide range of leisure and recreational activities. These may include golf courses, wellness spas, exclusive excursions, and curated experiences like private yacht tours or gourmet cooking classes. The focus is on providing an immersive and tailored experience, where every detail is carefully crafted to ensure guests feel pampered and valued.</p>
        <button className='bg-orange-400 px-10 py-7 text-md text-white uppercase font-semibold mt-12'>Discover More</button>
     </div>
    </div>
  )
}

export default HotelBooking__Discover
