"use client";

import Link from "next/link";
import {
  Button,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  TwitterIcon,
} from "..";
import uniqid from "uniqid";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  // links
  const links = [
    { name: "Group", link: "/about" },
    { name: "Brands", link: "/brand" },
    { name: "Investor Relations", link: "/investors" },
    { name: "Contact Us", link: "/contact" },
    // { name: "Career", link: "#" },
  ];

  // subfooter link
  const subLinks = [
    { name: "Legal Notice", link: "#" },
    { name: "Privacy Notice", link: "#" },
    { name: "Cookie Policy", link: "#" },
    { name: "Accessibility", link: "#" },
    { name: "Sitemap", link: "#" },
  ];

  const [newsLetter, setNewsLetter] = useState("");

  // submitNewLetter()
  function submitNewLetter() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (window) {
      if (emailRegex.test(newsLetter)) {
        window.alert("Thank you for subscribing to our newsletter!");
        setNewsLetter("");
      } else {
        window.alert("Please enter a valid email address.");
      }
    }
  }

  return (
    <>
      <footer
        className="footer"
        id="desktop__footer"
        style={pathname.includes("/admin") ? { display: "none" } : {}}
      >
        <section className="page-width">
          {/* main footer */}
          <div className="footer-main pt-[7.5rem] pb-[7.5rem] w-full flex justify-between items-start">
            {/* footer left goes */}
            <div className="footer-left">
              <Link href={"/"}>
                <Logo color="var(--red)" />
              </Link>
              <div className="footer-links mt-[2.1rem]">
                {links?.map((link, ind) => {
                  return (
                    <Link
                      key={uniqid("footerlink")}
                      className={
                        ind != 0
                          ? `ml-[2.5rem] footer-link`
                          : `footer-link first-footer-link`
                      }
                      href={link?.link}
                    >
                      {link?.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* footer left end */}
            {/* footer right goes */}
            <div className="footer-right">
              <div>
                <label className="newsletter--label" htmlFor="newsletter">
                  Join our newsletter
                </label>
                <div className="mt-[1rem]">
                  <input
                    className="pl-[1.5rem] w-[25rem] h-[4rem]"
                    id="newsletter"
                    type="text"
                    placeholder="Enter Your Email"
                    name="newsLetter"
                    value={newsLetter}
                    onChange={(e) => {
                      setNewsLetter(e.target.value);
                    }}
                  />
                  <Button
                    text={"Subscribe"}
                    classNames={"subscribe_btn"}
                    onClick={() => {
                      submitNewLetter();
                    }}
                  />
                </div>
                {/* footer social goes  */}
                <div className="mt-[2.5rem] footer-socials flex items-center">
                  <label>Follow us on:</label>
                  <div className="flex w-[10.9rem] ml-[1rem] justify-between">
                    {/* <Link href="#">
                      <FacebookIcon />
                    </Link>
                    <Link href="">
                      <InstagramIcon />
                    </Link> */}
                    <Link href="https://www.linkedin.com/company/pace-sports-and-entertainment-pvt-ltd/">
                      <LinkedinIcon />
                    </Link>
                    {/* <Link href="">
                      <TwitterIcon />
                    </Link> */}
                  </div>
                </div>
                {/* footer social end */}
              </div>
            </div>
            {/* footer right end */}
          </div>
          {/* subfooter goes*/}
          <section className="subfooter flex justify-between items-center py-[2.5rem]">
            <p>© 2024 PACE . All right reserved</p>
            <div className="footer-links ">
              {subLinks?.map((link, ind) => {
                return (
                  <Link
                    className={
                      ind != 0 ? `ml-[2.5rem] footer-link` : `footer-link`
                    }
                    href={link?.link}
                    key={uniqid("subfooter_link")}
                  >
                    {link?.name}
                  </Link>
                );
              })}
            </div>
          </section>
          {/* subfooter end*/}
        </section>
      </footer>
    </>
  );
}
