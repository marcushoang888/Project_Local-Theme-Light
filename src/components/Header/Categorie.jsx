import Link from "./Link";

export default function Categorie() {
  return (
    <ul className="">
      <Link link="Back">
        <svg
          className="rotate-90"
          width="13"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
            fill="#000"
          ></path>
          <path
            d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
            fill="#000"
          ></path>
        </svg>
      </Link>
      <Link link="Pantry">
        <svg
          className="-rotate-90"
          width="13"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
            fill="#000"
          ></path>
          <path
            d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
            fill="#000"
          ></path>
        </svg>
      </Link>
      <Link link="Produce">
        <svg
          className="-rotate-90"
          width="13"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
            fill="#000"
          ></path>
          <path
            d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
            fill="#000"
          ></path>
        </svg>
      </Link>
      <Link link="Bakery">
        <svg
          className="-rotate-90"
          width="13"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
            fill="#000"
          ></path>
          <path
            d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
            fill="#000"
          ></path>
        </svg>
      </Link>
      <Link link="Dairy & Eggs">
        <svg
          className="-rotate-90"
          width="13"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
            fill="#000"
          ></path>
          <path
            d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
            fill="#000"
          ></path>
        </svg>
      </Link>
      <Link link="Drinks">
        <svg
          className="-rotate-90"
          width="13"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
            fill="#000"
          ></path>
          <path
            d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
            fill="#000"
          ></path>
        </svg>
      </Link>

      {/* Image */}
      <div>
        <div className="relative p-5 ml-[15px] min-h-[200px]">
          <img
            className="rounded-[10px] w-full h-full  object-center"
            src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/promo2.jpg?v=1654694174&width=860"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center text-[#1d1d1d] font-medium">
            <p className=" mb-3 text-[25px] leading-7 ">Fresh & Energetic</p>
            <p className=" mb-3 text-[15px] leading-[22px]">
              Healthy & Organic
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </ul>
  );
}
