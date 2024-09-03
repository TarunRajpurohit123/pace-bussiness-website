"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import { Logo } from "@/components";
import DotIcon from "@/components/svgs/dotIcon";
import { useRef, useState, useEffect } from "react";
import uniqid from "uniqid";

export default function HomeThreePillar() {
  const [activeDot, setActiveDot] = useState({
    first: { color: "var(--red)", scale: "scale-150" },
    second: { color: "var(--gray_400)", scale: "scale-100" },
    third: { color: "var(--gray_400)", scale: "scale-100" },
  });
  const swiperRef = useRef(null);
  const carouselRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!swiperRef.current || !carouselRef.current) return;

      const scrollTop =
        window?.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
      setLastScrollTop(scrollTop);

      // Determine carousel slide index
      const currentSlide = swiperRef.current.activeIndex;
      const slideCount = swiperRef.current.slides.length;

      if (scrollDirection === "down") {
        if (
          scrollTop >
          carouselRef.current.offsetTop +
            carouselRef.current.offsetHeight -
            window?.innerHeight
        ) {
          swiperRef.current.slideNext(); // Slide to the next slide
        }
      } else if (scrollDirection === "up") {
        if (scrollTop < carouselRef.current.offsetTop) {
          swiperRef.current.slidePrev(); // Slide to the previous slide
        }
      }
    };

    // Add scroll event listener
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <section className="homeThreePillar page-width pt-[7.5rem] pb-[7.5rem]">
        <div className="homeThree__top mb-[5rem] flex items-center justify-between">
          <h1 className="htp__heading flex items-center">
            <Logo classNames={"mr-[1.3rem]"} color={"var(--pure)"} />{" "}
            <span style={{ color: "var(--pure)" }}>Pillars</span>
          </h1>
          <div className="pillarCarouselDots flex">
            <DotIcon
              onClick={() => {
                swiperRef.current.slideTo(0);
                setActiveDot(() => {
                  return {
                    first: { color: "var(--red)", scale: "scale-150" },
                    second: { color: "var(--gray_400)", scale: "scale-100" },
                    third: { color: "var(--gray_400)", scale: "scale-100" },
                  };
                });
              }}
              className={`mr-[1rem] ${activeDot?.first?.scale}`}
              color={activeDot?.first?.color}
            />
            <DotIcon
              onClick={() => {
                swiperRef.current.slideTo(2);
                setActiveDot(() => {
                  return {
                    second: { color: "var(--red)", scale: "scale-150" },
                    first: { color: "var(--gray_400)", scale: "scale-100" },
                    third: { color: "var(--gray_400)", scale: "scale-100" },
                  };
                });
              }}
              className={`mr-[1rem] ${activeDot?.second?.scale}`}
              color={activeDot?.second?.color}
            />
            <DotIcon
              onClick={() => {
                swiperRef.current.slideTo(1);
                setActiveDot(() => {
                  return {
                    third: { color: "var(--red)", scale: "scale-150" },
                    second: { color: "var(--gray_400)", scale: "scale-100" },
                    first: { color: "var(--gray_400)", scale: "scale-100" },
                  };
                });
              }}
              className={`mr-[1rem] ${activeDot?.third?.scale}`}
              color={activeDot?.third?.color}
            />
          </div>
        </div>

        {/* carousel wheelcontrol */}
        <div ref={carouselRef}>
          <Swiper
            direction={"horizontal"}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Store the Swiper instance in the ref
            }}
            slidesPerView={1}
            spaceBetween={30}
            // mousewheel={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={
              (true,
              {
                releaseOnEdges: true, // Enable releaseOnEdges here
              })
            }
            // loop={true}
            modules={[Mousewheel]}
            className="mySwiper"
            onSlideChange={(e) => {
              // if (e.activeIndex === e.slides.length - 1) {
              //   document.body.style.overflow = "auto"; // Re-enable main scroll after last slide
              //   isScrolling.current = false;
              // }
              if (e?.activeIndex == 0) {
                setActiveDot(() => {
                  return {
                    first: { color: "var(--red)", scale: "scale-150" },
                    second: { color: "var(--gray_400)", scale: "scale-100" },
                    third: { color: "var(--gray_400)", scale: "scale-100" },
                  };
                });
              }
              if (e?.activeIndex == 1) {
                setActiveDot(() => {
                  return {
                    second: { color: "var(--red)", scale: "scale-150" },
                    third: { color: "var(--gray_400)", scale: "scale-100" },
                    first: { color: "var(--gray_400)", scale: "scale-100" },
                  };
                });
              }
              if (e?.activeIndex == 2) {
                setActiveDot(() => {
                  return {
                    third: { color: "var(--red)", scale: "scale-150" },
                    second: { color: "var(--gray_400)", scale: "scale-100" },
                    first: { color: "var(--gray_400)", scale: "scale-100" },
                  };
                });
              }
            }}
          >
            {/* slide 1 */}
            <SwiperSlide className="">
              <div className="wc_slide flex justify-between">
                <div className="wc__left relative">
                  <p className="absolute right-0 top-0 tpslideNumber">01</p>
                  <h1>Empowering Dreams</h1>
                  <div className="wc__left__content mt-[2.5rem]">
                    <h1>What it Represents: </h1>
                    <p className="mt-[1.5rem]">
                      The commitment to enhancing the quality of life for
                      customers through innovative, stylish, and functional
                      products. This pillar reflects PACE&apos;s dedication to
                      creating brands that resonate with modern lifestyles and
                      consumer aspirations.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[1.5rem]">
                    <h1>Impact: </h1>
                    <p className="mt-[1.5rem]">
                      The commitment to enhancing the quality of life for
                      customers through innovative, stylish, and functional
                      products. This pillar reflects PACE&apos;s dedication to
                      creating brands that resonate with modern lifestyles and
                      consumer aspirations.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[1.5rem]">
                    <h1>Lifestyle: </h1>
                    <div className="mt-[2.5rem] flex">
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        alt="image"
                      />
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="wc__right" style={{ width: "45rem" }}>
                  <Image src={"/01.png"} width={450} height={505} alt="image" />
                </div>
              </div>
            </SwiperSlide>
            {/* slide 2 */}
            <SwiperSlide>
              <div className="wc_slide flex justify-between">
                <div className="wc__left relative">
                  <p className="absolute right-0 top-0 tpslideNumber">02</p>
                  <h1>Empowering Dreams</h1>
                  <div className="wc__left__content mt-[2.5rem]">
                    <h1>What it Represents: </h1>
                    <p className="mt-[1.5rem]">
                      The commitment to enhancing the quality of life for
                      customers through innovative, stylish, and functional
                      products. This pillar reflects PACE&apos;s dedication to
                      creating brands that resonate with modern lifestyles and
                      consumer aspirations.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[1.5rem]">
                    <h1>Impact: </h1>
                    <p className="mt-[1.5rem]">
                      The commitment to enhancing the quality of life for
                      customers through innovative, stylish, and functional
                      products. This pillar reflects PACE&apos;s dedication to
                      creating brands that resonate with modern lifestyles and
                      consumer aspirations.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[1.5rem]">
                    <h1>Lifestyle: </h1>
                    <div className="mt-[2.5rem] flex">
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        alt="image"
                      />
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="wc__right">
                  <Image src={"/03.png"} width={450} height={505} alt="image" />
                </div>
              </div>
            </SwiperSlide>
            {/* slide 3 */}
            <SwiperSlide>
              <div className="wc_slide flex justify-between">
                <div className="wc__left relative">
                  <p className="absolute right-0 top-0 tpslideNumber">03</p>
                  <h1>Empowering Dreams</h1>
                  <div className="wc__left__content mt-[2.5rem]">
                    <h1>What it Represents: </h1>
                    <p className="mt-[1.5rem]">
                      The commitment to enhancing the quality of life for
                      customers through innovative, stylish, and functional
                      products. This pillar reflects PACE&apos;s dedication to
                      creating brands that resonate with modern lifestyles and
                      consumer aspirations.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[1.5rem]">
                    <h1>Impact: </h1>
                    <p className="mt-[1.5rem]">
                      The commitment to enhancing the quality of life for
                      customers through innovative, stylish, and functional
                      products. This pillar reflects PACE&apos;s dedication to
                      creating brands that resonate with modern lifestyles and
                      consumer aspirations.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[1.5rem]">
                    <h1>Lifestyle: </h1>
                    <div className="mt-[2.5rem] flex">
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        alt="image"
                      />
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                      <Image
                        src={"/OstilosLogo.png"}
                        width={"138"}
                        height={"36"}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="wc__right">
                  <Image src={"/02.png"} width={450} height={505} alt="image" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* end carousel wheelcontrol */}
      </section>
    </>
  );
}
