import React, { useEffect } from 'react'

import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Card from "../components/Card";
import ImgCard from "../components/ImgCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";

import "../index.css";
import Footer from "../components/Footer";
import Navbar2 from '../components/Navbar2';
import Chatbot from '../components/Chatbot';

function Home() {

    const easternOdishaPlaces = [
        {
            image: "https://www.bhubaneswarbuzz.com/wp-content/uploads/2015/02/cuttack-railway-station-bhubaneswar-buzz.jpg",
            title: "Cuttack",
            description: "Cuttack is the former capital, deputy capital and the 2nd largest city of the Indian state of Odisha. It is also the headquarters of the Cuttack district.",
            link: "#",
        },
        {
            image: "https://www.hlimg.com/images/places2see/738X538/jagatsinghpur-1-1538119688m.jpg",
            title: "Jagatsinghpur",
            description: "Jagatsinghpur District is one of the thirty districts of Odisha in the eastern coast of India. It became a new district on 1 April 1993 being separated from Cuttack district with its own headquarter in Jagatsinghpur town",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipPXFNT3hUz6j_EaQVH39CUuckPk4TfsFryHTk7i=w713-h412-n-k-no",
            title: "Kendrapara",
            description: "Kendrapara District is an administrative district of Odisha state in eastern India. The town of Kendrapara is the district headquarters. Kendrapara District is situated in the eastern portion of the state.",
            link: "#",
        },
        {
            image: "https://vagatrip.com/storage/blogs/July2023/Jajpur-Odisha-India.jpg",
            title: "Jajpore",
            description: "Jajpur (also known as Jajapur) is a town and a municipality in Jajpur district in the Indian state of Odisha. It was the capital of the Kesari dynasty, later supplanted by Cuttack. Now, it is the headquarter of Jajpur district.",
            link: "#",
        },
        {
            image: "https://ihplb.b-cdn.net/wp-content/uploads/2021/11/blog-header-image-1-750x430.jpg",
            title: "Puri",
            description: "Puri, also known as, Jagannath Puri, is a coastal city and a municipality in the state of Odisha in eastern India. It is the district headquarters of Puri district and is situated on the Bay of Bengal, 60 kilometres south of the state capital of Bhubaneswar. It is home to the 12th-century Jagannath Temple and is one of the original Char Dham pilgrimage sites for Hindus.",
            link: "#",
        },
        {
            image: "https://files.yappe.in/place/full/gada-khordha-5-veer-statue-10531151.webp",
            title: "Khordha",
            description: "Khordha is a City and a Municipality area in Khordha District in the Indian state of Odisha. Bhubaneswar, is the capital of Odisha located within the Khordha district and is only 25 km from Khordha town. Odisha State Highway 1 and National Highway 16 runs via this town.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jagannath_Temple%2C_Nayagarh.jpg/375px-Jagannath_Temple%2C_Nayagarh.jpg",
            title: "Nayagarh",
            description: "Nayagarh is located at 20.13°N 85.1°E[1] with an average elevation of 178 metres (584 feet). It was the Rukhi mountain to the south and the Balaram mountain to the north of Nayagarh, which mitigated the effects of the 1999 Odisha cyclone on Nayagarh.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipMgnCqABtVkh2eWImWIRpJDk4lB31nhQAkCsHIk=w715-h413-n-k-no",
            title: "Balasore",
            description: "Balasore, also known as Baleswar, is a city in the state of Odisha, about 215 km (134 mi) from the state capital Bhubaneswar and 300 km (186 mi) from Kolkata, in eastern India. It is the administrative headquarters of Balasore district and the largest city as well as health and educational hub of northern Odisha. It is best known for Chandipur beach.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Dhamra_Port_1.jpg",
            title: "Bhadrak",
            description: "Bhadrak is a district of Odisha state in eastern India. Bhadrak city is the headquarters and the largest city of the district.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipPXANXmR-CvC9V4TRtYulXvWljW4imKlF5rDpGF=w713-h412-n-k-no",
            title: "Mayurbhanj",
            description: "Mayurbhanj State (Odia: ମୟୂରଭଞ୍ଜ ରାଜ୍ୟ; colloquially Morbhanj) was one of the princely states of India during the British Raj. It was one of the largest states of the Eastern States Agency and one of the four salute states of the Orissa States Agency.[1] The emblem of the state was two peacocks, for according to legend the ancestors of the rulers had originated from a peafowl's eyes",
            link: "#",
        },
    ];

    const westernOdishaPlaces = [
        {
            image: "https://odishaheritage.com/wp-content/uploads/2023/12/gallery_Hirakud.jpg",
            title: "Sambalpur",
            description: "Sambalpur District is a district in the western part of state of Odisha, India. The historic city of Sambalpur is the district headquarters.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipP48l_zMkmfNmeNQTYqDkjEExgCu0yZNOHI2QbA=w713-h412-n-k-no",
            title: "Bargarh",
            description: "Bargarh is one of the major towns of Western Odisha and a municipality in Bargarh district in the state of Odisha in India.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Jharsuguda_Railway_Station%2C_Odisha.JPG/1280px-Jharsuguda_Railway_Station%2C_Odisha.JPG",
            title: "Jharsuguda",
            description: "Jharsuguda (ଝାରସୁଗୁଡ଼ା) is a City and district headquarters of Jharsuguda district of Odisha, India. It is an industrial hub, consisting mainly of metallurgical industries. It is well connected to major cities of India through the rail network, and a recently inaugurated as Veer Surendra Sai Airport",
            link: "#",
        },
        {
            image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSGiOojz6uZwGJXFibHRZnjyDn9lyi5xIZBfBnmvf0BwAIQrBOSIVQ2RFu6Shb8OjJdAWpRmLeOtJytIOogRJyno1RE4xsvviJlj15JrQ",
            title: "Deogarh",
            description: "Debagarh, also known as Deogarh, is a city in Odisha state of eastern India. Located in the North-Western region of the state, it is the headquarters of Debagarh District that was created on 1 January 1994, after being bifurcated from Sambalpur District.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Balangir_palace.jpg/1280px-Balangir_palace.jpg",
            title: "Balangir",
            description: "Balangir also known as Bolangir, is a town and a municipality, the headquarters of Balangir district in the state of Odisha, India. Balangir has one of the best cultural heritage in India.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipNWYqYM1m3FpefA3YvoCQ17gui3HSLgRF20jSuM=w715-h413-n-k-no",
            title: "Subarnapur",
            description: "Subarnapur, also known as Sonepur, is a town and district headquarters of Subarnapur district of Odisha. The district spreads over an area of 2284.89 km2.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipP4aCsYdVFR4qHLss_7b0t-2iVWJHDboFIan19U=w715-h413-n-k-no",
            title: "Dhenkanal",
            description: "Dhenkanal is a town and a municipality in Dhenkanal district in the state of Odisha, India. Dhenkanal. town. Dhenkanal is located in Odisha.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipMkgQhsHiekoOx45nDEr1qlwk0Ax01dFvVklsYD=w715-h413-n-k-no",
            title: "Angul",
            description: "Angul (also known as Anugul) is a city, municipality and the headquarters of Angul district in the state of Odisha, India. Angul has an average elevation of 195 m (640 ft) above sea level. The total geographical area of the district is 6232 km2.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Maa_Tarini%2C_Ghatagaon%2C_Keonjhar.jpg/1280px-Maa_Tarini%2C_Ghatagaon%2C_Keonjhar.jpg",
            title: "Kendujhar",
            description: "Kendujhar District, is an administrative district of Odisha. The district is one of the fifth Scheduled Areas of Odisha.The town of Kendujhar (or Kendujhargarh) is the district headquarters. The district has three sub-divisions, Anandapur, Champua, and Kendujhar.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipPIYoGEeaCjmEOtm27V-kEqYECDm78LQV1Hzm1s=w715-h413-n-k-no",
            title: "Sundargarh",
            description: "Sundargarh district is bounded by Raigarh district of Chhattisgarh in the west, Jashpur district of Chhattisgarh in the North-West, Simdega district of Jharkhand in the North.",
            link: "#",
        },
    ];

    const southernOdishaPlaces = [
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipPV-jLsflXR0zAnj-OdWtq8oYeNlUnbp5GsCD2H=w715-h413-n-k-no",
            title: "Ganjam",
            description: "Ganjam is a town and a notified area council in Ganjam district in the state of Odisha, India. Brahmapur, one of the major city of Odisha is situated in this district.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mahendragiri_Hills.jpg",
            title: "Gajapati",
            description: "Gajapati district is a district of Odisha State in India. It was created from Ganjam District on 2 October, 1992. As of 2011 it is the third least populous district of Odisha.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipNI9dCvMVlNfxmCvr2syH24rhLYxKqWoBYHOo74=w715-h413-n-k-no",
            title: "Kandhamal",
            description: "Kandhamal district also known as Phulbani district is a district in the state of Odisha, India. The District headquarters of the district is Phulbani. It is a district full with natural beauties includes wild animals and birds.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Ramnath_Temple_-_Boudh%2C_Orissa%2C_India.jpg",
            title: "Boudh",
            description: "Boudh District is an administrative and a municipal district, one of the thirty in the Odisha, India. The district headquarters of the Boudh District is the city of Boudh.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipMj4P2W22CKl9XJgqRsLj6wB4BRjlxxfQedtfg4=w715-h413-n-k-no",
            title: "Kalahandi",
            description: "Archaeological evidence of Stone Age and Iron Age human settlement has been recovered from the region. Asurgarh offered an advanced, well civilised, cultured and urban human settlement about 2000 years ago in the region.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Yogeswar_Temple%2C_Patora.JPG/1280px-Yogeswar_Temple%2C_Patora.JPG",
            title: "Nuapada",
            description: "Nuapada is a town in western region of Odisha state of eastern India. It is the headquarter of Nuapada district.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kolab_dam_-_panoramio.jpg/1280px-Kolab_dam_-_panoramio.jpg",
            title: "Koraput",
            description: "Koraput district is a district of India in southern Odisha, with headquarters at Koraput.",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipMoikh-6VkSc3cGQDCM1U3BFpVL3lIIrsnrReDl=w715-h413-n-k-no",
            title: "Rayagada",
            description: "Rayagada is a municipality in Rayagada district in the Indian state of Odisha. It is the administrative headquarters of Rayagada district.",
            link: "#",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nabrangpur_Lake_from_Hill_View.jpg/1280px-Nabrangpur_Lake_from_Hill_View.jpg",
            title: "Nabarangpur",
            description: "Nabarangpur district, also known as Nabarangapur district or Nawarangpur district, is a district of Odisha, India. The city of Nabarangpur is the district capital. ",
            link: "#",
        },
        {
            image: "https://lh5.googleusercontent.com/p/AF1QipORiI4IWC2SjwFdvCcQ6N8VttPAMUqkSfOUdZ8G=w715-h413-n-k-no",
            title: "Malkangiri",
            description: "Malkangiri, historically known as Malikamardhangiri, is a town and municipality in Malkangiri district in the Indian state of Odisha. It is the headquarter of the Malkangiri district",
            link: "#",
        },
    ];


    return (
        <>
            {/* Background Theme */}
            <div className="fixed inset-0 z-[-1] bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>

            <Navbar2 />

            <Chatbot />

            <main>
                <Slider />

                {/* Card Section */}
                <div className="min-h-[100vh] bg-gray-700 px-10 ">
                    <h1 className='text-center font-medium text-5xl text-white pt-10 uppercase'>Explore <span className='text-orange-400'>odisha</span> with us</h1>
                    <p className='text-lg text-white text-center px-64 py-5'>Unearthed Odisha is a website that provide information and services for tourists planning to visit odisha, india. Here are some of the features and services offered by the website.</p>
                    <div className='grid gap-16 py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
                        <Card
                            title="Tour Packages"
                            description="Customized tour packages for Odisha, including temple tours, beach tours, waterfall tours, hill station tours, wildlife tours, and cultural tours."
                            linkText="Read more"
                            linkUrl="#"
                        />
                        <Card
                            title="Hotel Booking"
                            description="Book hotels and resorts in various locations across Odisha.Explore the vibrant landscapes of Odisha with our dedicated hotel booking platform."
                            linkText="Learn more"
                            linkUrl="/hotelbooking"
                        />
                        <Card
                            title="Car Rental"
                            description="Car rental services including sedan, SUV, and tempo traveler options.Discover the freedom of travel with our versatile car rental services, designed to cater to all your transportation needs in Odisha."
                            linkText="Learn more"
                            linkUrl="#"
                        />
                        <Card
                            title="Destination Guide"
                            description=" A comprehensive guide to various destinations in Odisha, including Bhubaneswar, Puri, Konark, and more."
                            linkText="Learn more"
                            linkUrl="#"
                        />
                        <Card
                            title="Attractions"
                            description=" Listings of attractions such as temples, beaches, museums, hill stations, and wildlife sanctuaries."
                            linkText="Learn more"
                            linkUrl="/hiddenplace"
                        />
                        <Card
                            title="Events and Festivals"
                            description="Information on upcoming events and festivals in Odisha. Immerse yourself in the vibrant culture and traditions of Odisha by staying informed about upcoming events and festivals across the state."
                            linkText="Learn more"
                            linkUrl="#"
                        />
                    </div>
                </div>

                {/* Eastern Odisha */}
                <div className='min-h-screen'>
                    <h2 className='text-center font-medium text-5xl text-white pt-10 uppercase'>Eastern <span className='text-orange-400'>odisha</span> tourism places</h2>
                    <p className='text-lg text-white text-center px-56 py-5'>Eastern Odisha is a treasure trove of natural beauty and cultural significance, offering a perfect blend of serene landscapes and historical marvels</p>

                    {/* Swiper Section */}
                    <div className="container mx-auto py-16 ml-20">
                        <Swiper
                            modules={[Autoplay]} // Add Autoplay module
                            spaceBetween={20}
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
                            {easternOdishaPlaces.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <ImgCard
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

                {/* Western Odisha */}
                <div className='min-h-screen bg-gray-700'>
                    <h2 className='text-center font-medium text-5xl text-white pt-10 uppercase'>Western <span className='text-orange-400'>odisha</span> tourism places</h2>
                    <p className='text-lg text-white text-center px-56 py-5'>Western Odisha is the western part of the state of Odisha in India. It is known for its unique socio-cultural traits, including its tribal communities and ancient Hindu temples.</p>

                    {/* Swiper Section */}
                    <div className="container mx-auto py-16 ml-20">
                        <Swiper
                            modules={[Autoplay]} // Add Autoplay module
                            spaceBetween={20}
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
                            {westernOdishaPlaces.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <ImgCard
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

                 {/* southern Odisha */}
                 <div className='min-h-screen'>
                    <h2 className='text-center font-medium text-5xl text-white pt-10 uppercase'>Southern <span className='text-orange-400'>odisha</span> tourism places</h2>
                    <p className='text-lg text-white text-center px-56 py-5'>Southern Odisha, a region in the eastern Indian state of Odisha, is known for its rich cultural heritage, diverse tribal communities, and scenic landscapes.</p>

                    {/* Swiper Section */}
                    <div className="container mx-auto py-16 ml-20">
                        <Swiper
                            modules={[Autoplay]} // Add Autoplay module
                            spaceBetween={20}
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
                            {southernOdishaPlaces.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <ImgCard
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

            </main>

            <Footer />
        </>
    )
}

export default Home
