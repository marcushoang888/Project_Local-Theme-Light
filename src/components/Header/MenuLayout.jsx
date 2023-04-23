import React from "react";
import NavbarStore from "./NavbarStore";
import MenuLink from "./MenuLink";
import Categorie from "./Categorie";

export default function MenuLayout() {
  return (
    <div className=" absolute top-0 left-0 bottom-0 max-w-[375px] h-full">
      <header className="flex justify-between pt-[22px] pb-[18px] px-5 ">
        <p className=" text-lg leading-[22px] font-medium">Menu</p>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1L1 17"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 1L17 17"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </header>
      {/* Store */}
      <NavbarStore />
      {/* Links  */}
      <MenuLink />

      {/* Categorie */}
      {/* <Categorie /> */}
      <footer></footer>
    </div>
  );
}
