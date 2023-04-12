import React from "react";

export default function HeroItem({ heroUrl, text1, text2 }) {
  return (
    <div className="relative w-full h-full ">
      <img src={heroUrl} alt="Hero image" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1d1d1d] text-center">
        <p className="sm:mb-[30px] sm:text-[15px] sm:leading-[22px] ">
          {text1}
        </p>
        <h3 className="sm:mb-4 sm:text-[44px] sm:leading-[53px] sm:font-medium">
          {text2}
        </h3>
        {/* <button className="inline-block sm:py-4 sm:px-8 sm:text-xl border-solid border-[#1d1d1d] bg-[#1d1d1d] text-white rounded-full">SHOP NOW</button> */}
        <button className="text-center sm:py-4 sm:px-8 sm:text-xl  font-medium text-white border-solid border-[1px] border-black rounded-full bg-[#1d1d1d] transition-all">SHOP NOW</button>
      </div>
    </div>
  );
}
