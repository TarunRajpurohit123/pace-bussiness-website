"use client";

import { useStore } from "@/store/useStore";
import React from "react";

export default function ProgressBar() {
  const isProgress = useStore((state) => state.isProgress);
  return (
    <div
      className="w-full rounded-full h-2.5"
      style={isProgress ? {} : { display: "none" }}
    >
      <div
        className=" h-2.5 rounded-full main-anima-progress-bar"
        style={{ width: "45%", background: "var(--red)", borderRadius: "50%" }}
      ></div>
    </div>
  );
}
