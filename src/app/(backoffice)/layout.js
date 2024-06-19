'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import MenuSidebar from '@/components/Sidebar';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { LiaAddressBook } from 'react-icons/lia';


const MainLayout = ({ children }) => {
    const [isDropdown, setIsDropdown] = useState(false);
    const toggleDropdown = () => {
        setIsDropdown(!isDropdown);
    };

    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <Link href="#" className="flex gap-5">
                                <Image
                                    width={0}
                                    height={0}
                                    src="/logo-univ.svg"
                                    className="w-full h-[30px] object-cover"
                                    alt="Logo Universitas"
                                />
                                <span className="self-center text-gray-500 text-xl font-semibold whitespace-nowrap ">
                                    Dashboard Admin SIP Universitas Malang
                                </span>
                            </Link>
                        </div>
                        <div className="relative w-auto h-auto">
                            <button onClick={toggleDropdown}>
                                <Image
                                    src="/assets/images/profile.jpg"
                                    alt="Profile User Image"
                                    width={131}
                                    height={72}
                                    responsive="true"
                                    className="w-[50px] h-[50px] sm:w-[70px] sm:h-[35px] md:w-[40px] md:h-[40px] rounded-[100px] cursor-pointer object-contain"
                                />
                                {isDropdown && (
                                    <div className="absolute top-[45px] right-0 w-48 py-[10px] px-[10px] bg-white border border-gray-200 rounded-md shadow-md">
                                        <ul className="space-y-2">
                                            <li className="w-full flex items-center justify-start px-4 py-2 rounded-[5px] text-gray-700 hover:bg-gray-100">
                                                {<LiaAddressBook className="text-xl" />}
                                                <Link
                                                    href="/profile"
                                                    className="text-center w-full block"
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                            <Button className="w-full h-10 px-6 font-normal rounded-[6px] bg-[#00408A] text-white">Log Out</Button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between ">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <MenuSidebar
                                href="/dashboard"
                                icon={<BiSolidDashboard className="text-xl" />}
                                title={'Dashboard'}
                            />
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="sm:ml-[300px] sm:mr-[50px]">
                <div className="mt-[100px]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;