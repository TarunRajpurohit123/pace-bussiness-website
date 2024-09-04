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

export default function LatestPress() {
  const swiperRef = useRef(null);
  const [activeIcon, setActiveIcon] = useState({
    prev: "var(--iconColor)",
    next: "var(--iconColor)",
  });
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
              <CircleArrowPrevIcon color={activeIcon?.prev} />
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
                color={activeIcon?.next}
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
            slidesPerView={3}
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
            <SwiperSlide>
              <div className="latestpress__card">
                <div className="latestcard__top">
                  <p className="latestcard__top_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                  <p className="latestcard__top__time">30 Aug 2024</p>
                </div>
                <div className="latest_footer">
                  <Link href="#" className="viewLatestFooter">
                    <p className="mr-[1.5rem] ">View Doc</p> <EyeIcon />
                  </Link>
                  <DownloadFile
                    url="#"
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
            <SwiperSlide>
              <div className="latestpress__card">
                <div className="latestcard__top">
                  <p className="latestcard__top_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                  <p className="latestcard__top__time">30 Aug 2024</p>
                </div>
                <div className="latest_footer">
                  <Link href="#" className="viewLatestFooter">
                    <p className="mr-[1.5rem] ">View Doc</p> <EyeIcon />
                  </Link>
                  <DownloadFile
                    url="#"
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
            <SwiperSlide>
              <div className="latestpress__card">
                <div className="latestcard__top">
                  <p className="latestcard__top_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                  <p className="latestcard__top__time">30 Aug 2024</p>
                </div>
                <div className="latest_footer">
                  <Link href="#" className="viewLatestFooter">
                    <p className="mr-[1.5rem] ">View Doc</p> <EyeIcon />
                  </Link>
                  <DownloadFile
                    url="#"
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
            <SwiperSlide>
              <div className="latestpress__card">
                <div className="latestcard__top">
                  <p className="latestcard__top_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                  <p className="latestcard__top__time">30 Aug 2024</p>
                </div>
                <div className="latest_footer">
                  <Link href="#" className="viewLatestFooter">
                    <p className="mr-[1.5rem] ">View Doc</p> <EyeIcon />
                  </Link>
                  <DownloadFile
                    url="#"
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
          </Swiper>
        </div>
      </section>
    </>
  );
}
