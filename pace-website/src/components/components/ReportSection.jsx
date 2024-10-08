"use client";

import ReportrightArrow from "@/components/svgs/ReportrightArrow";
import { useEffect, useRef, useState } from "react";
import ReportRow from "./ReportRow";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CircleArrowPrevIcon from "@/components/svgs/CircleArrowPrevIcon";
import CircleArrowNextIcon from "@/components/svgs/CircleArrowNextIcon";
import YearBox from "./YearBox";
import { mainTabs, reportsData, years } from "@/json/reportsData";
import uniqid from "uniqid";
import ArrowRightIcon from "../svgs/arrowRightIcon";

export default function ReportSection() {
  const [currentTab, setCurrentTab] = useState("ANNOUNCEMENT");
  const [currentTabId, setCurrentTabId] = useState(1);
  const [currentSidebar, setCurrentSidebar] = useState(11);
  const [currentYear, setCurrentYear] = useState("2022-23");
  const swiperRef = useRef(null);
  const [accordians, setAccordians] = useState([]);
  const [currentScreen, setCurrentScreen] = useState(null);
  useEffect(() => {
    if (window.innerWidth) {
      setCurrentScreen(window?.innerWidth);
    }
  }, []);

  useEffect(() => {
    reportsData[0]?.sidebar?.forEach((elm) => {
      if (elm.key === 12) {
        elm?.data?.forEach((_, index) => {
          setAccordians((prevState) => ({ ...prevState, [index]: false }));
        });
      }
    });
  }, [reportsData]);

  useEffect(() => {
    // Set the default year when the component mounts
    if (reportsData && reportsData.length > 0) {
      const firstAvailableYear = reportsData[0].sidebar?.[0]?.years?.[0];
      if (firstAvailableYear) {
        setCurrentYear(firstAvailableYear);
      }
    }
  }, [currentSidebar]);

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
                    if (mainTab.id == 1) {
                      setCurrentSidebar(11);
                    } else if (mainTab.id == 3) {
                      setCurrentSidebar(21);
                    } else if (mainTab.id == 2) {
                      setCurrentSidebar(999);
                    }
                    if (mainTab.id == 4) {
                      setCurrentYear("2022-23");
                      setCurrentSidebar(1000);
                    } else {
                      setCurrentYear(null);
                    }
                  }}
                >
                  {mainTab?.name}
                </button>
              );
            })}
          </div>
          {currentTab === "SP" && (
            <div className="page-width yearboxex-section pt-[5rem] flex justify-between">
              {years?.map((year) => {
                if (year.direct && currentTab === "SP") {
                  return year?.years?.map((yr, yrInd) => {
                    return (
                      <YearBox
                        style={
                          yr == currentYear
                            ? {
                                background: "var(--pure)",
                                color: "var(--mode-bg)",
                              }
                            : {}
                        }
                        className={
                          yrInd != 0
                            ? "margin-yearbox-left"
                            : "margin-yearbox-left-none"
                        }
                        year={yr}
                        setCurrentYear={setCurrentYear}
                      />
                    );
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
                        style={
                          sidebar?.key == currentSidebar
                            ? {
                                background: "var(--pure)",
                                color: "var(--mode-bg)",
                              }
                            : {}
                        }
                        className=" side_tab"
                        onClick={() => {
                          setCurrentSidebar(sidebar?.key);
                          setCurrentYear(null);
                          if (sidebar.years != null) {
                            setCurrentYear(sidebar?.years[0]);
                          }
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
            {currentTabId !== 4 && currentTabId !== 2 && (
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
                  slidesPerView={currentScreen <= 500 ? 2 : 4}
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
                                  style={
                                    currentYear == year
                                      ? { color: "var(--pure)" }
                                      : {}
                                  }
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
                      return side?.data?.map((data, dataInd) => {
                        if (currentSidebar == side?.key && side?.key == 25) {
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
                        if (currentSidebar == side?.key && side?.key == 26) {
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
                        if (
                          currentSidebar == side?.key &&
                          side?.key != 12 &&
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
                        } else if (
                          currentSidebar == side?.key &&
                          side?.key == 12
                        ) {
                          return (
                            <div key={uniqid()}>
                              <section
                                id={`accordian__report_${dataInd}`}
                                className={
                                  accordians[dataInd]
                                    ? "accordian__report accordian__report--overright"
                                    : "accordian__report h-[8rem] accordian__report--mobile"
                                }
                                style={
                                  dataInd != 0 ? { marginTop: "2.5rem" } : {}
                                }
                                onClick={() => {
                                  if (!accordians[dataInd]) {
                                    setAccordians({
                                      [dataInd]: true,
                                    });
                                  } else {
                                    setAccordians({
                                      [dataInd]: false,
                                    });
                                  }

                                  console.log("accprdians", accordians);
                                }}
                              >
                                <div className="accordian__report__header flex justify-center">
                                  <div
                                    className="accrodian__name"
                                    style={{ width: "59.8rem" }}
                                  >
                                    {data?.innerTab}
                                  </div>

                                  <CircleArrowNextIcon
                                    width="50"
                                    height="50"
                                    isBorder={false}
                                    color="var(--red)"
                                    className="ml-[1.5rem]"
                                  />
                                </div>
                                <div className="accordian__report__body">
                                  {data?.innerData?.map((innerData) => {
                                    if (innerData.year == currentYear) {
                                      return (
                                        <ReportRow
                                          name={innerData?.title}
                                          url={innerData?.url}
                                          filename={innerData?.title}
                                          type={"sdsnajd"}
                                          style={
                                            currentTabId == 4 ||
                                            currentTabId == 2
                                              ? { width: "100%" }
                                              : {
                                                  width: "100%",
                                                  margin: "auto",
                                                }
                                          }
                                        />
                                      );
                                    }
                                    return <></>;
                                  })}
                                </div>
                              </section>
                            </div>
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
              {/* if tab 4 */}
              {currentTabId == 4 &&
                reportsData?.map((report) => {
                  if (currentTab == report?.uniq) {
                    return report?.sidebar[0]?.data?.map((side) => {
                      if (side?.year == currentYear) {
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
                      }
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
