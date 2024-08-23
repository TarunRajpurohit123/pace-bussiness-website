import CompanyProfile from "./(components)/CompanyProfile";
import AboutCards from "./(components)/AboutCards";
import Zigzag from "@/components/ui/zigzag";
import CTA from "./(components)/CTA";
import Hero2 from "../components/Hero2";

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
