import Image from "next/image";
import { useState } from "react";

export default function BrandCard({
  brand,
  content,
  image,
  hoverColor,
  hoverImage,
  headingColor,
  brandLogo,
}) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <section
        className="hbrand-card"
        style={hover ? { background: hoverColor } : {}}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <h1
          className="hbrand-card--heading"
          style={hover ? { color: headingColor } : {}}
        >
          {brand}
        </h1>
        <p className="hbrand-card--paragraph">{content}</p>
        <div className="relative">
          <Image
            src={!hover ? image : hoverImage}
            width="300"
            height="300"
            className="hbrandImage"
          />
          {hover && (
            <div className="brand__overlay flex justify-center items-center flex-col">
              <h2 className="uppercase brand_overlay_subheading">Discover</h2>
              <Image src={brandLogo} width="232" height="44" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
