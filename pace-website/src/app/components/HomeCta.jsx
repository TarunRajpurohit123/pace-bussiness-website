import { Logo } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function HomeCta() {
  return (
    <>
      <section className="home__cta__section relative">
        {/* bg image */}
        {/* <Image src="/home-cta-bg.png" width={"1440"} height={"296"} /> */}
        <div className="home__cta__content absolute top-0 left-0 w-full h-full">
          <div className="home__cta__main">
            {/* left */}
            <div className="home_cta_left">
              <h3>Responses to Grow Your</h3>
              <h1 className="flex items-center">
                Business with{" "}
                <Logo color="var(--red)" classNames={"ml-[1.1rem]"} />
              </h1>
            </div>
            {/* right */}
            <div className="home_cta_right">
              <Link href="/contact">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
