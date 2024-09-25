import PageOcc from "@/components/PageOcc";
import BrandCards from "@/components/components/BrandCards";
import BrandGrid from "@/components/components/BrandGrid";
import BrandGridMainSection from "@/components/components/BrandGridMainSection";
import Hero2 from "@/components/components/Hero2";
import HomeCta from "@/components/components/HomeCta";
import HomeWelcome from "@/components/components/HomeWelcome";

export default function Page() {
  return (
    <>
      <PageOcc />
      <Hero2
        title="Our Brands"
        content="With 7 esteemed brands spanning 5 sectors, PACE is dedicated to revolutionalize these sectors, all while ensuring a steadfast commitment to the highest product standards."
      />
      <BrandGridMainSection />
      <HomeWelcome />
      <BrandCards />
      <BrandGrid />
      <HomeCta />
    </>
  );
}
