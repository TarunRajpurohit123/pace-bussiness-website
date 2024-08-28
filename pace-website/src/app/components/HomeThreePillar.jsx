"use client";

import CircleIcon2 from "@/components/svgs/CircleIcon2";
import StepLineIcon from "@/components/svgs/StepLineIcon";
import Image from "next/image";

export default function HomeThreePillar() {
  return (
    <>
      <section className="homeThreePillar page-width pt-[7.5rem] pb-[7.5rem]">
        {/* three pillar top */}
        <div className="homeThreePillar__top">
          <h1 className="homeThreePillar__top__heading">
            Three <span>Pillars</span>
          </h1>
          <div className="homeThreePillar__top__content">
            <p>
              We source, vet & deploy the top marketing & technology
              professionals India has to offer. Global companies hire from
              Uplers to make their hiring faster, easier & cost-effective.
            </p>
          </div>
        </div>
        {/* three pillar main */}
        <main className="threepillar__main">
          <div className="threepillar__left">
            {/* pillar 1 */}
            <div>
              <div className="linkLogo">
                <CircleIcon2 />
              </div>
              <div className="linkText">
                <h2>Inspiring Lifestyle</h2>
                <p>Fully committed to the success company</p>
              </div>
            </div>
            {/* pillar 1 end */}

            <div className="mb-[1.7rem]">
              <StepLineIcon />
            </div>

            {/* pillar 2 */}
            <div>
              <div className="linkLogo">
                <CircleIcon2 />
              </div>
              <div className="linkText">
                <h2>Empowering Dreams</h2>
                <p>Fully committed to the success company</p>
              </div>
            </div>
            {/* pillar 2 end */}

            <div className="mb-[1.6rem]">
              <StepLineIcon />
            </div>

            {/* pillar 2 */}
            <div>
              <div className="linkLogo">
                <CircleIcon2 />
              </div>
              <div className="linkText">
                <h2>Fulfilling Aspirations</h2>
                <p>Fully committed to the success company</p>
              </div>
            </div>
            {/* pillar 2 end */}
          </div>

          {/* three pillar right goes here */}
          <div className="threepillar__right">
            <h1>
              Inspiring <span>Lifestyle</span>
            </h1>
            <div className="threeMainContent">
              {/* first */}
              <div className="content">
                <h2>What it Represents: </h2>
                <p>
                  The commitment to enhancing the quality of life for customers
                  through innovative, stylish, and functional products. This
                  pillar reflects PACE's dedication to creating brands that
                  resonate with modern lifestyles and consumer aspirations.
                </p>
              </div>
              {/* second */}
              <div className="content mt-[1.5rem]">
                <h2>What it Represents: </h2>
                <p>
                  The commitment to enhancing the quality of life for customers
                  through innovative, stylish, and functional products. This
                  pillar reflects PACE's dedication to creating brands that
                  resonate with modern lifestyles and consumer aspirations.
                </p>
              </div>
              {/* third */}
              <div className="content mt-[1.5rem]">
                <h2>Lifestyle </h2>
                <div className="mt-[2.5rem] flex items-center">
                  <Image src="/ostiloslogo2.png" width="137" height="36" />
                  <Image
                    src="/cotncandylogo.png"
                    className="ml-[5rem]"
                    width="138"
                    height="36"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* three pillar right end here */}
        </main>
      </section>
    </>
  );
}
