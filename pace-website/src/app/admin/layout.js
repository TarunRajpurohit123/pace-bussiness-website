import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  BookmarkSquareIcon,
  ArrowUpIcon,
  PhoneIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout w-full h-[100vh]  absolute top-[-50px] flex">
      <aside className="admin__sidebar bg-black w-[20rem] h-[100vh]">
        <ul className="aside__links__wrapper">
          <li className="bg-gray-800 hover:bg-gray-600 px-4 py-2">
            <Link href="#" className="text-white text-[1.5rem] flex">
              <HomeIcon style={{ width: "2rem", marginRight: "1rem" }} />
              Dashboard
            </Link>
          </li>
          <li className="bg-black hover:bg-gray-600 px-4 py-2">
            <Link href="#" className="text-white text-[1.5rem] flex">
              <BookmarkSquareIcon
                style={{ width: "2rem", marginRight: "1rem" }}
              />
              Blog Manager
            </Link>
          </li>
          <li className="hover:bg-gray-600 px-4 py-2">
            <Link href="#" className="text-white text-[1.5rem] flex">
              <ArrowUpIcon style={{ width: "2rem", marginRight: "1rem" }} />
              Investor Manager
            </Link>
          </li>
          <li className="hover:bg-gray-600 px-4 py-2">
            <Link href="#" className="text-white text-[1.5rem] flex">
              <HomeIcon style={{ width: "2rem", marginRight: "1rem" }} />
              Pace Stats
            </Link>
          </li>
          <li className="hover:bg-gray-600 px-4 py-2">
            <Link href="#" className="text-white text-[1.5rem] flex">
              <PhoneIcon style={{ width: "2rem", marginRight: "1rem" }} />
              Inqueries
            </Link>
          </li>
          <li className="hover:bg-gray-600 px-4 py-2">
            <Link href="#" className="text-white text-[1.5rem] flex">
              <PhoneIcon style={{ width: "2rem", marginRight: "1rem" }} />
              NewspaperIcon
            </Link>
          </li>
        </ul>
      </aside>
      <div className="admin-content bg-gray-100 w-[119rem]">
        <main>{children}</main>
      </div>
    </div>
  );
}
