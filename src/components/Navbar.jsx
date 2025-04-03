import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("Search...");
  const [isEnglish, setIsEnglish] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
  };

  const handleSearchClick = () => {
    alert("Searching for: " + searchText);
  };

  return (
    <nav className="bg-black text-white font-[Supermarket] text-lg flex items-center justify-between px-4 py-3 w-full rounded-md mt-2 shadow-lg w-full relative">
      {/* Logo & Mobile Controls */}
      <div className="text-orange-500 text-xl md:hidden">S-ONE</div>
      <div className="flex md:hidden items-center absolute right-4 top-4 space-x-3">
        {/* Search Icon (Mobile Only) */}
        <button onClick={() => setIsSearchOpen(true)} className="text-white focus:outline-none">
          <img src="/images/SOne_Mobile_searchho.png" alt="Search Icon" className="h-[20px]" />
        </button>
        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <img src="/images/SOne_Mobile_menuho.png" alt="Menu Icon" className="h-[20px]" />
        </button>
      </div>


       {/* Search Bar Popup (Mobile) */}
       {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-200 p-4 rounded-md shadow-lg w-4/5 max-w-[400px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-black">Search</span>
              <button onClick={() => setIsSearchOpen(false)} className="text-black text-xl">❌</button>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="p-3 text-black rounded-md w-full border border-[#f05a28] h-[40px] focus:outline-none"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Type to search..."
              />
              <button onClick={handleSearchClick} className="p-2 bg-black rounded-md">
              <img src="/images/SOne_index_btsearch.jpg" width={30} height={30} alt="search icon" />
              </button>
            </div>
            
             {/* Navigation Links */}
        <div className="text-black font-[Supermarket] text-lg mt-1 flex flex-wrap justify-center gap-2">
          <a href="#" className="hover:text-orange-500">About S-ONE</a>
          <span>|</span>
          <a href="#" className="hover:text-orange-500">Job Opportunity</a>
          <span>|</span>
          <a href="#" className="hover:text-orange-500">Contact Us</a>
          <span>|</span>
          <a href="#" className="hover:text-orange-500">Site Map</a>
        </div>
          </div>
        </div>
      )}

      

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li className="flex items-center space-x-2">
          <img src="/images/SOne_index_menu02.png" alt="icon" className="w-5 h-5" />
          <span className="text-orange-500">Product & Services</span>
        </li>
        {["Promotions", "News & Events", "Safety Tips", "FAQs", "Location"].map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <a href="#" className="relative group flex items-center">
              <img
                src="/images/SOne_index_menu01.png"
                alt="icon"
                className="w-5 h-5 transition duration-300 group-hover:hidden"
              />
              <img
                src="/images/SOne_index_menu02.png"
                alt="icon-hover"
                className="w-5 h-5 transition duration-300 hidden group-hover:block"
              />
            </a>
            <a href="#" className="text-white transition duration-300 hover:text-orange-500">
              {item}
            </a>
          </li>
        ))}
      </ul>
       {/* ไอคอนโซเชียล */}
       <div className="flex space-x-3 hidden md:flex space-x-3">
        {[
          { img: "SOne_index_btfacebook.png", imgHover: "SOne_index_btfacebook1.png", alt: "Facebook" },
          { img: "SOne_index_bttwitter.png", imgHover: "SOne_index_bttwitter1.png", alt: "Twitter" },
          { img: "SOne_index_btyoutube.png", imgHover: "SOne_index_btyoutube1.png", alt: "YouTube" }
        ].map((icon, index) => (
          <a key={index} href="#" className="relative group w-5 h-5 block">
            {/* ไอคอนปกติ */}
            <img
              src={`/images/${icon.img}`}
              alt={icon.alt}
              className="w-5 h-5 transition duration-300 group-hover:opacity-0"
            />
            {/* ไอคอนเมื่อ hover */}
            <img
              src={`/images/${icon.imgHover}`}
              alt={`${icon.alt} Hover`}
              className="w-5 h-5 transition duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center space-y-6 py-6 px-6 md:hidden z-50">
    <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
      <X size={28} />
    </button>
    <a href="#" className="text-orange-500 text-2xl">Product & Services</a>
    {["Promotions", "News & Events", "Safety Tips", "FAQs", "Location"].map((item, index) => (
      <a key={index} href="#" className="text-white text-2xl hover:text-orange-500">
        {item}
      </a>
    ))}

    {/* Language Selection */}
    <div className="flex space-x-6 mt-4">
      <button onClick={toggleLanguage}>
        <img
          src={isEnglish ? "/images/SOne_index_iconthai2.jpg" : "/images/SOne_index_iconthai.jpg"}
          alt="Thai"
          className="w-10 h-7"
        />
      </button>
      <button onClick={toggleLanguage}>
        <img
          src={isEnglish ? "/images/SOne_index_iconeng.jpg" : "/images/SOne_index_iconeng2.jpg"}
          alt="English"
          className="w-10 h-7"
        />
      </button>
    </div>

    {/* ไอคอนโซเชียล */}
    <div className="flex space-x-3 space-x-3">
        {[
          { img: "SOne_index_btfacebook.png", imgHover: "SOne_index_btfacebook1.png", alt: "Facebook" },
          { img: "SOne_index_bttwitter.png", imgHover: "SOne_index_bttwitter1.png", alt: "Twitter" },
          { img: "SOne_index_btyoutube.png", imgHover: "SOne_index_btyoutube1.png", alt: "YouTube" }
        ].map((icon, index) => (
          <a key={index} href="#" className="relative group w-8 h-8 block">
            {/* ไอคอนปกติ */}
            <img
              src={`/images/${icon.img}`}
              alt={icon.alt}
              className="w-8 h-8 transition duration-300 group-hover:opacity-0"
            />
            {/* ไอคอนเมื่อ hover */}
            <img
              src={`/images/${icon.imgHover}`}
              alt={`${icon.alt} Hover`}
              className="w-8 h-8 transition duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
  </div>
      )}
    </nav>
  );
};

export default Navbar;
