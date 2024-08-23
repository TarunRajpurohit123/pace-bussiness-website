import { SparklesPreview } from "@/components/ui/sparklesPreview";
import CompanyProfile from "./(components)/CompanyProfile";
import AboutCards from "./(components)/AboutCards";
import Zigzag from "@/components/ui/zigzag";
import CTA from "./(components)/CTA";

export default function About() {
  return (
    <>
      <SparklesPreview heading="About us" />
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
