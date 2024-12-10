import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Places from '../components/Places';
import SwiperCore from 'swiper';
import Gallery from '../components/Gallery';
import PlaceDescription from '../components/PlaceDescription';
import TabNavigation from '../components/TabNavigation';

SwiperCore.use([Autoplay]);

function Distict() {
    const { districtName } = useParams();
    const [districtData, setDistrictData] = useState([]);

    useEffect(() => {
        const fetchDistrictData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/districts/${districtName}`);
                setDistrictData(res.data);
                console.log(districtData);
                
            } catch (err) {
                console.log('An error occurred');
            }
        };

        if (districtName) {
            fetchDistrictData();
        }
    }, [districtName]);

    const slides = districtData.districtImgURL?.map((url, index) => ({
        image: url,
        buttonText: `Explore ${districtName}`,
    }));

    const imgCardsData = districtData.nearByDestination?.map((Destination, idx) => ({
        image: Destination.image, 
        title: Destination.title,  
        description: Destination.description,
        link: Destination.link,
    }));

    const imgGallery = districtData.imageGallery?.map((img, idx) => ({
        src: img.src,
    }));

    return (
        <>
            {/* Background Theme */}
            <div className="fixed inset-0 z-[-1] bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>

            <NavBar />
            <main>
                <Hero slides={slides} />

                <PlaceDescription title={districtData.name} description={districtData.description} />

                <div className='h-[50vh]'>
                    <h5 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white uppercase">
                        Nearby Destinations
                    </h5>
                    <div className="container mx-auto pt-5">
                        <Swiper
                            modules={[Autoplay]} // Add Autoplay module
                            autoplay={{
                                delay: 5000, // Time in milliseconds between slides
                                disableOnInteraction: false, // Continue autoplay after interaction
                            }}
                            spaceBetween={100}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {imgCardsData?.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <Places
                                        image={card.image}
                                        title={card.title}
                                        description={card.description}
                                        link={card.link}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div>
                    <h5 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white uppercase">
                        Stay
                    </h5>
                    <div className='flex items-center justify-center'>
                        <p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 pt-5 text-center px-10'>
                            There's a variety of options for you to stay at. From Star Rated Hotels, Eco Tour Nature Camps equipped with state of the art swiss tents and facilities to OTDC Government Hotels, Bed Breakfasts and Homestays to choose from. Browse the list below to choose your preferred accomodation.
                        </p>
                    </div>
                    {/* <TabNavigation tabs={tabNavigationData} /> */}
                </div>

                <div>
                    <h5 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white uppercase">
                        Image Gallery
                    </h5>

                    <Gallery galleryData={imgGallery} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Distict;
