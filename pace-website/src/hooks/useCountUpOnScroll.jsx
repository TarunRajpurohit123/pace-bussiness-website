"use client";

import { useState, useEffect, useRef } from "react";

export default function useCountUpOnScroll(
  targetNumber,
  duration = 2000,
  threshold = 0.5
) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let observer;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const increment = Math.min(
        (progress / duration) * targetNumber,
        targetNumber
      );
      setCount(Math.ceil(increment));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    const observe = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      });
    };

    observer = new IntersectionObserver(observe, { threshold });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer && observer.disconnect();
  }, [targetNumber, duration, threshold]);

  return { count, elementRef };
}
