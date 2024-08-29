"use client";

import ReportrightArrow from "@/components/svgs/ReportrightArrow";
import { useState } from "react";
import ReportRow from "./ReportRow";

export default function ReportSection() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <section className="report__wrapper">
        <div className="report__section__top">
          <h1 className="report__section__heading">Financial Reports</h1>
          <div className="report__tab__header page-width">
            <button
              style={currentTab === 1 ? { color: "var(--red)" } : {}}
              className="report_tab_btn"
              onClick={() => {
                setCurrentTab(1);
              }}
            >
              Reports & Presentations
            </button>
            <button
              style={currentTab === 2 ? { color: "var(--red)" } : {}}
              className="report_tab_btn"
              onClick={() => {
                setCurrentTab(2);
              }}
            >
              Initial Public Offering
            </button>
            <button
              style={currentTab === 3 ? { color: "var(--red)" } : {}}
              className="report_tab_btn"
              onClick={() => {
                setCurrentTab(3);
              }}
            >
              Corporate Announcement
            </button>
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
            <ReportRow
              name={"demo file"}
              url={"/01.png"}
              filename={"image"}
              type={"sdsnajd"}
            />
          </div>
        </main>
      </section>
    </>
  );
}
