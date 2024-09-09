"use client";

import { useEffect, useState } from "react";

export default function TSwitcher() {
  const [isSwitch, setIsSwitch] = useState(true);
  useEffect(() => {
    if (document) {
      if (!isSwitch) {
        document.getElementById("body").classList.add("light-mode");
        document.getElementById("body").classList.remove("dark-mode");
      } else {
        document.getElementById("body").classList.add("dark-mode");
        document.getElementById("body").classList.remove("light-mode");
      }
    }
  }, [isSwitch]);
  return (
    <>
      <div className="website_switcher flex items-center">
        <div className="website_switcher_text gray_25-text">Theme Mode</div>
        <div
          className={`ml-[1rem] cursor-pointer tsiwtcher pointer-events-auto w-[3.6rem] h-[1.9rem] rounded-full p-1 transition duration-200 ease-in-out ${
            isSwitch ? "success-bg" : "back-gray_100 border-gray_100"
          } `}
          onClick={() => {
            setIsSwitch(!isSwitch);
          }}
        >
          <div
            className={`h-[1.4rem] w-[1.4rem] tsiwtcher--ball rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${
              isSwitch && "translate-x-7"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
