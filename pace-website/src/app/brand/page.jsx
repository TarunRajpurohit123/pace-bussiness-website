import BrandCards from "@/components/components/BrandCards";
import BrandGrid from "@/components/components/BrandGrid";
import BrandGridMainSection from "@/components/components/BrandGridMainSection";
import Hero2 from "@/components/components/Hero2";
import HomeCta from "@/components/components/HomeCta";
import HomeWelcome from "@/components/components/HomeWelcome";

export default function Page() {
  return (
    <>
      <Hero2
        title="Our Brands"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      />
      <BrandGridMainSection />
      <HomeWelcome />
      <BrandCards />
      <BrandGrid />
      <HomeCta />
    </>
  );
}
