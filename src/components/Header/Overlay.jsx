import React from "react";

export default function Overlay({onClick}) {
  return (
    <div
      className="z-[-1] fixed left-0 top-0 bottom-0 w-screen h-screen bg-[#1d1d1d] opacity-30"
    ></div>
  );
}
