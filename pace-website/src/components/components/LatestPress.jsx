"use client";

import CircleArrowNextIcon from "@/components/svgs/CircleArrowNextIcon";
import CircleArrowPrevIcon from "@/components/svgs/CircleArrowPrevIcon";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import Link from "next/link";
import EyeIcon from "@/components/svgs/EyeIcon";
import DownloadFile from "@/components/svgs/DownloadFile";
import DownloadIcon from "@/components/svgs/DownloadIcon";
import ArrowRightIcon from "../svgs/arrowRightIcon";
import { latestPress } from "@/json/latestPress";

export default function LatestPress() {
  const swiperRef = useRef(null);
  const [activeIcon, setActiveIcon] = useState({
    prev: "var(--iconColor)",
    next: "var(--iconColor)",
  });
  const [isBrandNextActive, setIsBrandNextActive] = useState(true);
  const [isBrandPrevActive, setIsBrandPrevActive] = useState(false);
  return (
    <>
      <section className="latestpress__wrapper">
        <div className="latestpress__carousel__top page-width flex justify-between items-center">
          <h1 className="latestpress__heading">Latest Press Releases</h1>
          <div className="latestpress__controls flex items-center">
            <button
              onClick={() => {
                setActiveIcon(() => {
                  return {
                    prev: "var(--pure)",
                    next: "var(--iconColor)",
                  };
                });
                if (swiperRef.current) swiperRef.current.slidePrev();
              }}
            >
              <CircleArrowPrevIcon
                color={isBrandPrevActive ? "var(--pure)" : "var(--iconColor)"}
              />
            </button>
            <button
              onClick={() => {
                setActiveIcon(() => {
                  return {
                    prev: "var(--iconColor)",
                    next: "var(--pure)",
                  };
                });
                if (swiperRef.current) swiperRef.current.slideNext();
              }}
            >
              <CircleArrowNextIcon
                color={isBrandNextActive ? "var(--pure)" : "var(--iconColor)"}
                style={{ marginLeft: "2.5rem" }}
              />
            </button>
            <Link href="#" className="our__brands_viewLink flex items-center">
              View all <ArrowRightIcon className="ml-[1.5rem]" />
            </Link>
          </div>
        </div>

        <div className="latestpress__carousel page-width flex justify-between items-center pt-[5rem]">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Store the Swiper instance in the ref
            }}
            onSlideChange={(e) => {
              if (e.activeIndex < 1) {
                setIsBrandNextActive(true);
              }
              if (e.activeIndex == 1) {
                setIsBrandNextActive(false);
              }
              if (e.activeIndex > 0) {
                setIsBrandPrevActive(true);
              }
              if (e.activeIndex == 0) {
                setIsBrandPrevActive(false);
              }
            }}
            className={
              latestPress?.length <= 2
                ? "mySwiper less_than__3_mySwiper"
                : "mySwiper"
            }
          >
            {latestPress?.map((pressData) => {
              return (
                <SwiperSlide
                  className={latestPress?.length <= 2 && "less_than__3_slide"}
                >
                  <div className="latestpress__card ">
                    <div className="latestcard__top">
                      <p className="latestcard__top_para">{pressData?.name}</p>
                      <p className="latestcard__top__time">{pressData?.time}</p>
                    </div>
                    <div className="latest_footer">
                      <Link href={pressData?.url} className="viewLatestFooter">
                        <p className="mr-[1.5rem] ">View Doc</p> <EyeIcon />
                      </Link>
                      <DownloadFile
                        url={pressData?.url}
                        fname="untitled"
                        content={
                          <div className="flex items-center">
                            <DownloadIcon color="var(--red)" />
                            <p className="viewdox__latestPress">Download</p>
                          </div>
                        }
                      ></DownloadFile>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
