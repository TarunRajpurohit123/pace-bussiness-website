import { Logo } from "@/components";
import React from "react";

const HomeWelcome = ({
  isHeading = true,
  extClass,
  content = "PACE Ecommerce Ventures Ltd is more than just a company; it's a catalyst for change, inspiring a community of brands, partners, and individuals to embrace a life of growth, empowerment, and fulfillment. Through our diverse portfolio, we don't just operate—we lead with purpose, creating opportunities that resonate with the heart and soul of everyone we reach.",
}) => {
  return (
    <div
      className={`home__welcome__section pt-[15rem] pb-[7.5rem] ${extClass} page-width`}
    >
      {isHeading && (
        <h1 className="flex items-center justify-center">
          Welcome to the world of PACE
          {/* <Logo color="var(--pure)" classNames={"ml-[1.3rem] logo--svg"} /> */}
        </h1>
      )}

      <p className={!isHeading ? "" : "mt-[2.5rem]"}>{content}</p>
    </div>
  );
};

export default HomeWelcome;
