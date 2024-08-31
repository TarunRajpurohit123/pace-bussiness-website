"use client";

import Image from "next/image";
import { useState } from "react";
import { Transition } from "react-transition-group";
import { useRef } from "react";

const duration = 300;

export default function BrandCard({
  brand,
  content,
  image,
  hoverColor,
  hoverImage,
  headingColor,
  brandLogo,
  subheadiColor,
  contentColor,
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
          <section
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
                style={{ objectFit: "cover" }}
                alt="image"
              />
              {hover && (
                <div className="brand__overlay flex justify-center items-center flex-col">
                  <h2
                    className="uppercase brand_overlay_subheading"
                    style={{ color: subheadiColor }}
                  >
                    Discover
                  </h2>
                  <Image src={brandLogo} width="232" height="44" alt="image" />
                </div>
              )}
            </div>
          </section>
        )}
      </Transition>
    </>
  );
}
