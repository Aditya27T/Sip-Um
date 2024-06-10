"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { initialData } from "@/app/api/laporan/data";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import styles from "@/app/trending/trending.module.css";


export default function Trending() {
    const router = useRouter();
    const sortLaporan = initialData.sort((recent, last) => last.vote - recent.vote);

    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="laporan" className="w-full h-auto flex justify-center items-center pt-[130px] pb-[50px]">
                    <div className="container mx-auto">
                        <div className="w-full h-auto flex flex-col gap-[30px]">
                            {/* Search */}
                            <div className="w-full lg:max-w-md rounded-[10px] border-2">
                                <div className="relative flex items-center w-full h-[40px] sm:h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                    <div className="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <Search className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search" />
                                </div>
                            </div>
                            {/* Laporan Data */}
                            <div className="w-full h-auto flex flex-wrap justify-between items-center gap-[14px]">
                                {sortLaporan.map((item, index) => (
                                    <Link className="w-full md:max-w-[345px] lg:max-w-[415px] h-[400px] md:h-[257px] lg:h-[296px]" key={index} href={`/trending/detail?id=${item.id}`}>
                                        <div className="w-full h-full flex flex-col gap-2 p-3 border-2 rounded-[10px] cursor-pointer bg-white">
                                            <div className="w-full h-auto flex justify-between items-center">
                                                <h3 className="text-base font-medium">{item.namaUser}</h3>
                                                <p className={`w-[63px] text-center text-xs py-[4px] rounded-[8px] text-[#666666] ${item.status === 'Pending' ? 'bg-[#ffe60549]' : 'bg-[#1aff055c]'}`}>{item.status}</p>
                                            </div>
                                            <Image
                                                src={item.thumbnail}
                                                width={382}
                                                height={151}
                                                alt="Thumbnail Laporan"
                                                responsive="true"
                                                loading="lazy"
                                                className="w-full h-[250px] md:h-[105px] lg:h-[140px] !mt-[8px] object-cover rounded-[5px]"
                                            />
                                            <h2 className="text-sm lg:text-base font-bold">{item.namaBarang}</h2>
                                            <p className={`${styles.laporanCardDescription} text-xs text-[#858585] overflow-hidden`}>{item.deskripsi}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}