import NavbarLink from "./NavbarLink";
import NavbarStore from "./NavbarStore";

export default function NavBar() {
  return (
    <nav>
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto">
        {/* Navbar container */}
        <div className="sm:px-[15px] sm:py-[7.5px] md:px-5 lg:py-[10px] lg:px-[30px] xl:py-[15px] xl:px-10 sm:flex sm:justify-between xl:gap-3 items-center">
          <NavbarLink />
          <NavbarStore />
        </div>
      </div>
    </nav>
  );
}
