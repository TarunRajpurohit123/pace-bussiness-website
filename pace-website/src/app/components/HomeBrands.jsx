"use client";

import CircleArrowNextIcon from "@/components/svgs/CircleArrowNextIcon";
import CircleArrowPrevIcon from "@/components/svgs/CircleArrowPrevIcon";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BrandCard from "./BrandCard";

export default function HomeBrands() {
  const swiperRef = useRef(null);
  const data = [
    {
      brand: "Zwankee",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/zwnakeeBrand.png",
      hoverColor: "var(--pure)",
      headingColor: "var(--mode-bg)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/zwankeelogo.png",
      subheadiColor: "var(--mode-bg)",
    },
    {
      brand: "Ostilos",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ostilosBrand.png",
      hoverColor: "#0C4831",
      headingColor: "var(--pure)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/OstilosLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Wishrows",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/widhrowsBrand.jpeg",
      hoverColor: "#1E3557",
      headingColor: "var(--pure)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/WishroLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Pace Print Innovations",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ppiBrand.jpeg",
      hoverColor: "#F36C3F",
      headingColor: "var(--pure)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/ppiLogo.png",
      subheadiColor: "var(--pure)",
      contentColor: "var(--pure)",
    },
    {
      brand: "Zwankee",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/zwnakeeBrand.png",
      hoverColor: "var(--pure)",
      headingColor: "var(--mode-bg)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/zwankeelogo.png",
      subheadiColor: "var(--mode-bg)",
    },
    {
      brand: "Ostilos",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ostilosBrand.png",
      hoverColor: "#0C4831",
      headingColor: "var(--pure)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/OstilosLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Wishrows",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/widhrowsBrand.jpeg",
      hoverColor: "#1E3557",
      headingColor: "var(--pure)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/WishroLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Pace Print Innovations",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ppiBrand.jpeg",
      hoverColor: "#F36C3F",
      headingColor: "var(--pure)",
      hoverImage: "/zwankee-brand-hover.png",
      brandLogo: "/ppiLogo.png",
      subheadiColor: "var(--pure)",
      contentColor: "var(--pure)",
    },
  ];
  return (
    <>
      <section className="homebrands__section">
        <div className="homebrands__top  page-width">
          <div className="flex homebrands__top_one justify-between items-center">
            {/* heading */}
            <h1>
              Our <span style={{ color: "var(--red)" }}>Brands</span>
            </h1>
            {/* carousel button */}
            <div className="bcarousel__button">
              <button
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slidePrev();
                }}
              >
                <CircleArrowPrevIcon />
              </button>
              <button
                className="ml-[2.5rem]"
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slideNext();
                }}
              >
                <CircleArrowNextIcon />
              </button>
            </div>
          </div>

          <p>
            Founded in 2015 with the launch of Cot and Candy,{" "}
            <span style={{ color: "var(--red)" }}>PACE</span> Ecommerce Ventures
            Ltd began its journey with a clear vision of creating impactful and
            meaningful brands.
          </p>
        </div>

        {/* carousel goes here*/}
        <div className="flex justify-end">
          <div
            className="brand_carousel"
            style={{
              marginTop: "5rem",
              marginLeft: "2rem",
              width: "134.2rem",
            }}
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // Store the Swiper instance in the ref
              }}
              className="mySwiper"
            >
              {data?.map((card, ind) => {
                return (
                  <>
                    <SwiperSlide
                      style={ind !== 0 ? { marginLeft: "2.5rem" } : {}}
                    >
                      <BrandCard
                        brand={card?.brand}
                        content={card?.content}
                        image={card?.image}
                        hoverColor={card?.hoverColor}
                        hoverImage={card?.hoverImage}
                        headingColor={card?.headingColor}
                        brandLogo={card?.brandLogo}
                        subheadiColor={card?.subheadiColor}
                        contentColor={card?.contentColor}
                      />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* carousel end here */}
      </section>
    </>
  );
}