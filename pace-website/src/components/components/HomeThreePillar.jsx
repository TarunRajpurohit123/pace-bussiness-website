"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import { Logo } from "@/components";
import DotIcon from "@/components/svgs/dotIcon";
import { useEffect, useRef, useState } from "react";

export default function HomeThreePillar() {
  const [activeDot, setActiveDot] = useState({
    first: { color: "var(--red)", scale: "scale-150" },
    second: { color: "var(--gray_400)", scale: "scale-100" },
    third: { color: "var(--gray_400)", scale: "scale-100" },
  });
  const swiperRef = useRef(null);
  const [currentScreen, setCurrentScreen] = useState(null);
  useEffect(() => {
    if (window.innerWidth) {
      setCurrentScreen(window?.innerWidth);
    }
  }, []);

  return (
    <>
      <section className="homeThreePillar page-width pt-[7.5rem] pb-[7.5rem]">
        <div className="homeThree__top mb-[5rem] flex items-center justify-between">
          <h1 className="htp__heading flex items-center">
            <Logo
              currentScreen={currentScreen}
              mbWidth={"80"}
              classNames={"mr-[1.3rem] mobile--logo--sdaud"}
              color={"var(--pure)"}
            />{" "}
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
                swiperRef.current.slideTo(1);
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
                swiperRef.current.slideTo(2);
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
        <div>
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
                  <h1>Lifestyle</h1>
                  <div className="wc__left__content mt-[2.5rem]">
                    {/* <h1>What it Represents: </h1> */}
                    <p className=" w-[60.8rem]">
                      <span style={{ color: "var(--pure)" }}>Lifestyle</span>{" "}
                      represents{" "}
                      <span style={{ color: "var(--pure)" }}>PACE’</span>s
                      commitment to enhancing the quality of life for its
                      customers through innovative, stylish, and functional
                      products. This pillar reflects the company’s dedication to
                      creating brands that resonate with modern lifestyles and
                      consumer aspirations. It drives PACE’s focus on product
                      development and brand positioning, ensuring that offerings
                      are aligned with current trends and consumer needs,
                      thereby maintaining relevance and desirability in a
                      dynamic market.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[2.5rem]">
                    <h1>Lifestyle: </h1>
                    <div className="mt-[2.5rem] flex">
                      <Image
                        src={"/main/pillar1_01.png"}
                        width={119}
                        height={30}
                        alt="image"
                      />
                      <Image
                        src={"/main/pillar1_02_.png"}
                        width={146}
                        height={30}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                      <Image
                        src={"/main/pillar1_03.png"}
                        width={157}
                        height={30}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                      <Image
                        src={"/main/pillar1_04.png"}
                        width={157}
                        height={30}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="wc__right" style={{ width: "45rem" }}>
                  <Image
                    src={"/main/pillar_1.png"}
                    width={450}
                    height={505}
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* slide 2 */}
            <SwiperSlide className="">
              <div className="wc_slide flex justify-between">
                <div className="wc__left relative">
                  <p className="absolute right-0 top-0 tpslideNumber">02</p>
                  <h1>Empowering Dreams</h1>
                  <div className="wc__left__content mt-[2.5rem]">
                    <p className=" w-[60.8rem]">
                      <span style={{ color: "var(--pure)" }}>Empowerment</span>{" "}
                      embodies{" "}
                      <span style={{ color: "var(--pure)" }}>PACE’s</span>{" "}
                      belief in fostering growth,confidence, and success for its
                      customers, partners, and the broader community. This
                      pillar highlights the company’s role in providing the
                      tools, opportunities, and resources that enable
                      individuals and businesses to thrive. It guides PACE’s
                      initiatives in promoting collaboration, partnerships, and
                      innovation, thereby empowering all businesses within its
                      ecosystem to reach their full potential.
                    </p>
                  </div>

                  <div className="wc__left__content mt-[2.5rem]">
                    <h1>Empowering Dreams </h1>
                    <div className="mt-[2.5rem] flex">
                      <div className="mt-[2.5rem] flex">
                        <Image
                          src={"/main/pillar3.png"}
                          width={245}
                          height={30}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wc__right" style={{ width: "45rem" }}>
                  <Image
                    src={"/main/pillar_2.png"}
                    width={450}
                    height={505}
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* slide 3 */}
            <SwiperSlide className="">
              <div className="wc_slide flex justify-between">
                <div className="wc__left relative">
                  <p className="absolute right-0 top-0 tpslideNumber">03</p>
                  <h1>Fulfilling Aspirations</h1>
                  <div className="wc__left__content mt-[2.5rem]">
                    {/* <h1>What it Represents: </h1> */}
                    <p className=" w-[60.8rem]">
                      <span style={{ color: "var(--pure)" }}>Fulfilment</span>{" "}
                      reflects{" "}
                      <span style={{ color: "var(--pure)" }}>PACE’s</span>{" "}
                      dedication to delivering tailored experiences that meet
                      the unique needs and desires of its customers. This pillar
                      emphasizes the importance of personalization and
                      customization in enhancing customer satisfaction and
                      engagement. By focusing on providing products and services
                      that allow customers to express their individuality and
                      preferences, PACE ensures that each interactionwith the
                      brand is meaningful and personal. This commitment leads to
                      a deeper connection with the brand, fostering a sense of
                      ownership and satisfaction among customers
                    </p>
                  </div>

                  <div className="wc__left__content mt-[2.5rem]">
                    <h1>Fulfilling </h1>

                    <div className="mt-[2.5rem] flex">
                      <Image
                        src={"/main/pillar2_01.png"}
                        width={139}
                        height={30}
                        alt="image"
                      />
                      <Image
                        src={"/main/pillar2_02.png"}
                        width={66}
                        height={30}
                        style={{ marginLeft: "5rem" }}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="wc__right" style={{ width: "45rem" }}>
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
