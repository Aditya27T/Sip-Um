"use client";
"use strict";
import React from 'react';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Icon } from '@iconify/react';

import { initialData } from "@/app/api/laporan/data";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Dropdown from '@/components/Dropdown';
import styles from "@/app/trending/trending.module.css";


export default function DetailLaporanPage() {
    const laporanId = useSearchParams().get("id");
    const id = laporanId ? parseInt(laporanId) : 0; // kie hapus bae jane rpp dit, gawe ngetes tok
    const item = initialData.find(item => item.id === id);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('id-ID', options);
    };

    if (!item) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="font-bold font-2xl text-center">Data tidak ditemukan</p>
                <Button className="mt-5" onClick={() => router.push("/trending")}>Kembali</Button>
            </div>
        )

    }

    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="detial_laporan" className={`${styles.backgroundRadial} w-full h-auto flex justify-center items-center pt-[100px] pb-[50px]`}>
                    <div className="container mx-auto">
                        <div className="w-full h-auto flex flex-col justify-between gap-[50px]">
                            <div id="headline" className="w-full h-auto flex flex-col gap-[10px ]">
                                <div className="w-full h-auto flex justify-between">
                                    <h2 className="font-medium text-[32px]">{item.namaBarang}</h2>
                                    <h3 className="font-medium text-[24px] text-[#8F8F8F]">{formatDate(item.createdAt)}</h3>
                                </div>
                                <div className="w-full h-auto flex justify-start items-center gap-[50px]">
                                    <h3 className="font-medium text-[28px] text-[#666666]">{item.namaUser}</h3>
                                    <div className="h-full">
                                        <p className={`w-[86px] py-[5px] font-normal text-center text-xs text-[#666666] rounded-[8px] ${item.status === 'Pending' ? 'bg-[#ffe60549]' : 'bg-[#1aff055c]'}`}>{item.status}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="content" className="w-full flex justify-start items-center gap-[100px] pl-[100px]">
                                <div className="w-[75px] h-auto flex flex-col justify-between items-center gap-5 py-1 rounded-full bg-[#F0F0F0]">
                                    <Icon className="cursor-pointer" icon="iconamoon:arrow-up-6-circle" width="70" height="70" style={{ color: "#00408A" }} />
                                    <p className="font-bold text-[36px] text-[#00408A]">{item.vote}</p>
                                    <Icon className="cursor-pointer" icon="iconamoon:arrow-down-6-circle" width="70" height="70" style={{ color: "#00408A" }} />
                                </div>
                                <Image
                                    src={item.thumbnail}
                                    width={750}
                                    height={320}
                                    alt="Thumbnail Laporan"
                                    responsive="true"
                                    loading="lazy"
                                    className="w-full max-w-[750px] h-full max-h-[320px] !mt-[8px] object-cover rounded-[12px]"
                                />
                            </div>
                            <p>{item.deskripsi}</p>
                            <div id="comment" className="w-full h-auto flex flex-col justify-around px-[100px] pt-[30px] pb-[50px] border-2 bg-white">
                                <div className="w-full h-[100px] flex justify-between items-center border-b-2">
                                    <p className="font-bold text-[14px]">{item.comment} Comments</p>
                                    <div className="w-auto h-auto flex justify-start items-center gap-5">
                                        <p className="font-medium text-[14px] text-[#4B4F56]">Sort By</p>
                                        <Dropdown />
                                    </div>
                                </div>
                                <form className="w-full h-auto">
                                    {/* container comments */}
                                    <div className="px-28">
                                        <div class="space-y-12">
                                            <div class="pb-5">
                                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div class="col-span-full">
                                                        <div class="mt-2">
                                                            <textarea id="about" name="about" rows="3" placeholder="Add a commnet..." class="block w-full rounded-md border-0 py-3 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[1px] focus:ring-inset focus:ring-[#4777DE] sm:text-sm sm:leading-6"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-6 flex items-center justify-end gap-x-6">
                                            <button type="submit" class="rounded-md bg-[#00408A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4777DE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}