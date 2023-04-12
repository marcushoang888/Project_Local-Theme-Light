import NavbarCategories from "./NavbarCategories";
import NavbarLink from "./NavbarLink";

export default function NavbarLinks() {
  return (
    <ul className="hidden lg:hidden xl:flex xl:justify-between xl:text-base xl:font-medium ">
      <li className="xl:py-[15px] xl:px-5 xl:flex items-center">
        <a className="font-inherit " href="">
          Categories
        </a>
        <svg
          className="inline-block sm:ml-[10px]"
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
      </li>

      <NavbarLink navlink="About us" />
      <NavbarLink navlink="Our stores" />
      <NavbarLink navlink="Recipes" />
      <NavbarLink navlink="Blog" />
      <NavbarLink navlink="FAQ" />
    </ul>
  );
}
