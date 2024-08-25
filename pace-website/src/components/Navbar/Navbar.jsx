import Link from "next/link";
import { Logo, SearchIcon, Spacer } from "..";
import { links } from "./links";

export default function Navbar() {
  return (
    <>
      <Spacer classes={"w-full h-[1rem] mobile-spacer"} />
      <nav
        className="page-width mt-[1rem] flex justify-between items-center"
        id="desktop__navbar"
      >
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
      </nav>
    </>
  );
}
