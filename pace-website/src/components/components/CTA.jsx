import Link from "next/link";

export default function CTA() {
  return (
    <div className={"about__cta__section_wrapper"}>
      <section className="page-width about__cta__section">
        <div className="cta_content">
          <h1>Let’s Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <Link
            href="/contact"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
