"use client";

import { useState } from "react";
import Link from "next/link";
import investorData from "@/json/investorRelationsData.json";
import EyeIcon from "@/components/svgs/EyeIcon";
import DownloadIcon from "@/components/svgs/DownloadIcon";

const YEARS = ["FY 2025-26", "FY 2024-25", "FY 2023-24", "FY 2022-23"];

export default function FinancialReportsNew() {
  const [selectedYear, setSelectedYear] = useState("FY 2025-26");
  const [selectedCategory, setSelectedCategory] = useState("Announcement Under Regulation 30");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Company Policies");
  const [expandedAccordions, setExpandedAccordions] = useState({
    "Announcement Under Regulation 30": true,
  });

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat.category);
    if (cat.hasSubcategories && cat.subcategories.length > 0) {
      setExpandedAccordions((prev) => ({
        ...prev,
        [cat.category]: !prev[cat.category],
      }));
      const isCurrentSubInCat = cat.subcategories.some(
        (s) => s.name === selectedSubcategory
      );
      if (!isCurrentSubInCat) {
        setSelectedSubcategory(cat.subcategories[0].name);
      }
    } else {
      setSelectedSubcategory(null);
    }
  };

  const handleSubcategoryClick = (catName, subName) => {
    setSelectedCategory(catName);
    setSelectedSubcategory(subName);
  };

  // Get active files based on selected category & subcategory
  const activeCategory = investorData.find((c) => c.category === selectedCategory);
  let filesToDisplay = [];

  if (activeCategory) {
    if (activeCategory.hasSubcategories && selectedSubcategory) {
      const sub = activeCategory.subcategories.find(
        (s) => s.name === selectedSubcategory
      );
      if (sub && sub.files) {
        filesToDisplay = sub.files;
      }
    } else if (activeCategory.files) {
      filesToDisplay = activeCategory.files;
    }
  }

  // Find all unique available years for current category / subcategory
  const availableYearsForSelection = YEARS.filter((yr) =>
    filesToDisplay.some((f) => f.year === yr)
  );

  // Auto-switch selectedYear if current selectedYear is not available in current category
  const activeYear =
    availableYearsForSelection.length > 0
      ? availableYearsForSelection.includes(selectedYear)
        ? selectedYear
        : availableYearsForSelection[0]
      : null;

  // Filter files based on active year if year filtering applies
  const filteredFiles =
    availableYearsForSelection.length > 0
      ? filesToDisplay.filter((f) => f.year === activeYear)
      : filesToDisplay;

  const triggerDownload = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="bg-[#171717] page-width text-white py-16 px-6 md:px-16 lg:px-24 font-sans min-h-[850px]">
      <div className="max-w-[1360px] mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs md:text-sm tracking-wider uppercase text-[#8E8E93] font-mono block mb-2 current_year_enabled">
              {activeYear ? `${activeYear.replace(/\s+/g, "")} Reports` : "Reports"}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white font-normal leading-tight irs-heading--main">
              Financial Reports
            </h1>
          </div>
          <div className="max-w-[340px] md:text-right">
            <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed font-light">
              Everything SEBI requires us to publish — organised so you can actually find what you need.
            </p>
          </div>
        </div>

        {/* Year Selector Bar - Only rendered if available years exist for selected section */}
        {availableYearsForSelection.length > 0 && (
          <div className="border-t border-b border-[#2C2C2E] my-8">
            <div
              className={`grid divide-x divide-[#2C2C2E]`}
              style={{
                gridTemplateColumns: `repeat(${availableYearsForSelection.length}, minmax(0, 1fr))`,
              }}
            >
              {availableYearsForSelection.map((year) => {
                const isSelected = activeYear === year;
                return (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`py-5 text-center text-sm md:text-base transition-colors ${isSelected
                      ? "text-white font-medium"
                      : "text-[#8E8E93] hover:text-white font-normal"
                      }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </div>
        )}


        {/* Two Column Layout: Sidebar + Document List */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-10">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[340px] shrink-0">
            <div className="flex flex-col divide-y divide-[#2C2C2E]">
              {investorData.map((cat) => {
                const isCatSelected = selectedCategory === cat.category;
                const isExpanded = !!expandedAccordions[cat.category];

                return (
                  <div key={cat.id} className="py-5 first:pt-0">
                    <div
                      onClick={() => handleCategoryClick(cat)}
                      className="flex items-center justify-between cursor-pointer group py-1"
                    >
                      <span
                        className={`text-base md:text-lg transition-colors ${isCatSelected && !cat.hasSubcategories
                          ? "text-white font-medium"
                          : "text-[#C7C7CC] group-hover:text-white"
                          }`}
                      >
                        {cat.category}
                      </span>
                      {cat.hasSubcategories && (
                        <span className="text-[#8E8E93] group-hover:text-white transition-transform duration-200">
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                              }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      )}
                    </div>

                    {/* Subcategories Accordion */}
                    {cat.hasSubcategories && isExpanded && (
                      <div className="pl-4 mt-3 flex flex-col gap-3">
                        {cat.subcategories.map((sub) => {
                          const isSubSelected =
                            selectedCategory === cat.category &&
                            selectedSubcategory === sub.name;
                          return (
                            <button
                              key={sub.name}
                              onClick={() =>
                                handleSubcategoryClick(cat.category, sub.name)
                              }
                              className={`text-left text-sm transition-colors py-1 ${isSubSelected
                                ? "text-white font-medium"
                                : "text-[#8E8E93] hover:text-[#C7C7CC]"
                                }`}
                            >
                              {sub.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Document List */}
          <div className="flex-1 min-h-[450px]">
            {filteredFiles.length > 0 ? (
              <div className="flex flex-col">
                {filteredFiles.map((file, idx) => (
                  <div
                    key={`${file.filename}-${idx}`}
                    className="flex items-center justify-between py-4 hover:bg-[#1C1C1E]/40 transition-colors px-3 rounded-lg group"
                  >
                    <p className="text-sm md:text-base font-normal text-[#E5E5EA] group-hover:text-white pr-4 leading-normal">
                      {file.title}
                    </p>
                    <div className="flex items-center gap-8 shrink-0">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={file.url}
                        className="flex items-center gap-2 text-[#8E8E93] hover:text-white text-xs md:text-sm transition-colors"
                      >
                        <EyeIcon color="currentColor" extcls="w-4 h-4" />
                        <span>View</span>
                      </Link>
                      <button
                        onClick={() => triggerDownload(file.url, file.filename)}
                        className="flex items-center gap-2 text-[#8E8E93] hover:text-white text-xs md:text-sm transition-colors"
                      >
                        <DownloadIcon color="currentColor" extcls="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-[#1C1C1E]/30 rounded-2xl p-8 border border-[#2C2C2E]">
                <p className="text-[#C7C7CC] text-base mb-4">
                  No documents found for{" "}
                  {activeYear && <span className="text-white font-medium">{activeYear} </span>}
                  under <span className="text-white font-medium">{selectedSubcategory || selectedCategory}</span>.
                </p>
                {availableYearsForSelection.length > 0 && (
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-[#8E8E93] text-sm">Available financial years for this category:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {availableYearsForSelection.map((yr) => (
                        <button
                          key={yr}
                          onClick={() => setSelectedYear(yr)}
                          className="px-4 py-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white text-xs rounded-lg transition-colors"
                        >
                          Switch to {yr}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
