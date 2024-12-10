import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Navbar2 from '../components/Navbar2';

const ReserveRoom = () => {
    const location = useLocation(); // Access location state
    const passedPrice = location.state?.price || ''; // Retrieve passed price or set to empty string

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [price, setPrice] = useState(passedPrice); // Initialize with passed price

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    const contactDetails = [
        {
            title: "Support",
            email: "support@gmail.com",
            phone: "+91 7896-567-890",
        },
        {
            title: "Any questions",
            email: "questions@gmail.com",
            phone: "+91 8960-567-321",
        },
    ];

    const getButtonText = () => {
        if (paymentMethod) {
            return `Reserve with ${paymentMethod}`;
        }
        return 'Reserve';
    };

    return (
        <>
            {/* Background Theme */}
            <div className="fixed inset-0 z-[-1] bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>

            <Navbar2 />

            <div className="container my-12 mx-auto px-2 md:px-4">
                <section className="mb-32">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold text-white">Reserve Room</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap text-white">
                        {/* Form Section */}
                        <form className="mb-12 w-full lg:w-5/12" onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="block mb-2 font-medium text-teal-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="px-2 py-2 bg-gray-800 border w-full outline-none rounded-md"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="block mb-2 font-medium text-teal-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="px-2 py-2 bg-gray-800 border w-full outline-none rounded-md"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="block mb-2 font-medium text-teal-700">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    value={`₹ ${price}`} 
                                    onChange={(e) => setPrice(e.target.value)} 
                                    className="px-2 py-2 bg-gray-800 border w-full outline-none rounded-md disabled"
                                    placeholder="Enter price"
                                    required
                                    disabled
                                />
                            </div>

                            {/* Payment Section */}
                            <div className="mb-3">
                                <label className="block mb-2 font-medium text-teal-700">Payment Method</label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="Credit Card"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mr-2"
                                        />
                                        Credit Card
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="UPI"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mr-2"
                                        />
                                        UPI
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="Net Banking"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mr-2"
                                        />
                                        Net Banking
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="block mb-2 font-medium text-teal-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="px-2 py-2 bg-gray-800 border w-full outline-none rounded-md"
                                    placeholder="Write your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded bg-orange-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-orange-500"
                            >
                                {getButtonText()}
                            </button>
                        </form>

                        {/* Contact Details Section */}
                        <div className="w-full lg:w-7/12 mt-5">
                            <div className="flex flex-wrap">
                                {contactDetails.map((detail, index) => (
                                    <div key={index} className="mb-6 w-full md:w-6/12">
                                        <div className="flex items-start">
                                            <div className="ml-6">
                                                <p className="mb-2 font-bold">{detail.title}</p>
                                                <p className="text-neutral-500">{detail.email}</p>
                                                <p className="text-neutral-500">{detail.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Success Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm text-center">
                        <h3 className="text-lg font-bold mb-4">Reservation Successful!</h3>
                        <p className="text-gray-600">Your reservation has been successfully submitted.</p>
                        <p className="mt-2 text-gray-800 font-semibold">Payment Method: {paymentMethod}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReserveRoom;
