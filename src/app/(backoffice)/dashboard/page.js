"use client";
import React from "react";

export default function addLaporan() {
    return (
        <form className="w-full">
            <div class="space-y-12">
                <div class="pb-12">
                    <h2 class="text-[30px] font-semibold leading-7 text-gray-900">Buat Data Laporan</h2>
                    <div class="mt-10 flex flex-col justify-between gap-10">
                        <div class="sm:col-span-4">
                            <label for="namabarang" class="block text-sm font-medium leading-6 text-gray-900">Nama Barang</label>
                            <div class="mt-2">
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                                    <input type="text" name="namabarang" id="namabarang" autocomplete="namabarang" className="block h-[40px] flex-1 pl-[10px] border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="nama barang" />
                                </div>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="thumbnail-photo" class="block text-sm font-medium leading-6 text-gray-900">Gambar Barang</label>
                            <div class="h-[400px] mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="thumbnail-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-[#00408A] focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-[#4a5ac7]">
                                            <span>Upload a file</span>
                                            <input id="thumbnail-upload" name="thumbnail-upload" type="file" class="sr-only" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi Barang</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" rows="5" className="block w-full rounded-md border-0 py-2 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" placeholder="deskripsi barang"></textarea>
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="type-barang" class="block text-sm font-medium leading-6 text-gray-900">Tipe Laporan</label>
                            <div class="mt-2">
                                <select id="type-barang" name="type-barang" autocomplete="type-barang" className="block h-[40px] w-full rounded-md border-0 py-1.5 pl-[10px] pr-[20px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Kehilangan</option>
                                    <option>Kerusakan</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56400419724!2d107.56075544356331!3d-6.9034423794030495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1718055004469!5m2!1sid!2sid" width="1080" height="608" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div class="w-full mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" class="w-[100px] rounded-md bg-[#00408A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1f2968] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}