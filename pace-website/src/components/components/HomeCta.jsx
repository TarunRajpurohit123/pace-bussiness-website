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
// import { Logo } from "@/components";
// import Link from "next/link";

// export default function HomeCta() {
//   return (
//     <>
//       <section className="home__cta__section relative">
//         {/* bg image */}
//         {/* <Image src="/home-cta-bg.png" width={"1440"} height={"296"} /> */}
//         <div className="home__cta__content absolute top-0 left-0 w-full h-full">
//           <div className="home__cta__main">
//             {/* left */}
//             <div className="home_cta_left">
//               <h3>Responses to Grow Your</h3>
//               <h1 className="flex items-center">
//                 Business with{" "}
//                 <Logo color="var(--red)" classNames={"ml-[1.1rem]"} />
//               </h1>
//             </div>
//             {/* right */}
//             <div className="home_cta_right">
//               <Link href="/contact">Get In Touch</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
