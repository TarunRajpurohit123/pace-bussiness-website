import CircleArrowNextIcon from "@/components/svgs/CircleArrowNextIcon";
import CircleArrowPrevIcon from "@/components/svgs/CircleArrowPrevIcon";

export default function HomeBrands() {
  return (
    <>
      <section className="homebrands__section">
        <div className="homebrands__top  page-width">
          <div className="flex homebrands__top_one justify-between items-center">
            {/* heading */}
            <h1>
              Our <span style={{ color: "var(--red)" }}>Brands</span>
            </h1>
            {/* carousel button */}
            <div className="bcarousel__button">
              <button>
                <CircleArrowPrevIcon />
              </button>
              <button className="ml-[2.5rem]">
                <CircleArrowNextIcon />
              </button>
            </div>
          </div>

          <p>
            Founded in 2015 with the launch of Cot and Candy,{" "}
            <span style={{ color: "var(--red)" }}>PACE</span> {" "} Ecommerce Ventures
            Ltd began its journey with a clear vision of creating impactful and
            meaningful brands.
          </p>
        </div>
      </section>
    </>
  );
}
