import Link from "next/link";

export default function CTA() {
  return (
    <div className={"about__cta__section_wrapper"}>
      <section className="page-width about__cta__section">
        <div className="cta_content">
          <h1>Let’s Get In Touch</h1>
          <p>
            We’d love to hear from you! Reach out with any <br /> questions or
            feedback, and let’s start a conversation.
          </p>
          <Link href="/contact">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
