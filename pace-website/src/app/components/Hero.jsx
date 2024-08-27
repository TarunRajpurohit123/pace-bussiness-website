import Image from "next/image";

export default function Hero() {
  return (
    <section className="pages_hero_wrapper">
      <section className="pages_hero  page-width h-[45rem] overflow-hidden">
        <div
          className=" flex justify-between items-center"
          style={{ height: "45rem" }}
        >
          {/* left */}
          <div className="pages_hero--left">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          {/* right */}
          <div className="pages_hero--right">
            <Image
              className="mt-[40rem] contact--hero-image"
              style={{ width: "80rem" }}
              src="/contact-hero.png"
              width={800}
              height={812}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
