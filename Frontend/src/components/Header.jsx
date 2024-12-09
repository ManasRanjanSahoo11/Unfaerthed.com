import React from "react";

const Header = () => {
  return (
    <header id="home" className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-header-pattern">
      <h2 className="text-4xl font-bold">Explore the colourful World</h2>
      <div className="w-20 h-1 bg-black my-4"></div>
      <h1 className="text-5xl font-extrabold">WELCOME TO NAYAGARH</h1>
      <a href="#about" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700">
        Learn more
      </a>
    </header>
  );
};

export default Header;
