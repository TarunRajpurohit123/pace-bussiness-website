import Link from "next/link";
import { Logo, SearchIcon, Spacer } from "..";

export default function Navbar() {
  // links
  const links = [
    { name: "Group", link: "#" },
    { name: "Brands", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Contact Us", link: "#" },
    { name: "Career", link: "#" },
    { name: "Investor Relations", link: "#" },
  ];

  return (
    <>
      <Spacer classes={"w-full h-[1rem]"} />
      <nav className="page-width mt-[1rem] flex justify-between items-center">
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
