import { Badge } from "@/components";
import Image from "next/image";
import React from "react";

const CompanyProfile = () => {
  return (
    <section className="about__company_profile_section page-width flex justify-between">
      <div className="acp__left">
        {/* row 1 start*/}
        <div className="acp__left_row flex justify-between">
          <Image
            src={"/main/group/1.png"}
            width="415"
            height="228"
            className="acp_r1_i1 acp_r1_i1_margin"
            alt="image"
          />
          <Image
            src={"/main/group/2.png"}
            width="200"
            height="228"
            className="acp_r1_i2 acp_desktop_image"
            alt="image"
          />
          <Image
            src={"/r1i1.jpeg"}
            width="415"
            height="228"
            className="acp_r1_i2 acp_mobile_image"
            alt="image"
            style={{ marginTop: 0 }}
          />
        </div>
        {/* row 1 end */}
        {/* row 2 start*/}
        <div className="acp__left_row flex justify-between mt-[2.5rem]">
          <Image
            src={"/main/group/3.png"}
            width="200"
            height="228"
            className="acp_r2_i1 acp_desktop_image"
            alt="image"
          />
          <Image
            src={"/main/group/4.png"}
            width="415"
            height="228"
            className="acp_r2_i2 "
            alt="image"
          />
          <Image
            src={"/r1i1.jpeg"}
            width="415"
            height="228"
            className="acp_r1_i2 acp_mobile_image"
            alt="image"
          />
        </div>
        {/* row 2 end */}
        {/* row 3 start*/}
        <div className="acp__left_row flex justify-between mt-[2.5rem]">
          <Image
            src={"/main/group/5.png"}
            width="415"
            height="228"
            className="acp_r1_i1"
            alt="image"
          />
          <Image
            src={"/main/group/6.png"}
            width="200"
            height="228"
            className="acp_r1_i2 acp_desktop_image"
            alt="image"
          />
          <Image
            src={"/r1i1.jpeg"}
            width="415"
            height="228"
            className="acp_r1_i2 acp_mobile_image"
            alt="image"
          />
        </div>
        {/* row 3 end */}
      </div>
      <div className="acp__right">
        {/* <Badge>About our organization</Badge> */}
        <h1>Company Profile</h1>
        <p>
          Founded in 2015 with the launch of Cot and Candy, <span>PACE</span>{" "}
          Ecommerce Ventures Ltd began its journey with a clear vision of
          creating impactful and meaningful brands. Over the years,{" "}
          <span>PACE</span> strategically expanded its portfolio, launching
          Homepost in 2020 to cater to the growing demand for stylish home
          decor, followed by Ostilos in 2023, a bold entry into the premium
          fashion market.
        </p>
        <p>
          Recognizing emerging opportunities, <span>PACE</span> rapidly
          diversified in 2024, introducing Zwankee, a global fashion platform,
          Zwankee Global for B2B clothing, <span>PACE</span> Print Innovations
          to offer advanced printing and packaging solutions, and Wishrows, a
          print-on-demand brand. Each brand was launched with meticulous
          planning, targeting specific market segments with high growth
          potential.
        </p>
        <p>
          Today, <span>PACE</span> has established a strong foothold across
          multiple industries, demonstrating a keen understanding of market
          dynamics and consumer needs. With a relentless focus on innovation and
          quality,
          <span>PACE</span> continues to drive growth and is poised to expand
          even further, solidifying its presence and influence in both existing
          and new markets.
        </p>
      </div>
    </section>
  );
};

export default CompanyProfile;
