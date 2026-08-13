"use client";
import React from "react";

export default function addLaporan() {
    return (
        <form className="w-full">
            <div className="space-y-12">
                <div className="pb-12">
                    <h2 className="text-[30px] font-semibold leading-7 text-gray-900">
                        Data Laporan
                    </h2>
                </div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama Barang
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    Apple MacBook Pro 17
                                </th>
                                <td className="px-6 py-4">12 Oktober 2022</td>
                                <td className="px-6 py-4">
                                    <select
                                        id="underline_select"
                                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    >
                                        <option
                                            className=" text-green-500 font-semibold"
                                            value="clear"
                                        >
                                            Clear
                                        </option>
                                        <option
                                            className=" text-yellow-500 font-semibold"
                                            value="pending"
                                        >
                                            Pending
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    );
}