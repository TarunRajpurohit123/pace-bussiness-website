import CircleIcon2 from "@/components/svgs/CircleIcon2";
import StepLineIcon from "@/components/svgs/StepLineIcon";
import Image from "next/image";

export default function HomeThreePillar() {
  return (
    <>
      <section className="homeThreePillar page-width">
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
                <h2>Inspiring Lifestyle</h2>
                <p>Fully committed to the success company</p>
              </div>
            </div>
            {/* pillar 2 end */}
          </div>
          <div className="threepillar__right"></div>
        </main>
      </section>
    </>
  );
}
