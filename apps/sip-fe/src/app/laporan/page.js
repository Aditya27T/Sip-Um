"use client";
import React, { useState, useEffect } from "react";

import { trendings } from "@/app/api/laporan/data";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Search from "@/components/Search";
import SimplePagination from "@/components/Pagination";
import useDebounce from "@/hooks/debounce";

export default function Trending() {
  const [dataTrending, setDataTrending] = useState([]);
  const [filteredDataTrending, setFilteredDataTrending] = useState([]);
  const [searchTrending, setSearchTrending] = useState("");
  const debouncedSearchTrending = useDebounce(searchTrending, 500);

  const fetchData = async () => {
    try {
      const response = await trendings();
      setFilteredDataTrending(response.data.data);
      setDataTrending(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (debouncedSearchTrending) {
      setFilteredDataTrending(
        dataTrending.filter((item) =>
          item.title
            .toLowerCase()
            .includes(debouncedSearchTrending.toLowerCase())
        )
      );
    } else {
      setFilteredDataTrending(dataTrending);
    }
    console.log(debouncedSearchTrending);
  }, [debouncedSearchTrending, dataTrending]);

  const handleSearchChange = (e) => {
    setSearchTrending(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className=" container mt-40 mx-auto">
        <div className="w-full lg:max-w-md rounded-[10px] border-2">
          <div className="relative flex items-center w-full h-[40px] sm:h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <Search
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search"
              onChange={handleSearchChange}
            />
          </div>
        </div>
        {/* Laporan Data */}
        <div className="w-full h-auto mt-16 flex flex-wrap justify-between items-center gap-[14px]">
          {filteredDataTrending?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <SimplePagination />
      </div>
    </div>
  );
}
