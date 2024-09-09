"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function HomeHighlightCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      key: 1,
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
      key: 2,
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
      key: 3,
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
      key: 4,
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
      key: 5,
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
      key: 6,
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
          {/* <p>
            {" "}
            {index == 0
              ? "OSTILOS Media reach"
              : index == 1
              ? "Launched WISHROWS"
              : index == 2
              ? "Entering into the world of B2B - Pace print innovation and Zwankee Global"
              : index == 3
              ? "Offline Presence - Zwankee exhibition"
              : ""}
          </p> */}
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
          slidesPerView={3}
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
              <SwiperSlide style={{ width: "fit-content" }}>
                {singleSlide?.content}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 3d carousel end */}
      </div>
      {/* <div
        className="flex items-center justify-center"
        style={{ textAlign: "center", marginTop: "2.4rem" }}
      >
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          className={"mr-[1.5rem]"}
        >
          <ArrowLeft />
        </button>
        <div className="flex items-center">
          {slides?.map((slide, ind) => {
            if (index == ind) {
              return (
                <DotIcon
                  className={"mr-[0.4rem] scale-150"}
                  color="var(--red)"
                  key={uniqid("doticon")}
                />
              );
            } else {
              return (
                <DotIcon
                  className={"mr-[0.4rem] scale-100"}
                  key={uniqid("doticon")}
                />
              );
            }
          })}
        </div>
        <button
          id="3dNext"
          className={"ml-[1.1rem]"}
          onClick={() => setIndex((index + 1) % slides.length)}
        >
          <ArrowRight />
        </button>
      </div> */}
    </div>
  );
}
