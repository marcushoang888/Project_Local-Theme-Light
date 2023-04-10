import React from "react";

export default function ButtonOutline({textBtn}) {
  return (
    <button className="block m-auto mt-4 text-[15px] py-3 px-8 text-[#1d1d1d] font-medium  border-solid border-[1px] border-black rounded-full hover:bg-[#1d1d1d] hover:text-white">
      {textBtn}
    </button>
  );
}
