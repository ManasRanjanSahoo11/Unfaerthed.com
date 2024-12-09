import React, { useState } from 'react'

function Guider() {

    const [btnClick, setBtnClick] = useState(false)

    const people = [
        {
            name: 'Disha',
            email: 'disha@gmail.me',
            role: 'Guider',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Dibya ',
            email: 'dibya@gmail.com',
            role: 'guider',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Goutam',
            email: 'goutam@gmail.com',
            role: 'guider',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: null,
        },
        {
            name: 'Suhani ',
            email: 'suhani@gmail.com.com',
            role: 'Guider',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'sahil',
            email: 'sahil@gmail.com',
            role: 'Director of Product',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: null,
        },
    ]

    return (
        <>
            <div className=''>
                <button
                    onClick={() => setBtnClick((prev) => !prev)}
                    className='bg-orange-500 text-white shadow-lg fixed px-10 py-3 rounded-lg top-1/2 right-0 font-medium rotate-90 -mr-16'>Need a guider</button>
            </div>

            {btnClick && <div 
            onClick={()=>setBtnClick(false)}
            className='h-screen w-full bg-gray-800 bg-opacity-80 inset-0 z-[99] flex items-center justify-center fixed'>
                <div className='bg-gray-200 w-1/2 px-5 rounded-lg relative'>
                    <button
                        onClick={() => setBtnClick(false)}
                        className='absolute right-2 top-1 hover:bg-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <ul role="list" className="divide-y pt-6 divide-gray-100">
                        {people.map((person) => (
                            <li key={person.email} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
                                        <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <div className='flex gap-4'>
                                        <button type="button" className='bg-gray-300 px-5 py-2 rounded-lg'>Message</button>
                                        <button type="button" className='bg-gray-300 px-5 py-2 rounded-lg'>Call</button>
                                    </div>
                                    {person.lastSeen ? (
                                        <p className="mt-1 text-xs/5 text-gray-500">
                                            Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                        </p>
                                    ) : (
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                <div className="size-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                            <p className="text-xs/5 text-gray-500">Online</p>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
        </>
    )
}

export default Guider
