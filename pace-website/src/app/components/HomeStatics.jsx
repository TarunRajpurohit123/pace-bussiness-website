import { Logo } from "@/components";

const data = [
  {
    number: "25+",
    heading: "Talented Employees",
  },
  {
    number: "07",
    heading: "Varieties of Brands",
  },
  {
    number: "09",
    heading: "Year of Experience",
  },
  {
    number: "10k+",
    heading: "Happy Clients",
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
            We source, vet & deploy the top marketing & technology professionals
            India has to offer.{" "}
          </p>
        </div>
        {/* right */}
        <div className="homeStatics__right flex items-center ml-[10rem]">
          {/* statics card goes here */}
          {data?.map((statData, ind) => {
            return (
              <div
                className="homeStatics__card"
                style={ind != 0 ? { marginLeft: "10rem" } : {}}
              >
                <p className="stat_number">{statData?.number}</p>
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
