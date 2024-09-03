"use client";

import Link from "next/link";
import { Logo, SearchIcon, Spacer } from "..";
import { links } from "./links";
import Overlay from "./Overlay";
import uniqid from "uniqid";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const scrollPosition = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setCurrentScroll(scrollPosition);
    };

    window?.addEventListener("scroll", handleScroll);

    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(currentScroll);

  return (
    <div className="relative flex justify-center">
      <Overlay />

      <div
        className={
          currentScroll > 100 && "w-full fixed bg-[var(--mode-bg)] top-0"
        }
        style={
          currentScroll > 100
            ? { borderBottom: "1px solid rgba(231, 231, 231, 0.3)" }
            : {}
        }
      >
        <nav
          className={
            "page-width  mt-[1rem] flex justify-between items-center z-50"
          }
          id="desktop__navbar"
        >
          <div className="z-10 flex justify-between w-full">
            <Logo />

            {/* links goes here*/}
            <ul className="flex">
              {links?.map((link, ind) => {
                return (
                  <li
                    key={uniqid("navlink")}
                    className={ind != 0 ? `ml-[2.5rem] navbar--link` : `navbar--link`}
                  >
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
    </div>
  );
}
