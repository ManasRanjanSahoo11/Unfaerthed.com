import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TestimonialSection from '../components/TestimonialCard';
import VacationCard from '../components/VacationCard';
import GoogleMap from '../components/GoogleMap';
import Review from '../components/Review';
import Guider from '../components/Guider';

function HiddenPlace() {

    const testimonials = [
        {
            title: "Very easy this was to integrate",
            quote: "If you care for your time, I hands down would go with this.",
            name: "Bonnie Green",
            role: "Developer at Open AI",
            imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
        },
        {
            title: "Solid foundation for any project",
            quote: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            name: "Roberta Casas",
            role: "Lead designer at Dropbox",
            imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
        },
        {
            title: "Mindblowing workflow",
            quote: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
            name: "Jese Leos",
            role: "Software Engineer at Facebook",
            imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
        },
        {
            title: "Efficient Collaborating",
            quote: "You have many examples that can be used to create a fast prototype for your team.",
            name: "Joseph McFall",
            role: "CTO at Google",
            imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
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

            <NavBar />
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
                            imageSrc="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?full=compress&cs=tinysrgb&dpr=1&w=500"
                            category="Vacations"
                            rating={4.96}
                            reviews={76}
                            isSuperhost={true}
                            title="The Majestic and Wonderful Bahamas"
                            description="The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination."
                            price={110}
                        />
                        <VacationCard
                            imageSrc="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?full=compress&cs=tinysrgb&dpr=1&w=500"
                            category="Vacations"
                            rating={4.96}
                            reviews={76}
                            isSuperhost={true}
                            title="The Majestic and Wonderful Bahamas"
                            description="The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination."
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
