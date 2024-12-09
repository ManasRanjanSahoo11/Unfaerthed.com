import React, { useState } from 'react';

function Review() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {
            name: "Manas Ranjan Sahoo",
            date: "November 18 2023 at 15:35",
            text: "Puri, Odisha, is renowned for the Jagannath Temple, serene beaches, and vibrant Rath Yatra, offering a perfect blend of spirituality and beauty!",
            images: [],
        },
    ]);
    const [newReview, setNewReview] = useState({ text: '', images: [] });
    const [zoomImage, setZoomImage] = useState(null);
    const [userName, setUserName] = useState('');

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleReviewChange = (e) => {
        setNewReview({ ...newReview, text: e.target.value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        setNewReview({ ...newReview, images: files });
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const date = new Date();
        const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        const review = {
            name: userName,
            date: formattedDate,
            text: newReview.text,
            images: newReview.images,
        };
        setReviews([...reviews, review]);
        setNewReview({ text: '', images: [] });
        setIsModalOpen(false);
    };

    return (
        <div>
            <section className="bg-white py-8 rounded-md mb-16 antialiased dark:bg-gray-800 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <button type="button"
                        onClick={handleOpenModal}
                        className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm bg-blue-600 font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Write a review
                    </button>

                    <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
                        {reviews.map((review, index) => (
                            <div key={index} className="gap-3 py-6 sm:flex sm:items-start">
                                <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                                    <div className="space-y-0.5">
                                        <p className="text-base font-semibold text-gray-900 dark:text-white">{review.name}</p>
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{review.date}</p>
                                    </div>
                                </div>
                                <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">{review.text}</p>
                                    <div className="flex gap-2">
                                        {review.images.map((img, idx) => (
                                            <img
                                                key={idx}
                                                className="h-32 w-20 rounded-lg object-cover cursor-pointer"
                                                src={img}
                                                alt=""
                                                onClick={() => setZoomImage(img)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div
                    id="review-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50"
                >
                    <div className="relative w-full max-w-2xl p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                        <form onSubmit={handleSubmitReview}>
                            <div>
                                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name *</label>
                                <input
                                    type="text"
                                    onChange={(e) => setUserName(e.target.value)}
                                    className='w-full p-2 text-white rounded bg-zinc-700 outline-none' placeholder='Your Name'
                                    required />
                            </div>
                            <div className="my-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Review *
                                </label>
                                <textarea
                                    className="w-full p-2 text-white rounded bg-zinc-700 outline-none"
                                    rows="4"
                                    placeholder='Write Something Here.'
                                    value={newReview.text}
                                    onChange={handleReviewChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Upload Images
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className='text-zinc-400'
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-6 py-2 text-md font-medium text-gray-500 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-md font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {zoomImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setZoomImage(null)}
                >
                    <img src={zoomImage} alt="Zoomed" className="max-h-full max-w-full" />
                </div>
            )}
        </div>
    );
}

export default Review;
