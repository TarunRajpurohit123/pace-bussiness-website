"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  BookmarkSquareIcon,
  ArrowUpIcon,
  PhoneIcon,
  NewspaperIcon,
  NumberedListIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const path = usePathname();
  return (
    <>
      <aside className="admin__sidebar bg-black w-[20rem] h-[100vh]">
        <ul className="aside__links__wrapper">
          <li
            className={
              path == "/admin"
                ? "bg-gray-800 hover:bg-gray-600 px-4 py-2"
                : "bg-black hover:bg-gray-600 px-4 py-2"
            }
          >
            <Link href="/admin" className="text-white text-[1.5rem] flex">
              <HomeIcon style={{ width: "2rem", marginRight: "1rem" }} />
              Dashboard
            </Link>
          </li>
          <li
            className={
              path == "/admin/blog"
                ? "bg-gray-800 hover:bg-gray-600 px-4 py-2"
                : "bg-black hover:bg-gray-600 px-4 py-2"
            }
          >
            <Link href="/admin/blog" className="text-white text-[1.5rem] flex">
              <BookmarkSquareIcon
                style={{ width: "2rem", marginRight: "1rem" }}
              />
              Blog
            </Link>
          </li>
          <li
            className={
              path == "/admin/investors"
                ? "bg-gray-800 hover:bg-gray-600 px-4 py-2"
                : "bg-black hover:bg-gray-600 px-4 py-2"
            }
          >
            <Link
              href="/admin/investors"
              className="text-white text-[1.5rem] flex"
            >
              <ArrowUpIcon style={{ width: "2rem", marginRight: "1rem" }} />
              Financial Report
            </Link>
          </li>
          <li
            className={
              path == "/admin/stats"
                ? "bg-gray-800 hover:bg-gray-600 px-4 py-2"
                : "bg-black hover:bg-gray-600 px-4 py-2"
            }
          >
            <Link href="/admin/stats" className="text-white text-[1.5rem] flex">
              <NumberedListIcon
                style={{ width: "2rem", marginRight: "1rem" }}
              />
              Pace Stats
            </Link>
          </li>
          <li
            className={
              path == "/admin/inquiries"
                ? "bg-gray-800 hover:bg-gray-600 px-4 py-2"
                : "bg-black hover:bg-gray-600 px-4 py-2"
            }
          >
            <Link
              href="/admin/inquiries"
              className="text-white text-[1.5rem] flex"
            >
              <PhoneIcon style={{ width: "2rem", marginRight: "1rem" }} />
              Inqueries
            </Link>
          </li>
          <li
            className={
              path == "/admin/newsletter"
                ? "bg-gray-800 hover:bg-gray-600 px-4 py-2"
                : "bg-black hover:bg-gray-600 px-4 py-2"
            }
          >
            <Link
              href="/admin/newsletter"
              className="text-white text-[1.5rem] flex"
            >
              <NewspaperIcon style={{ width: "2rem", marginRight: "1rem" }} />
              News Letters
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
