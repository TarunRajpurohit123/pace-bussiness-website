import Link from "next/link";

export default function CTA() {
  return (
    <div className={"about__cta__section_wrapper"}>
      <section className="page-width about__cta__section">
        <div className="cta_content">
          <h1>More info</h1>
          <p>Visit here to know more about us.</p>
          <Link href="/contact">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
