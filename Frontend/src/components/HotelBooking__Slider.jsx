import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

function HotelBooking__Slider() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable:true
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://media.easemytrip.com/media/hotel/shl-2312141539755396/common/commonr4x5nx.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fariyas.com/wp-content/uploads/2023/08/Slide-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.nxtidea.com/wp-content/uploads/2022/02/Odisha-Hotel-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.hotelgoldentree.in/assets/img/slider/slider7.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HotelBooking__Slider
