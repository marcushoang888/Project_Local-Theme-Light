export default function HeaderButton() {
  return (<div className="flex shrink-0">

    <button
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
    </button>
     <button
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
   </button>
  </div>
  );
}
