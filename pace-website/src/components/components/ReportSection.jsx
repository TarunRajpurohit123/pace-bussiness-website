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
  const [currentTab, setCurrentTab] = useState("ANNOUNCEMENT");
  const [currentTabId, setCurrentTabId] = useState(1);
  const [currentSidebar, setCurrentSidebar] = useState(11);
  const [currentYear, setCurrentYear] = useState(null);
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
                    setCurrentSidebar(null);
                    setCurrentYear(null);
                  }}
                >
                  {mainTab?.name}
                </button>
              );
            })}
          </div>
          {currentTab === "SP" && (
            <div className="page-width pt-[5rem] flex justify-between">
              {years?.map((year) => {
                if (year.direct && currentTab === "SP") {
                  return year?.years?.map((yr) => {
                    return <YearBox year={yr} />;
                  });
                }
              })}
            </div>
          )}
        </div>
        <main className="report__main__section page-width flex justify-between">
          {/* sidebar */}
          {currentTabId != 4 && currentTabId != 2 && (
            <div className="report__sidebar">
              {reportsData?.map((data) => {
                if (currentTab == data?.uniq) {
                  return data?.sidebar?.map((sidebar) => {
                    return (
                      <button
                        className=" side_tab"
                        onClick={() => {
                          setCurrentSidebar(sidebar?.key);
                          setCurrentYear(null);
                        }}
                      >
                        {sidebar?.type}
                      </button>
                    );
                  });
                }
                return <></>;
              })}
            </div>
          )}

          {/* report lists */}
          <div
            className="report__list"
            style={
              currentTabId == 4 || currentTabId == 2 ? { width: "100%" } : {}
            }
          >
            {/* year tab goes here*/}
            {currentTabId !== 4 && (
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
                  className="year_report_swiper_2"
                  style={{ width: "100%" }}
                >
                  {reportsData?.map((data) => {
                    if (data.id != 2 && data.id != 4) {
                      return data?.sidebar.map((sidebarData) => {
                        if (
                          // sidebarData?.key != 12 &&
                          sidebarData?.key == currentSidebar
                        ) {
                          return sidebarData?.years?.map((year, index) => {
                            return (
                              <SwiperSlide>
                                <button
                                  className="year__tab"
                                  onClick={() => {
                                    setCurrentYear(year);
                                  }}
                                >
                                  {year}
                                </button>
                              </SwiperSlide>
                            );
                          });
                        }
                      });
                    }
                    return;
                  })}
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
            )}
            <div className="report__list_wrapper mt-[2.5rem]">
              {/* year tab end here*/}
              {currentTabId != 4 &&
                currentTabId != 2 &&
                reportsData?.map((report) => {
                  if (currentTab == report?.uniq) {
                    return report?.sidebar?.map((side) => {
                      return side?.data?.map((data) => {
                        if (
                          currentSidebar == side?.key &&
                          data?.year == currentYear
                        ) {
                          return (
                            <ReportRow
                              name={data?.title}
                              url={data?.url}
                              filename={data?.title}
                              type={"sdsnajd"}
                              style={
                                currentTabId == 4 || currentTabId == 2
                                  ? { width: "100%" }
                                  : {}
                              }
                            />
                          );
                        }
                      });
                    });
                  }
                })}
              {/* if tab 2 */}
              {currentTabId == 2 &&
                reportsData?.map((report) => {
                  if (currentTab == report?.uniq) {
                    return report?.sidebar?.map((side) => {
                      return (
                        <ReportRow
                          name={side?.title}
                          url={side?.url}
                          filename={side?.title}
                          type={"sdsnajd"}
                          style={
                            currentTabId == 4 || currentTabId == 2
                              ? { width: "100%" }
                              : {}
                          }
                        />
                      );
                    });
                  }
                })}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
