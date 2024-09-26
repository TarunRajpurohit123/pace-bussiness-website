"use client";

import { useState } from "react";
import DownloadFile from "../svgs/DownloadFile";
import DownloadIcon from "../svgs/DownloadIcon";
import Link from "next/link";
import EyeIcon from "../svgs/EyeIcon";
import CircleArrowPrevIcon from "../svgs/CircleArrowPrevIcon";
import CircleArrowNextIcon from "../svgs/CircleArrowNextIcon";
import { latestPress } from "@/json/latestPress";

export default function PressReleaseTab() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <section className="press_release_tab">
        <h1>Year Wise Press Releases</h1>
        <div className="report__tab__header page-width">
          <button
            style={currentTab === 1 ? { color: "var(--red)" } : {}}
            className="report_tab_btn"
            onClick={() => {
              setCurrentTab(1);
            }}
          >
            2024-25
          </button>
          {/* <button
            style={currentTab === 2 ? { color: "var(--red)" } : {}}
            className="report_tab_btn"
            onClick={() => {
              setCurrentTab(2);
            }}
          >
            2023-24
          </button> */}
          {/* <button
            style={currentTab === 3 ? { color: "var(--red)" } : {}}
            className="report_tab_btn"
            onClick={() => {
              setCurrentTab(3);
            }}
          >
            2022-23
          </button>
          <button
            style={currentTab === 4 ? { color: "var(--red)" } : {}}
            className="report_tab_btn"
            onClick={() => {
              setCurrentTab(4);
            }}
          >
            2021-22
          </button>
          <button
            style={currentTab === 5 ? { color: "var(--red)" } : {}}
            className="report_tab_btn"
            onClick={() => {
              setCurrentTab(5);
            }}
          >
            2020-21
          </button> */}
        </div>
        <div className="filtering__press_section flex justify-between page-width">
          <div className="filter_text">2 results</div>
          <button>Most Recent</button>
        </div>
        <main className="press__latest_release--main page-width">
          {latestPress?.map((lp, ind) => {
            return (
              <>
                <div
                  className={
                    ind != 0
                      ? "latestpress__card latestpress__card--full mt-[2.5rem]"
                      : "latestpress__card latestpress__card--full"
                  }
                >
                  <div className="latestcard__top">
                    <p className="latestcard__top_para">{lp?.name}</p>
                    <p className="latestcard__top_text">{lp?.data}</p>
                    <p className="latestcard__top__time latestcard__top__time--full">
                      {lp?.time}
                    </p>
                  </div>
                  <div className="latest_footer latest_footer--full">
                    <Link href={lp?.url} className="viewLatestFooter">
                      <p className="mr-[1.5rem] ">View Doc</p> <EyeIcon />
                    </Link>
                    <DownloadFile
                      url={lp?.url}
                      fname={lp?.name}
                      content={
                        <div className="flex items-center">
                          <DownloadIcon color="var(--red)" />
                          <p className="viewdox__latestPress">Download</p>
                        </div>
                      }
                    ></DownloadFile>
                  </div>
                </div>
              </>
            );
          })}
        </main>
        <div className="press__latest__paginationWarpper flex justify-between items-center page-width pt-[2.5rem]">
          <div className="pagination__detail">Showing 1 of 1 Pages</div>
          <div className="pagination flex">
            <button className="prevpagination">
              <CircleArrowPrevIcon isBorder={false} />
            </button>
            <div className="pnumbers flex">
              <button className="act__paginate_number">01</button>
              {/* <button className="act__paginate_number">02</button>
              <button>03</button> */}
            </div>
            <button>
              <CircleArrowNextIcon isBorder={false} color="var(--pure)" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
