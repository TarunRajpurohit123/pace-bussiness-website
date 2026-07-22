"use client";

import { Poppins, EB_Garamond, Karla, Lora } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const garamonds = EB_Garamond({
  subsets: ["latin"],
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        .current_year_enabled,
        .font-karla {
          font-family: ${karla.style.fontFamily}, sans-serif !important;
        }
        .irs-heading--main,
        .font-lora {
          font-family: ${lora.style.fontFamily}, serif !important;
        }
      `}</style>
    </>
  );
}


