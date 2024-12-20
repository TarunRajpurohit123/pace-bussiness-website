"use client";

import Image from "next/image";
import { useState } from "react";
import { Transition } from "react-transition-group";
import { useRef } from "react";
import BlankLinkIcon from "../svgs/BlankLinkIcon";
import Link from "next/link";

const duration = 300;

export default function BrandCard({
  brand = null,
  content = null,
  image = null,
  hoverColor = null,
  hoverImage = null,
  headingColor = null,
  brandLogo = null,
  subheadiColor = null,
  contentColor = null,
  href = "#",
}) {
  const [hover, setHover] = useState(false);
  const nodeRef = useRef(null);
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    background: "none",
  };

  const headingStyle = {
    transition: `all ${duration}ms ease-in-out`,
    color: "none",
  };

  const transitionStyles = {
    entered: { background: hoverColor },
    exited: { background: "none" },
  };

  const transitionStylesHead = {
    entered: { color: headingColor },
    exited: { color: "var(--pure)" },
  };
  return (
    <>
      <Transition nodeRef={nodeRef} in={hover}>
        {(state) => (
          <a
            href={href}
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="hbrand-card"
            // style={hover ? { background: hoverColor } : {}}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseOut={() => {
              setHover(false);
            }}
          >
            <h1
              className="hbrand-card--heading"
              ref={nodeRef}
              style={{
                ...headingStyle,
                ...transitionStylesHead[state],
              }}
              // style={hover ? { color: headingColor } : {}}
            >
              {brand}
            </h1>
            <p
              className="hbrand-card--paragraph"
              style={contentColor ? { color: contentColor } : {}}
            >
              {content}
            </p>
            <div className="relative">
              <Image
                src={!hover ? image : hoverImage}
                width="300"
                height="300"
                className="hbrandImage"
                style={
                  !hover
                    ? { objectFit: "cover" }
                    : {
                        objectFit: "cover",
                        opacity: brand != "Zwankee" ? "10%" : "10%",
                      }
                }
                alt="image"
              />
              {hover && (
                <div className="brand__overlay flex justify-center items-center flex-col">
                  <p
                    className="uppercase brand_overlay_subheading"
                    style={{ color: subheadiColor }}
                  >
                    Discover
                  </p>
                  <Image src={brandLogo} width="232" height="44" alt="image" />

                  <Link href="#">
                    <BlankLinkIcon
                      color={
                        brand === "Zwankee" ||
                        brand === "Zwankee Global" ||
                        brand === "Homepost" ||
                        brand === "Cot & Candy"
                          ? "var(--mode-bg)"
                          : "var(--pure)"
                      }
                      className="mt-[4.1rem]"
                    />
                  </Link>
                </div>
              )}
            </div>
          </a>
        )}
      </Transition>
    </>
  );
}
