"use client";

import { Poppins, EB_Garamond } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the weights you need
});

const garamonds = EB_Garamond({
  subsets: ["latin"],
});

export default function FontProvider() {
  return (
    <>
      <style jsx global>{`
        p,
        a,
        button,
        div {
          font-family: ${poppins.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${garamonds.style.fontFamily};
        }
      `}</style>
    </>
  );
}
