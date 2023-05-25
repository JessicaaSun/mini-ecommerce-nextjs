import { SUB_HEADING } from "@/utils/font";
import React from "react";

const CategoryCard = ({image, title}) => {
  return (
    <div className={`${SUB_HEADING.className} flex-shrink-0 relative overflow-hidden rounded-2xl shadow-sm`}>
      <div className="relative w-[370px] max-md:w-[290px] max-md:h-14 h-40 flex items-center justify-center">
        <div
          className="opacity-20 block absolute w-full  bottom-0 left-0 "
        ></div>
        <img
          className="relative object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="relative bottom-6 text-white px-6 mt-6">
        {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
        <div className="flex justify-between">
          <h4 className="block">{title}</h4>
          {/* <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
            $36.00
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
