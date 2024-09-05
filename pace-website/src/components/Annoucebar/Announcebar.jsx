"use client";
import { usePathname } from "next/navigation";
import { StockInfo, TSwitcher } from "..";

export default function Announcebar() {
  const pathname = usePathname();
  return (
    <>
      <div
        className="announcemnet-wrapper page-width "
        style={pathname.includes("/admin") ? { display: "none" } : {}}
      >
        <div className="w-[100%] annoucement-inner flex justify-between">
          <StockInfo />
          <div className="annoucement_theme_switcher">
            <TSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
