import ArrowRight from "@/components/svgs/ArrowRight";
import Link from "next/link";

export default function HomeCta() {
  return (
    <div className="investors__cta flex justify-between items-center page-width pt-[7.5rem]">
      <div className="investors__left flex-col">
        <p className="subheading__onHome">Responses to Grow Your</p>
        <p className="investors__cn" style={{ fontWeight: "700" }}>
          Business With <span style={{ color: "var(--red)" }}>PACE</span>
        </p>
      </div>
      <div className="investors__right relative">
        <p className="investor_contactHeding">Contact Us</p>
        <Link
          href="/contact"
          className="absolute bottom-0 right-0 investors_cnLink"
        >
          <ArrowRight color="var(--pure)" />
        </Link>
      </div>
    </div>
  );
}

