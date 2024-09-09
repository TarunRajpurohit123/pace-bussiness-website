"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import uniqid from "uniqid";

export default function HomeHighlightCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      key: uniqid(),
      content: (
        <Image
          src="https://picsum.photos/620/320/?random"
          width={620}
          height={320}
          alt="image"
          style={{ borderRadius: "2.4rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src="https://picsum.photos/620/320/?random"
          width={620}
          height={320}
          alt="image"
          style={{ borderRadius: "2.4rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src="https://picsum.photos/620/320/?random"
          width={620}
          alt="image"
          height={320}
          style={{ borderRadius: "2.4rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src="https://picsum.photos/620/320/?random"
          width={620}
          height={320}
          alt="image"
          style={{ borderRadius: "2.4rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src="https://picsum.photos/620/320/?random"
          width={620}
          alt="image"
          height={320}
          style={{ borderRadius: "2.4rem" }}
        />
      ),
    },
    {
      key: uniqid(),
      content: (
        <Image
          src="https://picsum.photos/620/320/?random"
          width={620}
          alt="image"
          height={320}
          style={{ borderRadius: "2.4rem" }}
        />
      ),
    },
  ];

  return (
    <div className="my-[7.5rem]">
      <section className="home__high__carousel">
        <div className="highlightC__inner page-width">
          <h1>Highlights of the Year</h1>
        </div>
      </section>
      <div
        className="page-width hhcwrapper pt-[5rem]"
        style={{
          height: "300px",
          margin: "auto",
          position: "relative",
        }}
      >
        {/* 3d carousel start */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
        >
          {slides?.map((singleSlide) => {
            return (
              <SwiperSlide
                key={singleSlide?.key}
                style={{ width: "fit-content" }}
              >
                {singleSlide?.content}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 3d carousel end */}
      </div>
      <div
        className="flex items-center justify-center"
        style={{ textAlign: "center", marginTop: "2.4rem" }}
      >
        sjdsjd
      </div>
    </div>
  );
}
