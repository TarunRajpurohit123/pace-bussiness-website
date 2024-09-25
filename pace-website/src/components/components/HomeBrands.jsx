"use client";

import CircleArrowNextIcon from "@/components/svgs/CircleArrowNextIcon";
import CircleArrowPrevIcon from "@/components/svgs/CircleArrowPrevIcon";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BrandCard from "./BrandCard";
import Link from "next/link";
import ArrowRightIcon from "@/components/svgs/arrowRightIcon";
import uniqid from "uniqid";

export default function HomeBrands() {
  const [currentScreen, setCurrentScreen] = useState(null);
  useEffect(() => {
    if (window.innerWidth) {
      setCurrentScreen(window?.innerWidth);
    }
  }, []);
  const [isBrandNextActive, setIsBrandNextActive] = useState(true);
  const [isBrandPrevActive, setIsBrandPrevActive] = useState(false);
  const swiperRef = useRef(null);
  const data = [
    {
      brand: "Cot & Candy",
      content: "Crafting imaginative worlds for kids with style and comfort.",
      image: "/main/cotncandyimage.png",
      hoverColor: "var(--cncCardHover)",
      headingColor: "var(--mode-bg)",
      hoverImage: "/brandhover.png",
      brandLogo: "/main/cnclogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Homepost",
      content:
        "Designing modern living spaces with elegance and functionality.",
      image: "/main/homepostimage.png",
      hoverColor: "var(--pure)",
      headingColor: "var(--mode-bg)",
      hoverImage: "/zhover.png",
      brandLogo: "/main/homepostlogo.png",
      subheadiColor: "var(--mode-bg)",
    },
    {
      brand: "Ostilos",
      content: "Where bold fashion meets artisanal craftsmanship.",
      image: "/main/ostilosimage.png",
      hoverColor: "var(--ostilosCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/OstilosLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Zwankee",
      content: "Bridging global fashion with local markets.",
      image: "/main/zwnakeeimage.png",
      hoverColor: "var(--pure-white)",
      headingColor: "var(--mode-bg)",
      hoverImage: "/zhover.png",
      brandLogo: "/zwankeelogo.png",
      subheadiColor: "var(--mode-bg)",
    },
    {
      brand: "Wishrows",
      content: "Customizing your world, one product at a time.",
      image: "/main/wishrowimage.png",
      hoverColor: "var(--wishrowCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/WishroLogo.png",
      subheadiColor: "var(--pure)",
    },
    {
      brand: "Zwankee Global",
      content: "Elevating wholesale fashion with global collaborations.",
      image: "/main/zwankeeglobal.png",
      hoverColor: "var(--pure-white)",
      headingColor: "var(--mode-bg)",
      hoverImage: "/zhover.png",
      brandLogo: "/main/zglogo.png",
      subheadiColor: "var(--mode-bg)",
    },
    {
      brand: "Pace Print Innovations",
      content: "Redefining printing excellence with precision and creativity.",
      image: "/main/ppimage.png",
      hoverColor: "var(--ppiCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/ppiLogo.png",
      subheadiColor: "var(--pure)",
      contentColor: "var(--pure)",
    },
    {
      brand: "Cot & Candy",
      content: "Crafting imaginative worlds for kids with style and comfort.",
      image: "/main/cotncandyimage.png",
      hoverColor: "var(--cncCardHover)",
      headingColor: "var(--pure)",
      hoverImage: "/brandhover.png",
      brandLogo: "/OstilosLogo.png",
      subheadiColor: "var(--pure)",
    },
  ];
  return (
    <>
      <section className="homebrands__section pt-[7.5rem] pb-[7.5rem]">
        <div className="homebrands__top  page-width">
          <div className="flex homebrands__top_one justify-between items-center">
            {/* heading */}
            <h1 className="homebrands__top_one__heading">
              Our Brands
              {/* <span style={{ color: "var(--pure)" }}>Brands</span> */}
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
                className="ml-[2.5rem] brand_right_button_arrow"
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slideNext();
                }}
              >
                <CircleArrowNextIcon
                  color={isBrandNextActive ? "var(--pure)" : "var(--iconColor)"}
                />
              </button>
              <Link
                href="/brand"
                className="our__brands_viewLink flex items-center"
              >
                View all <ArrowRightIcon className="ml-[1.5rem]" />
              </Link>
            </div>
          </div>

          {/* <p>
            Founded in 2015 with the launch of Cot and Candy,{" "}
            <span style={{ color: "var(--red)" }}>PACE</span> Ecommerce Ventures
            Ltd began its journey with a clear vision of creating impactful and
            meaningful brands.
          </p> */}
        </div>

        {/* carousel goes here*/}
        <div
          className="flex justify-end page-width overflow-hidden brand_carousel_main_section"
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
              slidesPerView={currentScreen <= 1000 ? 1 : 4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
              }}
              // loop={true}
              onSlideChange={(e) => {
                if (currentScreen > 1000) {
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
                } else {
                  if (e.activeIndex < 7) {
                    setIsBrandNextActive(true);
                  }
                  if (e.activeIndex == 7) {
                    setIsBrandNextActive(false);
                  }
                  if (e.activeIndex > 0) {
                    setIsBrandPrevActive(true);
                  }
                  if (e.activeIndex == 0) {
                    setIsBrandPrevActive(false);
                  }
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
                    className="brand_swiper_slide"
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
