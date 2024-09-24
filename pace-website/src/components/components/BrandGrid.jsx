import BrandCard2 from "./BrandCard2";

export default function BrandGrid() {
  return (
    <>
      <div className="brand__main__grid page-width">
        {/* row 1 goes here */}
        <div className="brand__main__row1 brand__main__row flex">
          {/* big card goes */}
          <div className="brand__main__row--bigi brand__main__row--card">
            {/* content div goes here */}
            <div className="brand__main__row--bigi__content brand__main__row--card__content">
              <h1 className="brand__main__row--bigi__content__heading">
                Our 7 Brands!
              </h1>
              <p className="brand__main__row--bigi__content__paragraph">
                PACE is a dynamic lifestyle company that serves as the
                cornerstone for a diverse portfolio of brands, each catering to
                distinct market segments.
              </p>
            </div>
            {/* content div end here */}
            <button className="brand__main__row--bigi--btn">Learn More</button>
          </div>
          {/* big card end */}
          <BrandCard2
            extraCls={"brand2__candy"}
            width={223.03}
            height={56}
            imgUrl={"/main/cotcandy2.png"}
          />
        </div>
        {/* row 1 end here */}

        {/* row 2 goes here */}
        <div className="brand__main__row2 brand__main__row"></div>
        {/* row 2 goes here */}

        {/* row 2 goes here */}
        <div className="brand__main__row3 brand__main__row"></div>
        {/* row 2 end here */}
      </div>
    </>
  );
}
