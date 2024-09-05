"use client";

import Dialog from "@/components/admin/Dialog";
import { useState } from "react";

export default function FinancialReport() {
  const [isDialog, setIsDialog] = useState(false);
  return (
    <section className="financial-report__wrapper">
      <Dialog
        isDialog={isDialog}
        title={"Create Financial"}
        content={
          <>
            <form>
              <div className="flex flex-col">
                <label htmlFor="categoryname" style={{ fontSize: "1.5rem" }}>
                  Category Name
                </label>
                <input
                  className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                  name="categoryname"
                  id="categoryname"
                  placeholder="eg. Reports & Presentations"
                  style={{ fontSize: "1.3rem" }}
                />
              </div>
              <div className="flex flex-col mt-[1rem]">
                <label
                  htmlFor="category_priority"
                  style={{ fontSize: "1.5rem" }}
                >
                  Priority
                </label>
                <input
                  type="number"
                  className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                  name="category_priority"
                  id="category_priority"
                  placeholder="Category Priority"
                  style={{ fontSize: "1.3rem" }}
                />
              </div>
              <div className="flex">
                <button
                  className="mt-[1rem] flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
                  style={{ fontSize: "1.5rem" }}
                >
                  Create Financial Category
                </button>
                <button
                  type="button"
                  className="mt-[1rem] ml-[1rem] flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => {
                    setIsDialog(false);
                  }}
                >
                  Close
                </button>
              </div>
            </form>
          </>
        }
      />
      <div className="topper flex justify-between items-center">
        <div style={{ fontSize: "3rem" }}>Financial Report Main Category</div>
        <button
          className="flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
          style={{ fontSize: "1.5rem" }}
          onClick={() => {
            setIsDialog(true);
          }}
        >
          Create Category
        </button>
      </div>
    </section>
  );
}
