"use client";

import ReportrightArrow from "@/components/svgs/ReportrightArrow";
import { useRef, useState } from "react";
import ReportRow from "./ReportRow";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CircleArrowPrevIcon from "@/components/svgs/CircleArrowPrevIcon";
import CircleArrowNextIcon from "@/components/svgs/CircleArrowNextIcon";
import YearBox from "./YearBox";
import { mainTabs, reportsData, years } from "@/json/reportsData";
import uniqid from "uniqid";

export default function ReportSection() {
  const [currentTab, setCurrentTab] = useState("");
  const [currentTabId, setCurrentTabId] = useState(1);
  const swiperRef = useRef(null);
  return (
    <>
      <section className="report__wrapper">
        <div className="report__section__top">
          <h1 className="report__section__heading">Financial Reports</h1>
          <div className="report__tab__header page-width">
            {mainTabs?.map((mainTab) => {
              return (
                <button
                  key={uniqid(mainTab?.key)}
                  style={
                    currentTab === mainTab?.key ? { color: "var(--red)" } : {}
                  }
                  className="report_tab_btn"
                  onClick={() => {
                    setCurrentTab(mainTab?.key);
                    setCurrentTabId(mainTab?.id);
                  }}
                >
                  {mainTab?.name}
                </button>
              );
            })}
          </div>
          <div className="page-width pt-[5rem] flex justify-between">
            {years?.map((year) => {
              if (year.direct && currentTab === "SP") {
                return year.years.map((yr) => {
                  return <YearBox year={yr} />;
                });
              }
            })}
          </div>
        </div>
        <main className="report__main__section page-width flex justify-between">
          {/* sidebar */}
          <div className="report__sidebar">
            <button className="active_side_tab flex justify-between items-center side_tab">
              General Meeting <ReportrightArrow />
            </button>
            <button className=" side_tab">Policies</button>
            <button className=" side_tab">Investor Updates</button>
            <button className=" side_tab">Financial Results</button>
            <button className=" side_tab">Board Meetings</button>
            <button className=" side_tab">Annual Reports and Returns</button>
          </div>
          {/* report lists */}
          <div className="report__list">
            {/* year tab goes here*/}
            <div className="flex items-center justify-between">
              {5 > 4 && (
                <button
                  className="mr-[2.5rem]"
                  onClick={() => {
                    if (swiperRef.current) swiperRef.current.slidePrev();
                  }}
                >
                  <CircleArrowPrevIcon isBorder={false} color="var(--pure)" />
                </button>
              )}

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
                <SwiperSlide>
                  <button className="year__tab">2024-25</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className="year__tab year__tab_act">2023-24</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className="year__tab">2023-24</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className="year__tab">2023-24</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className="year__tab">2024-25</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className="year__tab year__tab_act">2023-24</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className="year__tab">2023-24</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className="year__tab">2023-24</button>
                </SwiperSlide>
              </Swiper>
              {5 > 4 && (
                <button
                  className=""
                  onClick={() => {
                    if (swiperRef.current) swiperRef.current.slideNext();
                  }}
                >
                  <CircleArrowNextIcon isBorder={false} color="var(--pure)" />
                </button>
              )}
            </div>
            <div className="report__list_wrapper mt-[2.5rem]">
              {/* year tab end here*/}
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
              <ReportRow
                name={"demo file"}
                url={"/01.png"}
                filename={"image"}
                type={"sdsnajd"}
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
