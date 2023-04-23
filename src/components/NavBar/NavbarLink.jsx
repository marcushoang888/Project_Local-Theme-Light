import React from "react";

export default function NavbarLink({navlink}) {
  return (
    <li className="xl:py-[15px] xl:px-5">
      <a className="xl:pb-[3px]" href="">
        {navlink}
      </a>
    </li>
  );
}
