"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import { Logo } from "@/components";

export default function HomeThreePillar() {
  return (
    <>
      <section className="homeThreePillar page-width pt-[7.5rem] pb-[7.5rem]">
        <div className="homeThree__top">
          <h1 className="htp__heading flex items-center">
            <Logo classNames={"mr-[1.3rem]"} color={"var(--red)"} />{" "}
            <span style={{ color: "var(--pure)" }}>Pillars</span>
          </h1>
        </div>

        {/* carousel wheelcontrol */}
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={{
            releaseOnEdges: true, // Enable releaseOnEdges here
          }}
          // loop={true}
          modules={[Mousewheel]}
          className="mySwiper"
          onScroll={(e) => {
            console.log({ e });
          }}
        >
          {/* slide 1 */}
          <SwiperSlide>
            <div className="wc_slide flex">
              <div className="wc__left">
                <h1>Empowering Dreams</h1>
                <div className="wc__left__content mt-[2.5rem]">
                  <h1>What it Represents: </h1>
                  <p className="mt-[1.5rem]">
                    The commitment to enhancing the quality of life for
                    customers through innovative, stylish, and functional
                    products. This pillar reflects PACE's dedication to creating
                    brands that resonate with modern lifestyles and consumer
                    aspirations.
                  </p>
                </div>

                <div className="wc__left__content mt-[1.5rem]">
                  <h1>Impact: </h1>
                  <p className="mt-[1.5rem]">
                    The commitment to enhancing the quality of life for
                    customers through innovative, stylish, and functional
                    products. This pillar reflects PACE's dedication to creating
                    brands that resonate with modern lifestyles and consumer
                    aspirations.
                  </p>
                </div>

                <div className="wc__left__content mt-[1.5rem]">
                  <h1>Lifestyle: </h1>
                  <div className="mt-[2.5rem] flex">
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                    />
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                      style={{ marginLeft: "5rem" }}
                    />
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                      style={{ marginLeft: "5rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="wc__right">
                <Image src={"/01.png"} width={450} height={505} />
              </div>
            </div>
          </SwiperSlide>
          {/* slide 2 */}
          <SwiperSlide>
            <div className="wc_slide flex">
              <div className="wc__left">
                <h1>Empowering Dreams</h1>
                <div className="wc__left__content mt-[2.5rem]">
                  <h1>What it Represents: </h1>
                  <p className="mt-[1.5rem]">
                    The commitment to enhancing the quality of life for
                    customers through innovative, stylish, and functional
                    products. This pillar reflects PACE's dedication to creating
                    brands that resonate with modern lifestyles and consumer
                    aspirations.
                  </p>
                </div>

                <div className="wc__left__content mt-[1.5rem]">
                  <h1>Impact: </h1>
                  <p className="mt-[1.5rem]">
                    The commitment to enhancing the quality of life for
                    customers through innovative, stylish, and functional
                    products. This pillar reflects PACE's dedication to creating
                    brands that resonate with modern lifestyles and consumer
                    aspirations.
                  </p>
                </div>

                <div className="wc__left__content mt-[1.5rem]">
                  <h1>Lifestyle: </h1>
                  <div className="mt-[2.5rem] flex">
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                    />
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                      style={{ marginLeft: "5rem" }}
                    />
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                      style={{ marginLeft: "5rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="wc__right">
                <Image src={"/03.png"} width={450} height={505} />
              </div>
            </div>
          </SwiperSlide>
          {/* slide 3 */}
          <SwiperSlide>
            <div className="wc_slide flex">
              <div className="wc__left">
                <h1>Empowering Dreams</h1>
                <div className="wc__left__content mt-[2.5rem]">
                  <h1>What it Represents: </h1>
                  <p className="mt-[1.5rem]">
                    The commitment to enhancing the quality of life for
                    customers through innovative, stylish, and functional
                    products. This pillar reflects PACE's dedication to creating
                    brands that resonate with modern lifestyles and consumer
                    aspirations.
                  </p>
                </div>

                <div className="wc__left__content mt-[1.5rem]">
                  <h1>Impact: </h1>
                  <p className="mt-[1.5rem]">
                    The commitment to enhancing the quality of life for
                    customers through innovative, stylish, and functional
                    products. This pillar reflects PACE's dedication to creating
                    brands that resonate with modern lifestyles and consumer
                    aspirations.
                  </p>
                </div>

                <div className="wc__left__content mt-[1.5rem]">
                  <h1>Lifestyle: </h1>
                  <div className="mt-[2.5rem] flex">
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                    />
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                      style={{ marginLeft: "5rem" }}
                    />
                    <Image
                      src={"/OstilosLogo.png"}
                      width={"138"}
                      height={"36"}
                      style={{ marginLeft: "5rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="wc__right">
                <Image src={"/01.png"} width={450} height={505} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* end carousel wheelcontrol */}
      </section>
    </>
  );
}
