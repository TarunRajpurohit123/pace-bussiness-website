"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Hero2({
  title = "Our Group",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
}) {
  const router = useRouter();
  const currentRoute = usePathname();
  return (
    <>
      <section className="hero__two">
        <h1>{title}</h1>
        <p>{content}</p>
        <button
          style={
            currentRoute === "/investors/press-releases"
              ? { display: "block" }
              : { display: "none" }
          }
          onClick={() => {
            router?.back();
          }}
        >
          Back
        </button>
      </section>
    </>
  );
}
