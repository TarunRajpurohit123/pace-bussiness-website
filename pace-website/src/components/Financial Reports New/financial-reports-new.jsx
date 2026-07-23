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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedAccordions, setExpandedAccordions] = useState({
    "Announcement Under Regulation 30": true,
  });

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat.category);
    setSelectedYear(YEARS[0]);
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
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubcategoryClick = (catName, subName) => {
    setSelectedCategory(catName);
    setSelectedSubcategory(subName);
    setSelectedYear(YEARS[0]);
    setIsMobileMenuOpen(false);
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
    <section className="bg-[#191918] w-full max-w-full overflow-x-hidden text-white py-12 md:py-16 font-sans min-h-[100%]">
      <div className="w-full max-w-[1360px] mx-auto px-4 md:px-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 w-full">
          <div>
            <span className="text-xs md:text-sm tracking-wider uppercase text-[#8E8E93] font-mono block mb-2 current_year_enabled">
              {activeYear ? `${activeYear.replace(/\s+/g, "")} Reports` : "Reports"}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight irs-heading--main">
              Financial Reports
            </h1>
          </div>
          <div className="w-full md:max-w-[40%] md:text-right">
            <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed font-light finanrepo-header-ted">
              Everything SEBI requires us to publish — organised so you can actually find what you need.
            </p>
          </div>
        </div>

        {/* Desktop Year Selector Bar */}
        {availableYearsForSelection.length > 0 && (
          <div className="hidden lg:block my-8 py-5 w-full">
            <div className="flex items-center justify-between border-b border-[#2C2C2E] pb-[5rem] w-full min-w-full">
              {availableYearsForSelection.map((year, index) => {
                const isSelected = activeYear === year;
                return (
                  <div key={year} className="flex-1 flex items-center justify-center relative min-w-0">
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`fryear-btn text-center cursor-pointer text-base px-1 whitespace-nowrap ${isSelected ? "active" : ""
                        }`}
                    >
                      {year}
                    </button>
                    {index < availableYearsForSelection.length - 1 && (
                      <span className="absolute lalina right-0 h-4 w-[1px] bg-[#2C2C2E]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Combined Bar: Hamburger + Category on Left, Years on Right */}
        <div className="flex lg:hidden flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl p-3 mb-6 w-full">
          {/* Left: Hamburger Icon + Category Name */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-3 text-left overflow-hidden min-w-0 group cursor-pointer"
            aria-label="Open categories menu"
          >
            <div className="p-2 bg-[#2C2C2E] rounded-lg shrink-0 text-white group-hover:bg-[#3A3A3C] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm md:text-base font-medium text-white truncate min-w-0" style={{ fontSize: "1.4rem" }}>
              {selectedSubcategory || selectedCategory}
            </span>
          </button>

          {/* Right: Years Selection */}
          {availableYearsForSelection.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 sm:pt-0 border-t sm:border-t-0 border-[#2C2C2E]/60 shrink-0">
              {availableYearsForSelection.map((year, index) => {
                const isSelected = activeYear === year;
                return (
                  <div key={year} className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`fryear-btn text-xs sm:text-sm cursor-pointer whitespace-nowrap px-1 ${isSelected ? "active font-medium text-white" : "text-[#8E8E93]"
                        }`}
                    >
                      {year}
                    </button>
                    {index < availableYearsForSelection.length - 1 && (
                      <span className="h-3 w-[1px] bg-[#2C2C2E] inline-block shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Mobile Backdrop Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/75 z-40 lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Two Column Layout: Sidebar + Document List */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-6 md:mt-10 w-full">
          {/* Left Sidebar (Drawer on mobile, inline on desktop) */}
          <div
            className={`
              fixed inset-y-0 left-0 z-50 w-[85%] max-w-[320px] bg-[#191918] p-6 overflow-y-auto border-r border-[#2C2C2E] shadow-2xl transition-transform duration-300 ease-in-out
              lg:static lg:z-auto lg:w-[35%] lg:max-w-none lg:p-0 lg:overflow-visible lg:border-none lg:shadow-none lg:shrink-0 lg:translate-x-0
              ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            {/* Mobile Drawer Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2C2C2E] lg:hidden">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#8E8E93]"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base font-serif font-medium text-white">Categories</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#8E8E93] hover:text-white rounded-lg bg-[#2C2C2E]/60 transition-colors"
                aria-label="Close categories menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

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
                        className={`text-base md:text-lg transition-colors tabcate-frs ${isCatSelected && !cat.hasSubcategories
                          ? "text-white font-medium"
                          : "text-[#C7C7CC] group-hover:text-white"
                          }`}
                      >
                        {cat.category}
                      </span>
                      {cat.hasSubcategories && (
                        <span className="text-[#8E8E93] group-hover:text-white">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""
                              }`}
                          >
                            <path
                              d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                              stroke="#F1F4E6"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
                              className={`subtabfr--btn text-left text-sm transition-colors py-1 ${isSubSelected
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
          <div className="w-full lg:w-[60%] flex-1 min-h-[450px] min-w-0">
            {filteredFiles.length > 0 ? (
              <div className="flex flex-col w-full">
                {filteredFiles.map((file, idx) => (
                  <div
                    key={`${file.filename}-${idx}`}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-4 hover:bg-[#1C1C1E]/40 transition-colors px-3 rounded-lg group gap-3 sm:gap-0 w-full min-w-0"
                  >
                    <p className="text-sm md:text-base font-normal text-[#E5E5EA] group-hover:text-white sm:pr-4 leading-normal frtitle break-words min-w-0">
                      {file.title}
                    </p>
                    <div className="flex items-center gap-6 sm:gap-8 shrink-0">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={file.url}
                        className="flex items-center gap-2 text-[#8E8E93] hover:text-white text-xs md:text-sm transition-colors"
                      >
                        <EyeIcon color="currentColor" extcls="w-[1.6rem] h-[1.6rem]" />
                        <span className="frview-btn">View</span>
                      </Link>
                      <button
                        onClick={() => triggerDownload(file.url, file.filename)}
                        className="flex items-center gap-2 text-[#8E8E93] hover:text-white text-xs md:text-sm transition-colors"
                      >
                        <DownloadIcon color="currentColor" extcls="w-[1.6rem] h-[1.6rem]" />
                        <span className="frview-btn">Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-[#1C1C1E]/30 rounded-2xl p-8 border border-[#2C2C2E] w-full">
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
