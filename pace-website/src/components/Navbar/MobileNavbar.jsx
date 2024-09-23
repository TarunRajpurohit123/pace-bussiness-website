"use client";

import Link from "next/link";
import { Logo, SearchIcon, TSwitcher } from "..";
import { links } from "./links";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import uniqid from "uniqid";

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
                data-collapse-toggle="mobile-menu-2"
                type="button"
                style={{
                  color: "var(--primary-text)",
                  border: "2px solid var(--primary-text)",
                  marginLeft: "1rem",
                }}
                className="inline-flex mobile-menu-2 items-center p-2 ml-1 rounded-lg lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => {
                  isHide === "hidden"
                    ? setIsHide("visible")
                    : setIsHide("hidden");
                }}
              >
                <span className="sr-only">Open main menu</span>

                {isHide === "hidden" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--pure)"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--pure)"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                )}
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
                    <li key={uniqid("mobile", "link")}>
                      <Link
                        href={link?.link}
                        className="block py-2 pr-4 pl-3 rounded navbar-link"
                        aria-current="page"
                      >
                        {link?.name}
                      </Link>
                    </li>
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
