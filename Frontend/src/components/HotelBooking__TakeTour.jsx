import React from 'react'

function HotelBooking__TakeTour() {
    return (
        <div className='min-h-[100vh] flex flex-col gap-12 py-16 items-center text-gray-100 pb-20'>
            <h2 className='font-medium text-5xl'>Take a tour</h2>
            <p className='text-center text-md font-medium px-64 py-3 -mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, amet voluptatem quaerat commodi sed reiciendis aspernatur accusamus quod obcaecati illum.</p>
            <div className='h-[70vh]'>
                <video className="h-full object-cover w-[100vw]" controls autoPlay muted>
                    <source src="https://drive.google.com/drive/folders/1my4oJ667fe5QKKDLCb6jx-_uiTTX9jND.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HotelBooking__TakeTour