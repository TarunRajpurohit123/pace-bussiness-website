import CompanyProfile from "../../components/components/CompanyProfile";
import AboutCards from "../../components/components/AboutCards";
import Zigzag from "@/components/ui/zigzag";
import CTA from "../../components/components/CTA";
import Hero2 from "../../components/components/Hero2";

export default function About() {
  return (
    <>
      <Hero2 />
      <CompanyProfile />
      <AboutCards />
      <Zigzag
        styles={{
          padding: "7.5rem 0 7.5rem 0",
        }}
      />
      <CTA />
    </>
  );
}
