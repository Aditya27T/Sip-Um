"use client";
import React, { useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import Search from "@/components/Search";
import styles from "@/app/home/home.module.css";

const data = [
  { namaUser: "User 1", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Laptop Dell XPS 13", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "laporan" },
  { namaUser: "User 2", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Keyboard Mechanical", deskripsi: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "kerusakan" },
  { namaUser: "User 3", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Mouse Wireless", deskripsi: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", type: "laporan" },
  { namaUser: "User 4", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Monitor 4K", deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", type: "kerusakan" },
  { namaUser: "User 5", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Printer Laser", deskripsi: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", type: "laporan" },
  { namaUser: "User 6", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Smartphone", deskripsi: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", type: "kerusakan" },
  { namaUser: "User 7", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Tablet", deskripsi: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", type: "laporan" },
  { namaUser: "User 8", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Headphones", deskripsi: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", type: "kerusakan" },
  { namaUser: "User 9", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Webcam", deskripsi: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", type: "laporan" },
  { namaUser: "User 10", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Microphone", deskripsi: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", type: "kerusakan" },
  { namaUser: "User 11", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Router", deskripsi: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", type: "laporan" },
  { namaUser: "User 12", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "External Hard Drive", deskripsi: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.", type: "kerusakan" }
];


export default function Main() {
  const [selectedType, setSelectedType] = useState('laporan');

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const filteredData = data.filter(item => item.type === selectedType);

  return (
    <>
      <main className="w-full h-auto">
        <div className={`${styles.heroBackground} w-full h-screen`}>
          <section id="hero" className="w-full h-screen flex justify-center items-center">
              <div className="w-full flex flex-col gap-[20px] md:gap-[60px] justify-center items-center">
                <h1 className="text-center text-2xl sm:text-4xl md:text-6xl mx-[20px] sm:mx-[20px] lg:mx-[120px] leading-[30px] sm:leading-[40px] md:leading-[80px]">Revolutionize Your Inventory with Smart <span className="text-[#00408A]">SIP Reporting</span></h1>
                <Button className="w-[150px] md:w-[200px] h-[40px] md:h-[60px] font-normal rounded-[32px] bg-[#00408A] text-center text-sm md:text-2xl text-white">
                  Report Now
                </Button>
              </div>
            </section>
        </div>
        <div className="w-full h-auto container mx-auto">


          <section id="laporan" className="w-full h-screen">
            <div className="w-full h-auto flex flex-col gap-[30px]">
              <div className="w-full h-auto flex flex-col justify-start gap-[30px]">
                {/* Option */}
                <div className="w-full h-auto">
                  <ul className="flex items-center gap-5">
                    <li
                      className={`text-2xl font-medium cursor-pointer ${selectedType === 'laporan' ? 'underline underline-offset-[10px] text-[#00408A]' : 'text-[#8F8F8F]'}`}
                      onClick={() => handleTypeChange('laporan')}
                    >
                      Laporan Kehilangan
                    </li>
                    <li
                      className={`text-2xl font-medium cursor-pointer ${selectedType === 'kerusakan' ? 'underline underline-offset-[10px] text-[#00408A]' : 'text-[#8F8F8F]'}`}
                      onClick={() => handleTypeChange('kerusakan')}
                    >
                      Laporan Kerusakan
                    </li>
                  </ul>
                </div>
                {/* Search */}
                <div className="max-w-md rounded-[10px]">
                  <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <Search className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search" />
                  </div>
                </div>
              </div>
              {/* Data Card Laporan */}
              <div className="w-full h-auto flex flex-wrap justify-between gap-5">
                {filteredData.map((item, index) => (
                  <div key={index} className="md:w-[410px] md:h-[307px] flex flex-col gap-2 p-3 border-2 rounded-[10px]">
                    <div className="w-full h-auto flex justify-between items-center">
                      <h3 className="text-base font-medium">{item.namaUser}</h3>
                      <p className={`w-[63px] text-center text-xs py-[4px] rounded-[8px] text-[#666666] ${item.status === 'Pending' ? 'bg-[#ffe60549]' : 'bg-[#1aff055c]'}`}>{item.status}</p>
                    </div>
                    <Image 
                      src={item.thumbnail} 
                      width={378} 
                      height={151} 
                      alt="Thumbnail Laporan" 
                      responsive="true"
                      className="md:w-full h-[151px] !mt-[8px] object-cover rounded-[5px]"
                    />
                    <h2 className="text-base font-bold">{item.namaBarang}</h2>
                    <p className="text-xs text-[#858585]">{item.deskripsi}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}