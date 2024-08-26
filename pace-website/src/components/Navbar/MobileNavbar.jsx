"use client";

import Link from "next/link";
import { Logo, SearchIcon, TSwitcher } from "..";
import { links } from "./links";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const [isHide, setIsHide] = useState("hidden");
  const pathname = usePathname();
  useEffect(() => {
    setIsHide("hidden");
  }, [pathname]);
  return (
    <>
      <header style={{ background: "var(--mode-bg)" }}>
        <nav className="px-4 pt-2.5 pb-[3rem]" id="mobile__navbar">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Logo />
            <div className="flex items-center lg:order-2">
              {/* search icon start */}
              <SearchIcon />
              {/* search icon end */}

              <TSwitcher />

              <button
                dataCollapseToggle="mobile-menu-2"
                type="button"
                style={{
                  color: "var(--primary-text)",
                  border: "2px solid var(--primary-text)",
                  marginLeft: "1rem",
                }}
                className="inline-flex items-center p-2 ml-1 rounded-lg lg:hidden"
                ariaControls="mobile-menu-2"
                ariaExpanded="false"
                onClick={() => {
                  isHide === "hidden"
                    ? setIsHide("visible")
                    : setIsHide("hidden");
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-10 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${isHide} justify-between items-center w-full lg:flex lg:order-1`}
              style={{
                background: "var(--mode-bg)",
                height: "calc(100vh - 13.5rem)",
              }}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col" style={{ marginTop: "2rem" }}>
                {links?.map((link) => {
                  return (
                    <>
                      <li>
                        <Link
                          href={link?.link}
                          className="block py-2 pr-4 pl-3 rounded navbar-link"
                          ariaCurrent="page"
                        >
                          {link?.name}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
