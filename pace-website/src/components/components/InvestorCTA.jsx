import Link from "next/link";

export default function InvestorCTA() {
  return (
    <div className="investors__cta investors__cta--mobile flex justify-between items-center page-width">
      <div className="investors__left">
        <p className="investors__cn">PACE Ventures LTD.</p>
      </div>
      <div className="investors__right relative">
        <p className="investor_contactHeding">Contact Us</p>
        <Link
          href="/contact"
          className="absolute bottom-0 right-0 investors_cnLink"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="arrow__investor_icon"
          >
            <path
              d="M14.4299 5.93018L20.4999 12.0002L14.4299 18.0702"
              stroke="var(--pure)"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.5 12H20.33"
              stroke="var(--pure)"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
