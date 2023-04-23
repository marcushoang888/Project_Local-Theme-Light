import { useState } from "react";
import HeaderButton from "./HeaderButton";

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
            <button className="xl:hidden">
              <svg
                fill="none"
                height="16"
                viewBox="0 0 20 16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#000">
                  <path d="m0 0h20v2h-20z"></path>
                  <path d="m0 7h20v2h-20z"></path>
                  <path d="m0 14h20v2h-20z"></path>
                </g>
              </svg>
            </button>

            {/* Header Logo */}
            <a href="" className="xl:shrink-0">
              <img
                className="sm:px-6 sm:h-10 xl:px-0 xl:pr-28 xl:h-16 xl:object-contain"
                src="	https://cdn.shopify.com/s/files/1/0572/4146/8989/files/LOGO_new.png?v=1655818343"
                alt="Logo"
              />
            </a>

            {/* Header shopping cart */}
            <button className="block sm:flex sm:relative xl:hidden" href="">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "-2px" }}
              >
                <path
                  className="circle"
                  d="M9.5 20C9.77614 20 10 19.7761 10 19.5C10 19.2239 9.77614 19 9.5 19C9.22386 19 9 19.2239 9 19.5C9 19.7761 9.22386 20 9.5 20Z"
                  fill="none"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="circle"
                  d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z"
                  fill="white"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none !important" }}
                  contentEditable="true"
                  spellCheck="true"
                />
              </svg>
              <div className="bg-[#1D1D1D] text-white text-[9px] text-center font-medium w-3 h-3 rounded-full absolute translate-x-full xl:hidden">
                0
              </div>
            </button>
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

            {/* Header account btn  */}
            {/* <button
              className="sm:hidden xl:mr-[10px] xl:px-5 xl:flex xl:gap-3 xl:items-center xl:border-[1px] xl:border-solid xl:border-[#1d1d1d] xl:rounded-full xl:text-base xl:leading-4 xl:font-medium"
              href=""
            >
              <svg
                
                width={22}
                height={42}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 19.25V17.4167C18.3333 16.4442 17.947 15.5116 17.2593 14.8239C16.5717 14.1363 15.6391 13.75 14.6666 13.75H7.33329C6.36083 13.75 5.4282 14.1363 4.74057 14.8239C4.05293 15.5116 3.66663 16.4442 3.66663 17.4167V19.25"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none!important" }}
                />
                <path
                  d="M11 10.0833C13.0251 10.0833 14.6667 8.44171 14.6667 6.41667C14.6667 4.39162 13.0251 2.75 11 2.75C8.975 2.75 7.33337 4.39162 7.33337 6.41667C7.33337 8.44171 8.975 10.0833 11 10.0833Z"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none!important" }}
                />
              </svg>
              Account
            </button> */}

            {/* Header shopping cart btn */}
            {/* <button
              className="sm:hidden xl:mr-[10px] xl:px-5 xl:flex xl:gap-3 xl:items-center xl:bg-[#1d1d1d] xl:border-[1px] xl:border-solid border-[#1d1d1d] xl:text-base xl:leading-4 font-medium xl:rounded-full w-auto xl:text-white"
              href=""
            >
              <svg
                width={22}
                height={42}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "-2px" }}
              >
                <path
                  className="circle"
                  d="M9.5 20C9.77614 20 10 19.7761 10 19.5C10 19.2239 9.77614 19 9.5 19C9.22386 19 9 19.2239 9 19.5C9 19.7761 9.22386 20 9.5 20Z"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="circle"
                  d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z"
                  fill="white"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none !important" }}
                  contentEditable="true"
                  spellCheck="true"
                />
              </svg>
              $0.00 (0)
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
