"use client";

import CircleArrowNextIcon from "@/components/svgs/CircleArrowNextIcon";
import CircleArrowPrevIcon from "@/components/svgs/CircleArrowPrevIcon";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BrandCard from "./BrandCard";
import Link from "next/link";
import ArrowRightIcon from "@/components/svgs/arrowRightIcon";
import uniqid from "uniqid";

export default function HomeBrands() {
  const [isBrandNextActive, setIsBrandNextActive] = useState(true);
  const [isBrandPrevActive, setIsBrandPrevActive] = useState(false);
  const swiperRef = useRef(null);
  const data = [
    {
      brand: "Zwankee",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/zwnakeeBrand.png",
      hoverColor: "var(--pure)",
      headingColor: "var(--mode-bg)",
      hoverImage: "/zhover.png",
      brandLogo: "/zwankeelogo.png",
      subheadiColor: "var(--mode-bg)",
    },
    {
      brand: "Ostilos",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ostilosBrand.png",
      hoverColor: "var(--ostilosCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/OstilosLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Wishrows",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/widhrowsBrand.jpeg",
      hoverColor: "var(--wishrowCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/WishroLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Pace Print Innovations",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ppiBrand.jpeg",
      hoverColor: "var(--ppiCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
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
      hoverImage: "/zhover.png",
      brandLogo: "/zwankeelogo.png",
      subheadiColor: "var(--mode-bg)",
    },
    {
      brand: "Ostilos",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ostilosBrand.png",
      hoverColor: "var(--ostilosCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/OstilosLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Wishrows",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/widhrowsBrand.jpeg",
      hoverColor: "var(--wishrowCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/WishroLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Pace Print Innovations",
      content:
        "Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod temporincididunt ut lare et dolore magna.",
      image: "/ppiBrand.jpeg",
      hoverColor: "var(--ppiCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/ppiLogo.png",
      subheadiColor: "var(--pure)",
      contentColor: "var(--pure)",
    },
  ];
  return (
    <>
      <section className="homebrands__section pt-[7.5rem] pb-[7.5rem]">
        <div className="homebrands__top  page-width">
          <div className="flex homebrands__top_one justify-between items-center">
            {/* heading */}
            <h1>
              Our <span style={{ color: "var(--pure)" }}>Brands</span>
            </h1>
            {/* carousel button */}
            <div className="bcarousel__button flex items-center">
              <button
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slidePrev();
                }}
              >
                <CircleArrowPrevIcon
                  color={isBrandPrevActive ? "var(--pure)" : "var(--iconColor)"}
                />
              </button>
              <button
                className="ml-[2.5rem] mr-[2.5rem]"
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slideNext();
                }}
              >
                <CircleArrowNextIcon
                  color={isBrandNextActive ? "var(--pure)" : "var(--iconColor)"}
                />
              </button>
              <Link href="#" className="our__brands_viewLink flex items-center">
                View all <ArrowRightIcon className="ml-[1.5rem]" />
              </Link>
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
        <div
          className="flex justify-end page-width overflow-hidden"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div
            className="brand_carousel"
            style={{
              marginTop: "5rem",
              width: "100%",
            }}
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
              }}
              // loop={true}
              onSlideChange={(e) => {
                if (e.activeIndex < 4) {
                  setIsBrandNextActive(true);
                }
                if (e.activeIndex == 4) {
                  setIsBrandNextActive(false);
                }
                if (e.activeIndex > 0) {
                  setIsBrandPrevActive(true);
                }
                if (e.activeIndex == 0) {
                  setIsBrandPrevActive(false);
                }
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // Store the Swiper instance in the ref
              }}
              // modules={[Autoplay]}
              className="mySwiper"
            >
              {data?.map((card, ind) => {
                return (
                  <SwiperSlide
                    key={uniqid()}
                    style={ind != 0 ? { marginLeft: "4.7rem" } : {}}
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
