import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="pages_hero page-width h-[45rem] overflow-hidden">
        <div className="mt-[6.2rem] flex justify-between">
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
            <Image src="/contact-hero.png" width={800} height={812} />
          </div>
        </div>
      </section>
    </>
  );
}
