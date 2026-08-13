import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/home/home.module.css";

const Card = ({ item }) => {
  return (
    <Link
      className="w-full md:max-w-[345px] lg:max-w-[415px] h-[400px] md:h-[257px] lg:h-[296px]"
      href={`/laporan/detail?id=${item.id}`}
    >
      <div className="w-full h-full flex flex-col gap-2 p-3 border-2 rounded-[10px] cursor-pointer bg-white">
        <div className="w-full h-auto flex justify-between items-center">
          <h3 className="text-base font-medium">{item.category}</h3>
          <p
            className={`w-[63px] text-center text-xs py-[4px] rounded-[8px] text-[#666666] ${
              item.status === "Pending" ? "bg-[#ffe60549]" : "bg-[#1aff055c]"
            }`}
          >
            {item.status ? item.status : "Pending"}
          </p>
        </div>
        <Image
          src={"/"}
          width={382}
          height={151}
          alt="Thumbnail kehilangan"
          responsive="true"
          loading="lazy"
          className="w-full h-[250px] md:h-[105px] lg:h-[140px] !mt-[8px] object-cover rounded-[5px]"
        />
        <h2 className="text-sm lg:text-base font-bold">{item.title}</h2>
        <p
          className={`${styles.laporanCardDescription} text-xs text-[#858585] overflow-hidden`}
        >
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
