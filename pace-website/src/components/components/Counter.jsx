"use client";

import useCountUpOnScroll from "@/hooks/useCountUpOnScroll";
import React from "react";

export default function Counter({ targetNumber, isPrifix }) {
  const { count, elementRef } = useCountUpOnScroll(targetNumber);

  return (
    <div ref={elementRef} className="counter stat_number">
      {count}
      {isPrifix && "+"}
    </div>
  );
}
