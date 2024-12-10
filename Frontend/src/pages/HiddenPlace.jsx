import React from 'react'
import Footer from '../components/Footer'
import TestimonialSection from '../components/TestimonialCard';
import VacationCard from '../components/VacationCard';
import GoogleMap from '../components/GoogleMap';
import Review from '../components/Review';
import Guider from '../components/Guider';
import Navbar2 from '../components/Navbar2';

function HiddenPlace() {

    const testimonials = [
        {
            title: "Where to Eat",
            quote: "One is spoilt for choices in Bhubaneswar as far as food goes, from street food to star dining experience, the city caters to a diverse palate and wallet. The food vans, roadside eateries and restaurants are quite popular in the city.",
            imageSrc: "https://w7.pngwing.com/pngs/896/533/png-transparent-eating-cutlery-restaurant-food-kitchen-utensil-eating-miscellaneous-kitchen-plate-thumbnail.png",
        },
        {
            title: "Best Time to Visit",
            quote: "Throughout the year",
            imageSrc: "https://w7.pngwing.com/pngs/948/743/png-transparent-time-management-time-attendance-clocks-organization-time-thumbnail.png",
        },
        {
            title: "Travelling Essentials",
            quote: "During winters – Jacket & Woolens are a must. Summers – are hot and can be humid. You are advised to carry Cap/Hat & sunscreen lotions.",
            imageSrc: "https://w7.pngwing.com/pngs/68/466/png-transparent-illustration-of-character-traveling-travel-tourism-euclidean-global-travel-backpack-computer-wallpaper-happy-birthday-vector-images-thumbnail.png",
        },
        {
            title: "Climate",
            quote: "Its tropical climate, with hot & humid summers & pleasant winters.",
            imageSrc: "https://w7.pngwing.com/pngs/760/237/png-transparent-weather-and-climate-weather-and-climate-weather-radar-weather-station-weather-leaf-logo-weather-forecasting-thumbnail.png",
        },
    ];

    return (
        <>
            {/* Background Theme */}
            <div className="fixed inset-0 z-[-1] bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>

            <Guider/>

            <Navbar2 />
            <main className='px-24'>
                <h1 className='text-4xl text-center font-semibold py-10 text-white'>Shree Jagannath Temple, Shreekhetra, Puri</h1>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <img
                            className="h-full max-w-full rounded-lg"
                            src="../Imgs-Videos/25.png"
                            alt="Image 1"
                        />
                    </div>
                    <div>
                        <img
                            className="h-full max-w-full rounded-lg"
                            src="../Imgs-Videos/19.png"
                            alt="Image 2"
                        />
                    </div>
                    <div>
                        <img
                            className="h-full max-w-full rounded-lg"
                            src="../Imgs-Videos/24.png"
                            alt="Image 3"
                        />
                    </div>
                    <div>
                        <img
                            className="h-full max-w-full rounded-lg"
                            src="../Imgs-Videos/23.png"
                            alt="Image 4"
                        />
                    </div>
                </div>

                <div className='my-5'>
                    <h2 className='text-4xl text-center font-semibold py-10 text-white'>History</h2>
                    <p className='text-white text-xl leading-6 text-center px-1 '>
                        The Shree Jagannath Temple, located in Shreekhetra (Puri), Odisha, is a revered spiritual landmark dedicated to Lord Jagannath, an incarnation of Lord Vishnu. Built in the 12th century by King Anantavarman Chodaganga Deva, the temple showcases exquisite Kalinga architecture. It houses the sacred triad of deities—Lord Jagannath, Balabhadra, and Subhadra—enshrined on the Ratnavedi (bejeweled platform). The temple is famed for its annual Rath Yatra, attracting millions of devotees worldwide. Its Mahaprasad, cooked using unique traditional methods, is cherished by all. Encased in deep spirituality and cultural heritage, the temple is a symbol of unity, devotion, and divine grace.
                    </p>
                </div>

                <div>
                    <h2 className='text-4xl text-center font-semibold py-10 text-white'>Other Service</h2>
                    <TestimonialSection testimonials={testimonials} />
                </div>


                <div>
                    <h1 className='text-4xl text-center font-semibold pb-10 text-white'>Explore Popular Locations</h1>

                    {/*Embedding a map for Puri, Odisha */}
                    <GoogleMap
                        location="Puri, Odisha"
                        zoom={15}
                        width="100%"
                        height="450"
                        style={{ border: "1px solid #ccc" }}
                    />
                </div>

                <div>
                    <h1 className='text-4xl text-center font-semibold py-10 text-white'>Popular Tourist Attractions Near Puri Jagannath Temple</h1>

                    <div className='grid grid-cols-2 gap-5'>
                        <VacationCard
                            imageSrc="https://www.india.com/wp-content/uploads/2024/04/Tranquil-Beaches.jpg"
                            category="Vacations"
                            rating={4.5}
                            reviews={50}
                            isSuperhost={true}
                            title="Balighai's tranquil beaches"
                            description="Ditch the madding crowds on Puri's main sands, where hawkers shout and lines of multicoloured umbrellas obscure your view."
                            price={110}
                        />
                        <VacationCard
                            imageSrc="https://s3.india.com/wp-content/uploads/2024/04/Feature-Image_-Puri.jpg?impolicy=Medium_Widthonly&w=500&h=375"
                            category="Vacations"
                            rating={4.0}
                            reviews={176}
                            isSuperhost={true}
                            title="Beaten-Path Delights"
                            description="With its grand Jagannath Temple, ancient bathing ghats and striking Sun Temple looking out across the choppy Bay of Bengal, Puri is a beguiling place."
                            price={110}
                        />
                    </div>
                </div>

                <div>
                    <h2 className='text-4xl text-center font-semibold py-10 text-white'>Take a review</h2>
                    <Review />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HiddenPlace
