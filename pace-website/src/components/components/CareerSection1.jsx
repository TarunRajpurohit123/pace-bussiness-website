import Image from "next/image";

export default function CareerSection1() {
  return (
    <>
      <section className="careersection">
        <div className="careersection__main page-width flex justify-between">
          <div className="careerLeft1">
            <h1>We’re Looking for talented people</h1>
            <p className="mt-[1.5rem]">
              Founded in 2015 with the launch of Cot and Candy, began its
              journey with a clear vision of creating impactful and meaningful
              brands. Over the years, PACE strategically expanded its portfolio,
              launching Homepost in 2020 to cater to the growing demand for
              stylish home decor, followed by Ostilosin 2023, a bold entry into
              the premium fashion market.
            </p>
            <button>View openings (23)</button>
          </div>
          <div className="careerRight1 grid grid-cols-2 gap-4">
            <Image
              src="/main/career1.png"
              alt="career-related-image"
              width={282.5}
              height={147}
            />
            <Image
              src="/main/career2.png"
              alt="career-related-image"
              width={282.5}
              height={147}
            />
            <Image
              src="/main/career3.png"
              alt="career-related-image"
              width={282.5}
              height={147}
            />
            <Image
              src="/main/career4.png"
              alt="career-related-image"
              width={282.5}
              height={147}
            />
          </div>
        </div>
      </section>
    </>
  );
}
