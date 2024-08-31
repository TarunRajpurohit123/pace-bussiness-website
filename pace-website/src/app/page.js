import HomeBrands from "../components/components/HomeBrands";
import HomeCta from "../components/components/HomeCta";
import HomeStatics from "../components/components/HomeStatics";
import HomeThreePillar from "../components/components/HomeThreePillar";
import HomeVideoComponent from "../components/components/HomeVideoComponent";
import HomeWelcome from "../components/components/HomeWelcome";

import dynamic from "next/dynamic";
const HomeHighlightCarousel = dynamic(
  () => import("../components/components/HomeHighlightCarousel"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <HomeVideoComponent />
      <HomeWelcome />
      <HomeBrands />
      <HomeThreePillar />
      <HomeStatics />
      <HomeHighlightCarousel />
      <HomeCta />
    </>
  );
}
