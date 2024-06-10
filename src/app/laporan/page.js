"use client";
import React, { useState, useEffect } from "react";
import { initialData } from "@/app/api/laporan/data";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Card from "@/components/Card";
import useDebounce from "@/hooks/debounce";

export default function Trending() {
    const [searchLaporan, setSearchLaporan] = useState('');
    const debouncedSearchLaporan = useDebounce(searchLaporan, 500);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = initialData
            .filter(item => item.namaBarang.toLowerCase().includes(debouncedSearchLaporan.toLowerCase()))
            .sort((recent, last) => last.vote - recent.vote);
        setFilteredData(filtered);
    }, [debouncedSearchLaporan]);

    const handleSearchChange = (event) => {
        setSearchLaporan(event.target.value);
    };

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
                                    <Search 
                                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" 
                                        type="text" 
                                        id="search" 
                                        placeholder="Search" 
                                        value={searchLaporan} 
                                        onChange={handleSearchChange} 
                                    />
                                </div>
                            </div>
                            {/* Laporan Data */}
                            <div className="w-full h-auto flex flex-wrap justify-between items-center gap-[14px]">
                                {filteredData.map((item, index) => (
                                    <Card key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}