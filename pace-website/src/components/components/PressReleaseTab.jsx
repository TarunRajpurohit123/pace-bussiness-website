"use client";

import { useState } from "react";
import DownloadFile from "../svgs/DownloadFile";
import DownloadIcon from "../svgs/DownloadIcon";
import Link from "next/link";
import EyeIcon from "../svgs/EyeIcon";
import CircleArrowPrevIcon from "../svgs/CircleArrowPrevIcon";
import CircleArrowNextIcon from "../svgs/CircleArrowNextIcon";

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
          <button
            style={currentTab === 2 ? { color: "var(--red)" } : {}}
            className="report_tab_btn"
            onClick={() => {
              setCurrentTab(2);
            }}
          >
            2023-24
          </button>
          <button
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
          </button>
        </div>
        <div className="filtering__press_section flex justify-between page-width">
          <div className="filter_text">115 results</div>
          <button>Most Recent</button>
        </div>
        <main className="press__latest_release--main page-width">
          <div className="latestpress__card latestpress__card--full">
            <div className="latestcard__top">
              <p className="latestcard__top_para">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="latestcard__top_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="latestcard__top__time latestcard__top__time--full">
                30 Aug 2024
              </p>
            </div>
            <div className="latest_footer latest_footer--full">
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
          <div className="latestpress__card latestpress__card--full mt-[2.5rem]">
            <div className="latestcard__top">
              <p className="latestcard__top_para">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="latestcard__top_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="latestcard__top__time latestcard__top__time--full">
                30 Aug 2024
              </p>
            </div>
            <div className="latest_footer latest_footer--full">
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
        </main>
        <div className="press__latest__paginationWarpper flex justify-between items-center page-width pt-[2.5rem]">
          <div className="pagination__detail">Showing 2 of 10 Pages</div>
          <div className="pagination flex">
            <button className="prevpagination">
              <CircleArrowPrevIcon isBorder={false} />
            </button>
            <div className="pnumbers flex">
              <button>01</button>
              <button className="act__paginate_number">02</button>
              <button>03</button>
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
