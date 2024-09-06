"use client";

// components/Carousel3D.js
import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Image from "next/image";
import ArrowLeft from "@/components/svgs/ArrowLeft";
import ArrowRight from "@/components/svgs/ArrowRight";
import DotIcon from "@/components/svgs/dotIcon";
import uniqid from "uniqid";

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
  ];

  useEffect(() => {
    // Set up an interval to update the state every second (1000 milliseconds)
    const interval = setInterval(() => {
      const ThreeNext = document.getElementById("3dNext");
      if (ThreeNext) {
        ThreeNext?.click();
      }
    }, 4000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-[7.5rem]">
      <section className="home__high__carousel">
        <div className="highlightC__inner page-width">
          <h1>Highlights of the Year</h1>
          <p>
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
          </p>
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
        <Carousel
          slides={slides}
          goToSlide={index}
          offsetRadius={2}
          // showNavigation={true}
          animationConfig={config.gentle}
        />
      </div>
      <div
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
      </div>
    </div>
  );
}
