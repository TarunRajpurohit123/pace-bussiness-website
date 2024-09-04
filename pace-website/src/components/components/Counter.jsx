"use client";

import useCountUpOnScroll from "@/hooks/useCountUpOnScroll";
import React from "react";

export default function Counter({ targetNumber }) {
  const { count, elementRef } = useCountUpOnScroll(1000);

  return (
    <div ref={elementRef} className="counter stat_number">
      {count}
    </div>
  );
}
