"use client"; // Add this line if you are using Next.js 13+ with App Router

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Install required Swiper modules

export default function Zigzag({ styles = null }) {
  const [currentScreen, setCurrentScreen] = useState(null);
  useEffect(() => {
    if (window.innerWidth) {
      setCurrentScreen(window?.innerWidth);
    }
  }, []);
  const images = [
    "/main/zigzag/1.png",
    "/main/zigzag/2.png",
    "/main/zigzag/3.png",
    "/main/zigzag/4.png",
    "/main/zigzag/5.png",
    "/main/zigzag/6.png",
    "/main/zigzag/7.png",
    "/main/zigzag/8.png",
    "/main/zigzag/9.png",
    "/main/zigzag/10.png",
    "/main/zigzag/11.png",
    "/main/zigzag/12.png",
    "/main/zigzag/13.png",
    "/main/zigzag/14.png",
    "/main/zigzag/15.png",
    "/main/zigzag/16.png",
    "/main/zigzag/17.png",
    "/main/zigzag/18.png",
    "/main/zigzag/19.png",
    "/main/zigzag/20.png",
    "/main/zigzag/21.png",
    "/main/zigzag/22.png",
    "/main/zigzag/23.png",
    "/main/zigzag/24.png",
    "/main/zigzag/25.png",
    "/main/zigzag/26.png",
    "/main/zigzag/27.png",
    "/main/zigzag/28.png",
    "/main/zigzag/29.png",
    "/main/zigzag/30.png",
    "/main/zigzag/31.png",
    "/main/zigzag/32.png",
    "/main/zigzag/33.png",
    "/main/zigzag/34.png",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div
      className={`relative zigzag__card flex flex-col items-center p-8 gap-10 h-full overflow-hidden`}
      style={styles}
    >
      <div className="flex flex-row -ml-20 w-full">
        <Swiper
          slidesPerView={5}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: false, // Keeps autoplay even if user interacts
          }}
          speed={4000}
          modules={[Autoplay]}
          className="marqueeSwiper"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                key={`images-first-${idx}`}
                variants={imageVariants}
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover="whileHover"
                whileTap="whileTap"
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="Image"
                  width={288}
                  height={288}
                  className="rounded-lg zinzag-image object-cover flex-shrink-0"
                  style={{ width: "28.8rem", height: "28.8rem" }}
                  priority
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
