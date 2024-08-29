import ArrowRight from "@/components/svgs/ArrowRight";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="investors__cta flex justify-between items-center page-width">
      <div className="investors__left">
        <p className="investors__cn">PACE Ventures LTD.</p>
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
