import BrandCards from "@/components/components/BrandCards";
import Hero2 from "@/components/components/Hero2";
import HomeWelcome from "@/components/components/HomeWelcome";

export default function Page() {
  return (
    <>
      <Hero2
        title="Our Brands"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      />
      <HomeWelcome />
      <BrandCards />
    </>
  );
}
