import React, { useState } from "react";


const Header = () => {
  const [searchText, setSearchText] = useState("Search...");
  const [isEnglish, setIsEnglish] = useState(false); // สถานะเก็บว่าเลือกภาษา
  


  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev); // สลับสถานะภาษาเมื่อคลิก
  };

  const handleSearchClick = () => {
    // คุณสามารถเพิ่มฟังก์ชันการค้นหาที่นี่ หรือ redirect ไปยังหน้าค้นหาต่างๆ
    alert("Searching for: " + searchText); // ตัวอย่างการแสดงคำที่ค้นหา
  };


  return (
    <header className="w-full bg-white flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-between items-center h-[100px] px-4 
      bg-no-repeat bg-left-top bg-cover">

        {/* โลโก้ */}
        <div className="absolute left-3 top-2">
          <img src="/images/SOne_index_logo.png" alt="S-ONE Logo" className="h-[105px]" />
        </div>


        {/* Language Toggle */}
        <div className="absolute top-3 right-3 hidden md:flex space-x-3 flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            {/* รูปภาษาไทย */}
            <a href="#" onClick={toggleLanguage} className="flex items-center gap-2">
              <img
                src={isEnglish ? "/images/SOne_index_iconthai2.jpg" : "/images/SOne_index_iconthai.jpg"} // เปลี่ยนรูปภาษาไทย
                alt="Thai"
                className="w-[25px] h-[18px] sm:w-[30px] sm:h-[20px] lg:w-[35px] lg:h-[25px]"
              />
            </a>
            {/* รูปภาษาอังกฤษ */}
            <a href="#" onClick={toggleLanguage} className="flex items-center gap-2">
              <img
                src={isEnglish ? "/images/SOne_index_iconeng.jpg" : "/images/SOne_index_iconeng2.jpg"} // เปลี่ยนรูปภาษาอังกฤษ
                alt="English"
                className="w-[25px] h-[18px] sm:w-[30px] sm:h-[20px] lg:w-[35px] lg:h-[25px]"
              />
            </a>
          </div>

         {/* Search Bar */}
         <div className="w-full flex justify-end mt-1">
            <div className="flex items-center max-w-[240px]">
              <input
                type="text"
                className="formLoginsearch p-2 font-[Supermarket] bg-white flex-grow focus:outline-none border border-[#f05a28] w-[200px] h-[30px] rounded-l-md"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              <button  onClick={handleSearchClick} className="p-1 bg-white border border-[#f05a28] rounded-r-md flex items-center justify-center w-[30px] h-[30px]">
                <img src="/images/SOne_index_btsearch.jpg" width={30} height={30} alt="search icon" />
              </button>
            </div>
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
    </header>
  );
};

export default Header;
