import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";


const Home = () => {
  
  const [hovered, setHovered] = useState(null);
  const [searchText, setSearchText] = useState("");
  
    
  const handleSearch = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    alert("กำลังค้นหา...");
    
  }; 

  const handleSearchtire = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    alert("กำลังค้นหา...");
    
  }; 

    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
    };
  
  
    const handleSearchClick = () => {
      // คุณสามารถเพิ่มฟังก์ชันการค้นหาที่นี่ หรือ redirect ไปยังหน้าค้นหาต่างๆ
      alert("Searching for: " + searchText); // ตัวอย่างการแสดงคำที่ค้นหา
    };

    const buttons = [
      { id: "tire", defaultImg: "images/SOne_index_bt-tire.jpg", hoverImg: "images/SOne_index_bt-tire1.jpg" },
      { id: "brake", defaultImg: "images/SOne_index_bt-break.jpg", hoverImg: "images/SOne_index_bt-break1.jpg" },
      { id: "battery", defaultImg: "images/SOne_index_bt-battery.jpg", hoverImg: "images/SOne_index_bt-battery1.jpg" },
      { id: "chokeup", defaultImg: "images/SOne_index_bt-chokeup.jpg", hoverImg: "images/SOne_index_bt-chokeup1.jpg" },
      { id: "oil", defaultImg: "images/SOne_index_bt-oil.jpg", hoverImg: "images/SOne_index_bt-oil1.jpg" },
      { id: "guarantee", defaultImg: "images/SOne_index_bt-guarantee.jpg", hoverImg: "images/SOne_index_bt-guarantee1.jpg" },
    ];
    
    const newsData = [
      { date: "19 NOV 2014", title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม", image: "images/SOne_index_pic3.jpg" },
      { date: "19 NOV 2014", title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม", image: "images/SOne_index_pic3.jpg" },
      { date: "19 NOV 2014", title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม", image: "images/SOne_index_pic3.jpg" },
    ];
  
  return (
    <div>
    
      <Header />
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="h-[10px]"></div>
      
      <div className="w-full mx-auto flex flex-col md:flex-row gap-x-3">
      {/* Mobile Banner (Visible only on mobile) */}
      <div className="relative block md:hidden w-full">
        <img src="/images/SOne_Mobile_banner.jpg" alt="Mobile Banner" className="w-full" />
        {/* Arrow Controls (Swipe left/right) */}
        <div className="absolute top-1/2 left-2 right-2 transform -translate-y-1/2 flex justify-between">
          <button className=" p-1 rounded-full shadow-md">
            <img src="/images/SOne_Mobile_arrow01.jpg" width="28" height="15" alt="Left" />
          </button>
          <button className="p-1 rounded-full shadow-md">
            <img src="/images/SOne_Mobile_arrow02.jpg" width="28" height="15" alt="Right" />
          </button>
        </div>
      </div>

      <div className="h-[10px]"></div>

        {/* ค้นหายาง */}
        <div className="max-w-full mx-auto px-1 flex flex-wrap gap-3">
        <div className="w-full sm:w-[290px]">
          <div className="bg-[#F05A28]">
            {/* Title */}
            <div className="h-[40px] flex items-center px-3">
              <span className="text-white text-xl sm:text-2xl">ค้นหายาง</span>
            </div>

            <div className="h-[300px] bg-[url('/images/SOne_index_bg_searchtype.jpg')] bg-no-repeat bg-cover p-4">
              <form onSubmit={handleSearchtire} id="form2" name="form2" method="post" action="" className="space-y-3">
                {/* Tire Width */}
                <div className="text-white mb-[-4px] ml-26">
                  <span className="text-2xl font-[Supermarket] mb-[-4px] block">หน้ายาง</span>
                  <p className="text-sm mt-[-8px]">ความกว้าง (มม.)</p>
                  <select name="tireWidth" className="w-full sm:w-40 bg-white text-black border rounded-md">
                    <option>--เลือกหน้ายาง--</option>
                  </select>
                </div>

                {/* Series */}
                <div className="text-white mb-[-4px] ml-26">
                  <span className="text-2xl font-[Supermarket] mb-[-4px] block">ซีรี่ย์</span>
                  <p className="text-sm mt-[-8px]">อัตราส่วนความสูงแก้มยาง (%)</p>
                  <select name="series" className="w-40 bg-white text-black border border-gray-300 rounded-md">
                    <option>--เลือกซีรี่ย์--</option>
                  </select>
                </div>

                {/* Rim Size */}
                <div className="text-white mb-[-4px] ml-26">
                  <span className="text-2xl font-[Supermarket] mb-[-4px] block">กระทะล้อ</span>
                  <p className="text-sm mt-[-8px]">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
                  <select name="rimSize" className="w-40 bg-white text-black border border-gray-300 rounded-md">
                    <option>--เลือกกระทะล้อ--</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex justify-center items-center pt-6 ml-26">
                  <button type="submit">
                    <img src="/images/SOne_index_search.png" className="w-[100px] h-[24px]" alt="ค้นหา" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>

        <div className="hidden md:flex justify-end items-center h-[340px] w-full bg-[url('images/SOne_index_banner.jpg')] bg-no-repeat bg-cover">
          <div className="w-[146px] space-y-2">
            <div className="flex justify-center">
              <a href="#">
                <img src="images/SOne_index_arrowup.png" width="28" height="15" alt="Up" />
              </a>
            </div>
            <div className="bg-[#F05A28] px-0 py-1 flex justify-center">
              <img src="images/SOne_index_pic01.jpg" width="124" height="67" alt="Pic 01" />
            </div>
            <div className="bg-[#bab3af] flex justify-center">
              <img src="images/SOne_index_pic02.jpg" width="124" height="67" alt="Pic 02" />
            </div>
            <div className="bg-[#BAB3AF] flex justify-center">
              <img src="images/SOne_index_pic02.jpg" width="124" height="67" alt="Pic 02" />
            </div>
            <div className="flex justify-center">
              <a href="#">
                <img src="images/SOne_index_arrowdown.png" width="28" height="15" alt="Down" />
              </a>
            </div>
          </div>
        </div>
      </div>
     {/* ปุ่มในมือถือจัดแถวละ 2 ในจอปกติคงเดิม */}
     <div className="grid grid-cols-2 md:flex md:flex-wrap justify-start gap-4 p-3 w-full md:w-auto md:ml-4">
        {buttons.map((btn) => (
          <img
            key={btn.id}
            src={hovered === btn.id ? btn.hoverImg : btn.defaultImg}
            alt={btn.id}
            className="w-32 h-16 sm:w-32 md:w-48 lg:w-52 h-auto cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHovered(btn.id)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </div>

      <div className="max-w-full mx-auto px-2 flex flex-wrap gap-3">
      {/* ค้นหาศูนย์บริการ */}
      <div className="w-full sm:w-[290px]">
        <div className="bg-[#F05A28]">
        <div className="h-[40px] flex items-center px-3">
            <span className="text-white text-xl sm:text-2xl">ค้นหาศูนย์บริการ</span>
          </div>
          <div className="bg-[#252525] p-4">
            <form onSubmit={handleSearch} className="space-y-3">
              {['จังหวัด', 'เขต/อำเภอ', 'ถนน'].map((label, index) => (
                <div key={index} className="text-white flex flex-col sm:flex-row items-center gap-2">
                <span className="text-lg sm:text-xl text-center sm:text-right w-full sm:w-20">{label}</span>
                <select className="w-full sm:w-40 bg-white text-black border rounded-md">
                    <option>--เลือกหน้ายาง--</option>
                  </select>
                </div>
              ))}
              <div className="text-orange-500 text-xs sm:text-sm text-center">หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง</div>
              <div className="flex justify-center pt-4">
                <button type="submit">
                  <img src="/images/SOne_index_search.png" className="w-[80px] sm:w-[100px]" alt="ค้นหา" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

{/* News Section */}
<div className="flex-1 min-w-0 p-1 w-full sm:w-auto">
  <div className="border border-orange-500 overflow-hidden">
    <div className="bg-white p-4 sm:p-5">
      <div className="flex justify-between items-center mb-3 border-b border-orange-500 pb-1">
        <h2 className="text-xl sm:text-2xl text-black">News & Events</h2>
        <div className="flex space-x-1">
          {["SOne_index_bullet1.png", "SOne_index_bullet2.png", "SOne_index_bullet2.png"].map((img, index) => (
            <button
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={`images/${hovered === index ? "SOne_index_bullet1.png" : img}`}
                width="10"
                height="10"
                alt={`bullet${index}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* News Grid (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:flex md:overflow-x-auto md:space-x-4">
        {newsData.map((news, index) => (
          <div key={index} className="p-2 border shadow-sm md:min-w-[320px]">
            <div
              className="bg-cover bg-center h-24 relative"
              style={{ backgroundImage: `url(${news.image})` }}
            >
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
                {news.date}
              </div>
            </div>
            <div className="mt-2 text-sm">
              <a href="#" className="hover:underline text-black font-medium">
                {news.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>



      <div className="w-full sm:w-[300px] flex flex-col items-center">
      {/* Safety Tips & Contact */}
      <div className="flex w-[300px] h-[138px]">
        <img src="images/SOne_index_tips1.png" className="w-[172px] h-[150px]" alt="Safety Tips" />
        <div className="w-[290px] h-[140px] bg-[#252525] text-white relative">
          {/* Main Content */}
          <div className="flex w-30">
            {/* Opening Quote Icon */}
            <div className="text-orange-500 text-xl absolute top-2 right-9">Safety Tips</div>
            <img src="images/SOne_index_pic66.png" className="w-3 h-3 absolute top-10 left-0" alt="quote open" />
            <p className="text-lg leading-5 mt-15">
              ควรเติมน้ำมันตอนเช้า ขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่
            </p>
            {/* Closing Quote Icon */}
            <img src="images/SOne_index_pic99.png" className="w-3 h-3 absolute bottom-5 right-0" alt="quote close" />
          </div>
        </div>
      </div>

          {/* Subscription Section */}
          <div className="mt-4 w-full flex flex-col sm:flex-row items-center">
          <h4 className="text-lg sm:text-xl text-gray-700">สมัครรับข่าวสาร</h4>
          {/* Search Bar */}
          <div className="flex items-center w-full sm:max-w-[230px] border border-[#f05a28] rounded-md overflow-hidden">
          <input
            type="text"
            className="text-sm bg-white flex-1 p-1 focus:outline-none"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="กรุณาใส่อีเมล..."
          />
          <button
            onClick={handleSearchClick}
            className="w-[25px] h-[25px] bg-white border-l border-[#f05a28] flex justify-center items-center"
          >
            <img src="images/SOne_index_btgo.jpg" alt="GO" className="w-40 h-40 object-contain" />
          </button>
        </div>

      </div>

      {/* Contact Section */}
      <div className="w-full  bg-repeat-x bg-left-center mt-5 bg-[url('images/SOne_index_dash--.png')]">
            <img src="images/SOne_index_call.png" className="mt-2 w-full"/>
      </div>
    </div>
  
      </div>

       {/* Footer */}
       <div className="mt-2 p-3 max-w-full mx-auto "> 
        <div className="flex justify-between items-center">
          <img src="images/SOne_index_logos.png" width="130" height="35" alt="Logo" />
          <div className="bg-black text-white text-sm py-2 w-full text-left font-sans rounded px-2">Copyright © 2014
          </div>
        </div>
      </div>

      
    </div>
    
  );
};

export default Home;