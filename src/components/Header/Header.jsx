import { useState } from "react";
import HeaderButton from "./HeaderButton";
import Headermenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderShoppingCart from "./HeaderShoppingCart";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleShowOverlay() {
    setOpen(!open);
  }

  return (
    <header className="border-b-[1px] border-solid border-gray">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto ">
        {/* Header container */}
        <div className="sm:flex sm:flex-col xl:py-5 xl:px-10 xl:flex-row xl:items-center">
          <div className="sm:px-[15px] sm:py-[15px] md:px-5  lg:px-[30px] lg:py-5 xl:p-0  sm:flex sm:justify-between sm:items-center ">
            {/* Header menu */}
            <Headermenu />

            {/* Header Logo */}
            <HeaderLogo />

            {/* Header shopping cart */}
            <HeaderShoppingCart />
          </div>

          {/* Header search box */}
          <div className="xl:flex xl:justify-between xl:items-center w-full">
            <div className="z-0 relative sm:px-[15px] md:px-5 lg:px-[30px] sm:pb-[15px] lg:pb-5 xl:pb-0 xl:items-center w-full">
              <span className="absolute justify-start translate-y-1/2 translate-x-1/2">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="7.5"
                    stroke="black"
                    strokeWidth={2}
                    style={{ fill: "none!important" }}
                  />
                  <path
                    d="M17.1213 15.2929L16.4142 14.5858L15 16L15.7071 16.7071L17.1213 15.2929ZM19.2426 20.2426C19.6331 20.6332 20.2663 20.6332 20.6568 20.2426C21.0473 19.8521 21.0473 19.219 20.6568 18.8284L19.2426 20.2426ZM15.7071 16.7071L19.2426 20.2426L20.6568 18.8284L17.1213 15.2929L15.7071 16.7071Z"
                    fill="black"
                    style={{ stroke: "none!important" }}
                  />
                </svg>
              </span>
              <input
                className="sm:py-2 sm:pr-6 sm:pl-[43px] border-[1px] border-solid border-[#cccc] rounded-full w-full hover:border-[#1d1d1d] hover:placeholder-[#1d1d1d] active:shadow-md-[#1d1d1d]"
                type="text"
                placeholder="Search for"
                onClick={handleShowOverlay}
              />
              {/* overlay */}
              {open ? (
                <div
                  onClick={handleShowOverlay}
                  className="z-[-1] fixed left-0 top-0 bottom-0 w-screen h-screen bg-[#1d1d1d] opacity-30"
                ></div>
              ) : (
                ""
              )}
            </div>

            <HeaderButton />
          </div>
        </div>
      </div>
    </header>
  );
}
