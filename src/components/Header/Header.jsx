export default function Header() {
  return (
    <header>
      {/* Container */}
      <div>
        {/* Header container */}
        <div className="text-base border-solid border-b  lg: flex items-center px-[30px] py-5 ">
          <div className="flex justify-between items-center p-[15px] md:px-5 ">
            {/* Nav menu link */}
            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            {/* Logo link */}
            <div>
              <a href="">
                <img
                  className="h-10 px-6"
                  src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/LOGO_new.png?v=1655818343"
                  alt="Logo"
                />
              </a>
            </div>
            {/* Shopping cart link */}
            <div className="lg:hidden">
              <a href="">
                <svg
                  className="relative"
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
                    stroke="black "
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="circle"
                    d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z"
                    fill="white"
                    stroke="black "
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091"
                    stroke="black "
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ fill: "none !important" }}
                  />
                </svg>
                <span className="absolute top-0 right-0 translate-x-[-50%] translate-y-[120%] w-4 h-4 flex items-center text-center bg-black text-white rounded-full">
                  0
                </span>
              </a>
            </div>
          </div>

          {/* Header input button */}
          <div className="px-[15px] pb-[15px] md:px-5 lg:px-[30px] pb-5 flex justify-between items-center">
            {/* Header input */}
            <div>
              <span className="absolute translate-x-2/4 translate-y-1/2 items-center">
                <svg
                  className=""
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
              <form
                className="w-full py-2 pr-6 pl-[43px] border-solid border-[1px] border-gray rounded-full hover:border-black lg:mr-[10px]"
                action=""
              >
                <input type="text" placeholder="Search for" />
              </form>
              {/* <div className="bg-rgba(0,0,0,.36) opacity-100 h-screen w-screen"></div> */}
            </div>

            {/* Header button */}
            <a className="lg:mr-[10px] pr-5 pl-[53px] border-solid border-black border-[1px] rounded-full flex">
              <svg
                width={22}
                height={22}
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
            </a>
            <a className="lg: bg-black text-white flex rounded-full mr-[10px]">
              <svg
                className=""
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
                  stroke="black "
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="circle"
                  d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z"
                  fill="white"
                  stroke="black "
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091"
                  stroke="black "
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none !important" }}
                />
              </svg>
              $0.00 (0)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
