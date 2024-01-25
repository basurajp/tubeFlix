import React from "react";

const Header = () => {
  return (
    <div
      className="w-full flex   items-center mt-2 py-1 shadow-lg lg:h-16
    "
    >
      <h1 className="text-2xl font-semibold mx-2 cursor-pointer lg:ml-10 lg:mr-6">
        <i class="ri-menu-line"></i>
      </h1>
      <img
        className="w-20 lg:mr-2"
        src="https://www.igyaan.in/wp-content/uploads/2017/08/new-youtube-logo-840x402.jpg"
        alt="logo img"
      />
      <div className="w-full flex lg:justify-between">
        <input
          className="w-[80%] lg:w-[100%] mx-2 px-2 lg:px-3 lg:py-2 py-1   rounded-lg outline-none border"
          type="text"
          placeholder="Search here"
        />
        <button className="text-2xl font-bold lg:mr-10">
          <i className="ri-search-line cursor-pointer"></i>
        </button>  
      </div>

    </div>
  );
};

export default Header;
