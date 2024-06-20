"use client";
import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { addDataProperty } from "../api/laporan/data";

import { useFormik } from "formik";
import * as Yup from "yup";

const reportSchema = Yup.object().shape({
  id_user: Yup.number().required("id_user is required"),
  title: Yup.string().required("title is required"),
  location: Yup.string().required("location is required"),
  description: Yup.string().required("description is required"),
  status: Yup.string().required("status is required"),
});

export default function AddLaporan() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const [position, setPosition] = useState([51.505, -0.09]); // Default position
  const [zoom, setZoom] = useState(13);
  const [image, setImage] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSubmit = async (values) => {
    const { id_user, title, location, status, description } = values;
    try {
      const response = await addDataProperty(
        id_user,
        title,
        location,
        status,
        category,
        description,
        image
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      id_user: 1,
      title: "",
      location: `${position}`,
      status: "pending",
      description: "",
    },
    validationSchema: reportSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      console.log(values, position);
    },
  });

  const handleChangeFile = (e) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="my-10 mx-20">
        <div className="space-y-12">
          <div className="pb-12">
            <div className="flex gap-4">
              <Link href="/">
                <ArrowLeft size={32} />
              </Link>
              <h2 className="text-[30px] font-semibold leading-7 text-gray-900">
                Buat Data Laporan
              </h2>
            </div>

            <div className="mt-10 flex flex-col justify-between gap-10">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nama Barang
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block h-[40px] flex-1 pl-[10px] border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="nama barang"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="thumbnail-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gambar Barang
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="thumbnail-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="thumbnail-upload"
                          name="thumbnail-upload"
                          type="file"
                          onChange={handleChangeFile}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Deskripsi Barang
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows="5"
                    className="block w-full rounded-md border-0 py-2 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    placeholder="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="type-barang"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tipe Laporan
                </label>
                <div className="mt-2">
                  <select
                    id="type-barang"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    autoComplete="type-barang"
                    className="block h-[40px] w-full rounded-md border-0 py-1.5 pl-[10px] pr-[20px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Kehilangan</option>
                    <option>Kerusakan</option>
                  </select>
                </div>
              </div>

              <div className="w-full" style={{ height: "400px" }}>
                <Map position={position} zoom={zoom} />
              </div>

              <button
                type="submit"
                className=" bg-blue-400 w-full p-4 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
