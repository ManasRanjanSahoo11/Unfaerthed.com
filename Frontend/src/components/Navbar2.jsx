import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar2 = () => {
    // Array of Odisha's districts
    const districts = [
        "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack",
        "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur",
        "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha",
        "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada",
        "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredDistricts, setFilteredDistricts] = useState([]);

    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const { loginWithRedirect, user, logout } = useAuth0(); // Auth0

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Handle search input change
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearch(query);

        if (query) {
            const filtered = districts.filter((district) =>
                district.toLowerCase().startsWith(query.toLowerCase())
            );
            setFilteredDistricts(filtered);
        } else {
            setFilteredDistricts([]);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (district) => {
        setSearch(district);
        setFilteredDistricts([]);
        navigate(`/district/${district.toLowerCase()}`); // Redirect to the district page
    };

    // Handle Enter key press
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            const district = filteredDistricts[0] || search;
            if (district) {
                navigate(`/district/${district.toLowerCase()}`); // Redirect to the district page
            }
        }
    };

    // Clear search input
    const clearSearch = () => {
        setSearch("");
        setFilteredDistricts([]);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="dark:bg-gray-700">
            {/* Navbar container */}
            <div className="container mx-auto flex items-center justify-between py-3 px-5 border-b">
                <div className="text-2xl font-bold text-[#FF9119] transition duration-300 hover:scale-105 cursor-pointer">
                    Logo
                </div>

                <div className="relative w-full max-w-xl mx-6">
                    <input
                        type="search"
                        value={search}
                        onChange={handleSearch}
                        onKeyDown={handleKeyPress}
                        placeholder="Search District"
                        className="w-full py-2.5 px-4 text-md text-white font-medium rounded-full border border-gray-300 transition duration-300 focus:outline-none focus:ring-1 focus:ring-[#FF9119] focus:border-[#FF9119] bg-transparent"
                    />
                    {search && (
                        <button
                            onClick={clearSearch}
                            className="absolute inset-y-0 right-12 flex items-center px-2 text-gray-600 hover:text-red-600 transition duration-300 ease-in-out focus:outline-none"
                        >
                            &#x2715; {/* Close icon */}
                        </button>
                    )}
                    <button className="absolute inset-y-0 right-0 flex items-center px-6 text-gray-600 bg-gray-100 border-l border-gray-300 rounded-r-full hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#FF9119]">
                        <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                            />
                        </svg>
                    </button>
                    <div className="absolute overflow-hidden z-10 text-white w-full mt-2 bg-gray-700 rounded-lg shadow-lg">
                        {filteredDistricts.length > 0 ? (
                            filteredDistricts.map((district) => (
                                <div
                                    key={district}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-500"
                                    onClick={() => handleSuggestionClick(district)}
                                >
                                    {district}
                                </div>
                            ))
                        ) : (
                            search && (
                                <div className="px-4 py-2 text-gray-500">
                                    No results found
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="flex gap-5">
                    <button
                        type="button"
                        className="flex items-center space-x-2 text-white bg-[#FF9119] hover:bg-transparent hover:border-2 hover:border-[#FF9119] border-2 border-[#FF9119] hover:bg-[#FF9119] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-full text-sm px-6 py-3 transition duration-300 ease-in-out"
                        onClick={()=>{navigate('/signin')}}
                    >
                        <span>Admin Login</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                    {!user && (
                        <button
                            type="button"
                            className="flex items-center space-x-2 text-white bg-[#FF9119] hover:bg-transparent hover:border-2 hover:border-[#FF9119] border-2 border-[#FF9119] hover:bg-[#FF9119] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-full text-sm px-6 py-3 transition duration-300 ease-in-out"
                            onClick={() => loginWithRedirect()}
                        >
                            <span>Sign in</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    )}

                    {user && (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-400"
                                id="user-menu-button"
                                aria-expanded={isDropdownOpen}
                                onClick={toggleDropdown}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src={user.picture}
                                    alt="user"
                                />
                            </button>

                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3">
                                        <span className="block text-md font-medium text-gray-900 dark:text-white">
                                            {user.name}
                                        </span>
                                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                        </span>
                                    </div>
                                    <ul className="py-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-md font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                onClick={() => logout({ logoutParams: window.Location.origin })}
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Secondary Navbar Section */}
            <div className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl py-3 px-12">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-md">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:border-b-2 hover:border-[#FF9119]"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:border-b-2 hover:border-[#FF9119]"
                                >
                                    Hotels
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:border-b-2 hover:border-[#FF9119]"
                                >
                                    Guide
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:border-b-2 hover:border-[#FF9119]"
                                >
                                    Handcrafts
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:border-b-2 hover:border-[#FF9119]"
                                >
                                    About Odisha
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:border-b-2 hover:border-[#FF9119]"
                                >
                                    Experience
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;
