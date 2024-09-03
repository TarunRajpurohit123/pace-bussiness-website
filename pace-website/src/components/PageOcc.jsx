"use client";

import { useStore } from "@/store/useStore";
import { useEffect } from "react";

export default function PageOcc() {
  const isProgressHandleFalse = useStore(
    (state) => state.isProgressHandleFalse
  );
  useEffect(() => {
    isProgressHandleFalse();
  }, []);
  return <></>;
}
