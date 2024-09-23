import { Logo } from "@/components";
import uniqid from "uniqid";
import Counter from "./Counter";

const data = [
  {
    number: 100,
    heading: "Product Distributors",
  },
  {
    number: 7,
    heading: "Varieties of Brands",
  },
  {
    number: 9,
    heading: "Product Categories",
  },
  {
    number: 1500,
    heading: "Sales Points",
  },
];
export default function HomeStatics() {
  return (
    <>
      <section className="page-width homeStatics flex items-center">
        {/* left */}
        <div className="homeStatics__left">
          <h1 className="flex items-center">
            <Logo color="var(--pure)" styles={{ marginRight: "1.3rem" }} /> In
            Numericals
          </h1>
          <p className="w-[41.2rem]">
            Within a short span of 9 years, PACE E-Commerce Ventures Limited has
            emerged in every sector.
          </p>
        </div>
        {/* right */}
        <div className="homeStatics__right flex items-center ml-[10rem]">
          {/* statics card goes here */}
          {data?.map((statData, ind) => {
            return (
              <div
                key={uniqid("static", "card")}
                className={`homeStatics__card counter ${ind!=0&& "homeStatic_not_first_card"}`}
                style={ind != 0 ? { marginLeft: "10rem" } : {}}
              >
                {/* <p className="stat_number">{statData?.number}</p> */}
                {/* <p className="stat_number">{count}</p> */}
                <Counter
                  targetNumber={statData?.number}
                  isPrifix={ind === 1 ? false : true}
                />
                <p className="stat_heading">{statData?.heading}</p>
              </div>
            );
          })}
          {/* statics card end here */}
        </div>
      </section>
    </>
  );
}
