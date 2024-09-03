import { useEffect, useRef } from "react";

const useScrollControl = (callback, options) => {
  const observerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    }, options);

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, options]);

  return sectionRef;
};

export default useScrollControl;
