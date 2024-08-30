import Image from "next/image";

export default function Hero({
  isContact = true,
  title = "Contact Us",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.",
}) {
  return (
    <>
      <section className="pages_hero_wrapper">
        <section className="pages_hero  page-width h-[45rem] overflow-hidden">
          <div
            className={` flex ${
              isContact ? "justify-between" : "justify-center"
            } items-center`}
            style={{ height: "45rem" }}
          >
            {/* left */}
            <div className="pages_hero--left">
              <h1 className={!isContact && `text-center`}>{title}</h1>
              <p
                className={
                  !isContact
                    ? `text-center w-[53.5rem] mt-[1.5rem]`
                    : `mt-[1.5rem]`
                }
              >
                {content}
              </p>
            </div>
            {/* right */}
            {isContact && (
              <div className="pages_hero--right">
                <Image
                  className="mt-[40rem] contact--hero-image"
                  style={{ width: "80rem" }}
                  src="/contact-hero.png"
                  width={800}
                  height={812}
                />
              </div>
            )}
          </div>
        </section>
      </section>

      {/* mobile hero goes here */}
      <section className="hero__contact__mobile">
        <div className="page-width flex flex-col justify-center items-center">
          {/* left */}
          <div className="pages_hero_mobile_l">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          {/* right */}
          <div className="pages_hero_mobile_r flex justify-center">
            <Image
              className="mt-[5rem] contact--hero-image"
              style={{ width: "70%" }}
              src="/contact-hero.png"
              width={800}
              height={812}
            />
          </div>
        </div>
      </section>
      {/* mobile hero end here */}
    </>
  );
}
