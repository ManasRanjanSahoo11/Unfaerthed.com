import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
// import { ArrowLeft, ArrowRight } from 'phosphor-react'

import B01 from '../../public/Imgs-Videos/11.jpg'
import B02 from '../../public/Imgs-Videos/02.jpg'
import B03 from '../../public/Imgs-Videos/03.jpg'
import B04 from '../../public/Imgs-Videos/04.jpg'
import B05 from '../../public/Imgs-Videos/05.jpg'
import B06 from '../../public/Imgs-Videos/06.jpg'
import B07 from '../../public/Imgs-Videos/07.jpg'
import B08 from '../../public/Imgs-Videos/08.jpg'
import B09 from '../../public/Imgs-Videos/09.jpg'
import B010 from '../../public/Imgs-Videos/10.jpg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const Slide = () => {
    return (
        <div className='slider-container py-4'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                autoplay={{
                    delay: 3000, // Time in milliseconds between slides
                    disableOnInteraction: false, // Continue autoplay even after interaction
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 300,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <img src={B01} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B02} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B03} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B04} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B05} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B06} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B07} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B08} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B09} alt="Odisha" className='slide-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B010} alt="Odisha" className='slide-img' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide
