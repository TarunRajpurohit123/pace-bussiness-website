import PageOcc from "@/components/PageOcc";
import BrandCards from "@/components/components/BrandCards";
import BrandGrid from "@/components/components/BrandGrid";
import BrandGridMainMobile from "@/components/components/BrandGridMainMobile";
import BrandGridMainSection from "@/components/components/BrandGridMainSection";
import BrandStrip from "@/components/components/BrandStrip";
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
      <BrandGridMainMobile />
      <BrandStrip />
      <HomeWelcome
        extClass="brand--welcoome"
        isHeading={false}
        content={
          "PACE  is home to a distinguished portfolio of brands spanning multiple lifestyle sectors. Each of our brands-ranging from fashion and kids’ essentials to home décor and print-on-demand solutions-reflects a deep commitment to quality, innovation, and customer satisfaction. With a legacy rooted in excellence, PACE continues to evolve, offering a seamless blend of functionality and style, making it the ultimate destination for diverse lifestyle needs and aspirations."
        }
      />
      <BrandCards />
      <BrandGrid />
      <HomeCta />
    </>
  );
}
