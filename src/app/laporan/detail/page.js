"use client";
import React from 'react';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';

import { getLaporanById } from "@/app/api/laporan/data";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import styles from "@/app/laporan/laporan.module.css";


export default function DetailLaporanPage() {
    const laporanId = useSearchParams().get("id");
    const id = laporanId ? parseInt(laporanId) : null; // kie hapus bae jane rpp dit, gawe ngetes tok
    const item = getLaporanById.find(item => item.id === id);

    const formatDateLaporan = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('id-ID', options);
    };

    if (!item) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <p className="font-bold text-3xl text-center">Data tidak ditemukan</p>
                <Button className="mt-5 py-2 px-10 rounded-md text-white bg-[#00408A]">
                    <Link href="/laporan">Kembali</Link>
                </Button>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="detial_laporan" className={`${styles.backgroundRadial} w-full h-screen flex justify-center items-center pt-[20px] sm:pt-[100px] sm:pb-[50px]`}>
                    <div className="container mx-auto">
                        <div className="w-full h-auto flex flex-col justify-between gap-[100px] sm:gap-[50px]">
                            <div id="headline" className="w-full h-auto flex flex-col gap-[10px ]">
                                <div className="w-full h-auto flex justify-between items-center">
                                    <h2 className="font-medium text-[18px] sm:text-[32px]">{item.namaBarang}</h2>
                                    <h3 className="font-medium text-[14px] sm:text-[24px] text-[#8F8F8F]">{formatDateLaporan(item.createdAt)}</h3>
                                </div>
                                <div className="w-full h-auto flex justify-start items-center gap-[20px] sm:gap-[50px] mt-4 sm:mt-0">
                                    <h3 className="font-medium text-[16px] sm:text-[28px] text-[#666666]">{item.namaUser}</h3>
                                    <div className="h-full">
                                        <p className={`w-[60px] sm:w-[86px] py-[4px] sm:py-[5px] font-normal text-center text-[10px] sm:text-xs text-[#666666] rounded-[5px] sm:rounded-[8px] ${item.status === 'Pending' ? 'bg-[#ffe60549]' : 'bg-[#1aff055c]'}`}>{item.status}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="content" className="w-full flex justify-start items-center gap-[30px] sm:gap-[50px] lg:gap-[100px] pl-0 lg:pl-[100px]">
                                <div className="w-[45px] sm:w-[75px] h-auto flex flex-col justify-between items-center gap-5 py-[2px] sm:py-1 rounded-full bg-[#F0F0F0]">
                                    <Icon className="h-[40px] w-[40px] sm:w-[70px] sm:h-[70px] cursor-pointer" icon="iconamoon:arrow-up-6-circle" width="70" height="70" style={{ color: "#00408A" }} />
                                    <p className="font-bold text-[20px] sm:text-[36px] text-[#00408A]">{item.vote}</p>
                                    <Icon className="h-[40px] w-[40px] sm:w-[70px] sm:h-[70px] cursor-pointer" icon="iconamoon:arrow-down-6-circle" width="70" height="70" style={{ color: "#00408A" }} />
                                </div>
                                <div class="aspect-video">
                                    <Image
                                        src={item.thumbnail}
                                        width={750}
                                        height={320}
                                        alt="Thumbnail Laporan"
                                        responsive="true"
                                        loading="lazy"
                                        className={`h-full max-w-full rounded-[12px] object-cover`}
                                    />
                                </div>
                            </div>
                            <p className="text-[14px] sm:text-[20px]">{item.deskripsi}</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

// "use client";
// import React from 'react';
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Icon } from '@iconify/react';

// import { initialData } from "@/app/api/laporan/data";
// import Navbar from "@/components/Navbar";
// import Button from "@/components/Button";
// import Dropdown from '@/components/Dropdown';
// import styles from "@/app/laporan/laporan.module.css";


// export default function DetailLaporanPage() {
    // const laporanId = useSearchParams().get("id");
    // const id = laporanId ? parseInt(laporanId) : null; // kie hapus bae jane rpp dit, gawe ngetes tok
    // const item = initialData.find(item => item.id === id);

    // const formatDateLaporan = (dateString) => {
    //     const date = new Date(dateString);
    //     const options = { day: '2-digit', month: 'long', year: 'numeric' };
    //     return date.toLocaleDateString('id-ID', options);
    // };

//     if (!item) {
//         return (
//             <div className="w-full h-screen flex flex-col justify-center items-center">
//                 <p className="font-bold text-3xl text-center">Data tidak ditemukan</p>
//                 <Button className="mt-5 py-2 px-10 rounded-md text-white bg-[#00408A]">
//                     <Link href="/laporan">Kembali</Link>
//                 </Button>
//             </div>
//         )
//     }

//     return (
//         <>
//             <Navbar />
//             <main className="w-full h-auto">
//                 <section id="detial_laporan" className={`${styles.backgroundRadial} w-full h-auto flex justify-center items-center pt-[100px] pb-[50px]`}>
//                     <div className="container mx-auto">
//                         <div className="w-full h-auto flex flex-col justify-between gap-[50px]">
//                             <div id="headline" className="w-full h-auto flex flex-col gap-[10px ]">
//                                 <div className="w-full h-auto flex justify-between items-center">
//                                     <h2 className="font-medium text-[18px] sm:text-[32px]">{item.namaBarang}</h2>
//                                     <h3 className="font-medium text-[14px] sm:text-[24px] text-[#8F8F8F]">{formatDateLaporan(item.createdAt)}</h3>
//                                 </div>
//                                 <div className="w-full h-auto flex justify-start items-center gap-[20px] sm:gap-[50px] mt-4 sm:mt-0">
//                                     <h3 className="font-medium text-[16px] sm:text-[28px] text-[#666666]">{item.namaUser}</h3>
//                                     <div className="h-full">
//                                         <p className={`w-[60px] sm:w-[86px] py-[4px] sm:py-[5px] font-normal text-center text-[10px] sm:text-xs text-[#666666] rounded-[5px] sm:rounded-[8px] ${item.status === 'Pending' ? 'bg-[#ffe60549]' : 'bg-[#1aff055c]'}`}>{item.status}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="content" className="w-full flex justify-start items-center gap-[30px] sm:gap-[50px] lg:gap-[100px] pl-0 lg:pl-[100px]">
//                                 <div className="w-[45px] sm:w-[75px] h-auto flex flex-col justify-between items-center gap-5 py-[2px] sm:py-1 rounded-full bg-[#F0F0F0]">
//                                     <Icon className="h-[40px] w-[40px] sm:w-[70px] sm:h-[70px] cursor-pointer" icon="iconamoon:arrow-up-6-circle" width="70" height="70" style={{ color: "#00408A" }} />
//                                         <p className="font-bold text-[20px] sm:text-[36px] text-[#00408A]">{item.vote}</p>
//                                     <Icon className="h-[40px] w-[40px] sm:w-[70px] sm:h-[70px] cursor-pointer" icon="iconamoon:arrow-down-6-circle" width="70" height="70" style={{ color: "#00408A" }} />
//                                 </div>
//                                 <div class="aspect-video">
//                                     <Image
//                                         src={item.thumbnail}
//                                         width={750}
//                                         height={320}
//                                         alt="Thumbnail Laporan"
//                                         responsive="true"
//                                         loading="lazy"
//                                         className={`h-full max-w-full rounded-[12px] object-cover`}
//                                     />
//                                 </div>
//                             </div>
//                             <p className="text-[14px] sm:text-[20px]">{item.deskripsi}</p>
//                         </div>
//                     </div>
//                 </section>

//                 <section id="comment" className="w-full h-auto flex justify-center items-center py-16">
//                     <div className="container mx-auto">
//                         <div className="w-full h-auto flex flex-col justify-around px-[30px] md:px-[60px] xl:px-[100px] pt-0 sm:pt-[30px] pb-[50px] border-2 bg-white">
//                             <div className="w-full h-[100px] flex justify-between items-center border-b-2">
//                                 <p className="font-bold text-[12px] sm:text-[14px]">{item.comment} Comments</p>
//                                 <div className="w-auto h-auto flex justify-start items-center gap-5">
//                                     <p className="font-medium text-[12px] sm:text-[14px] text-[#4B4F56]">Sort By</p>
//                                     <Dropdown />
//                                 </div>
//                             </div>
//                             <form className="w-full h-auto">
//                                 {/* container comments */}
//                                 <div className="px-[20px] md:px-[40px] xl:px-28">
//                                     <div class="space-y-12">
//                                         <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                                             <div class="col-span-full">
//                                                 <div class="mt-2">
//                                                     <textarea id="about" name="about" rows="3" placeholder="Add a commnet..." class="block w-full text-[14px] sm:text-[18px] border-0 py-3 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[1px] focus:ring-inset focus:ring-[#4777DE] sm:text-sm sm:leading-6"></textarea>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="h-[60px] sm:h-[90px] flex items-end justify-end pb-[10px] pr-[20px] bg-[#2d394c13]">
//                                         <button type="submit" class="rounded-md bg-[#00408A] px-[25px] py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4777DE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// }