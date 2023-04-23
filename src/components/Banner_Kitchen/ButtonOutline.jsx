import React from "react";

export default function ButtonOutline({textBtn}) {
  return (
    <button className="block mt-4 md:mt-6 py-3 xl:py-[15px] px-8 lg:px-10 xl:px-[46px] text-xl xl:text-[22px] leading-6  font-medium text-[#1d1d1d] border-solid border-[1px] border-black rounded-full hover:bg-[#1d1d1d] hover:text-white hover:transition-all">
      {textBtn}
    </button>
  );
}