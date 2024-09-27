"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import uniqid from "uniqid";
import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";

export default function HomeHighlightCarousel() {
  const [swiper, setSwiper] = useState();
  const swiperRef = useRef(null);
  const [currentScreen, setCurrentScreen] = useState(null);
  useEffect(() => {
    if (window.innerWidth) {
      setCurrentScreen(window?.innerWidth);
    }
  }, []);
  const slides = [
    {
      key: uniqid(),
      content: (
        <Image
          src={currentScreen <= 500 ? "" : "/main/ostilos_highlight_01.png"}
          width={780}
          height={400}
          alt="image"
          style={{ borderRadius: "2.4rem", width: "78rem", height: "40rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src={currentScreen <= 500 ? "" : "/main/wishrow_highlight_02.png"}
          width={780}
          height={400}
          alt="image"
          style={{ borderRadius: "2.4rem", width: "78rem", height: "40rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src={currentScreen <= 500 ? "" : "/main/zg_highlight_03.png"}
          width={780}
          alt="image"
          height={400}
          style={{ borderRadius: "2.4rem", width: "78rem", height: "40rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src={currentScreen <= 500 ? "" : "/main/zwankee_highlight_04.png"}
          width={780}
          height={400}
          alt="image"
          style={{ borderRadius: "2.4rem", width: "78rem", height: "40rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src={currentScreen <= 500 ? "" : "/main/ostilos_highlight_05.png"}
          width={780}
          alt="image"
          height={400}
          style={{ borderRadius: "2.4rem", width: "78rem", height: "40rem" }}
        />
      ),
    },
  ];

  return (
    <div className="my-[7.5rem] home__high__carousel_outer">
      <section className="home__high__carousel">
        <div className="highlightC__inner page-width">
          <h1>Highlights of the Year</h1>
        </div>
      </section>
      <div
        className="page-width hhcwrapper pt-[5rem]"
        style={{
          // height: "300px",
          margin: "auto",
          position: "relative",
        }}
      >
        {/* 3d carousel start */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={currentScreen <= 500 ? 2 : "auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={true}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store the Swiper instance in the ref
          }}
        >
          {slides?.map((singleSlide) => {
            return (
              <SwiperSlide
                key={singleSlide?.key}
                style={
                  currentScreen <= 500
                    ? { width: "fit-content", height: "15rem" }
                    : { width: "fit-content" }
                }
              >
                {singleSlide?.content}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 3d carousel end */}
      </div>
      <div
        className="flex justify-center"
        style={{ textAlign: "center", marginTop: "2.4rem" }}
      >
        <button
          onClick={() => {
            if (swiperRef.current) swiperRef.current.slidePrev();
          }}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => {
            if (swiperRef.current) swiperRef.current.slideNext();
          }}
          className="ml-[1.5rem]"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
