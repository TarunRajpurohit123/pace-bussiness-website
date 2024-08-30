import Link from "next/link";
import { Logo, SearchIcon, Spacer } from "..";
import { links } from "./links";
import Overlay from "./Overlay";

export default function Navbar() {
  return (
    <div className="relative">
      <Overlay />

      <nav
        className="page-width  mt-[1rem] flex justify-between items-center z-50"
        id="desktop__navbar"
      >
        <div className="z-10 flex justify-between w-full">
          <Logo />

          {/* links goes here*/}
          <ul className="flex">
            {links?.map((link, ind) => {
              return (
                <li className={ind != 0 ? `ml-[2.5rem]` : ``}>
                  <Link className="navbar-link" href={link?.link}>
                    {link?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* links end here*/}

          <div className="cursor-pointer">
            <SearchIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}
