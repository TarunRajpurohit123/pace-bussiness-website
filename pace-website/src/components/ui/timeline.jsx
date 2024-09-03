"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "..";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      style={{ background: "var(--mode-bg)" }}
      ref={containerRef}
    >
      <div className="page-width">
        <h2 className="flex timeline--heading items-center">
          <Logo color="var(--pure)" classNames="mr-[1rem]" /> History
        </h2>
        <p className="timeline--introcontent">
          Here's a timeline of our journey from beginning till now!!!
        </p>
      </div>
      <div ref={ref} className="relative page-width">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className=" absolute left-3 md:left-3  rounded-full flex items-center justify-center explicit-rounded-full"
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "100% !important",
                  background: "var(--gray_400)",
                }}
              >
                <div className=" w-full h-full rounded-full  p-2"></div>
              </div>
              <p
                className=" ml-[5rem] timelineTitle font-bold"
                style={{ color: "var(--pure)" }}
              >
                {item.title}
              </p>
            </div>

            <div className="relative" style={{ width: "98rem" }}>
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: "var(--red)",
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
