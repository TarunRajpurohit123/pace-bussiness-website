import InvestorCTA from "@/components/components/InvestorCTA";
import HomeBrands from "../components/components/HomeBrands";
import HomeCta from "../components/components/HomeCta";
import HomeStatics from "../components/components/HomeStatics";
import HomeThreePillar from "../components/components/HomeThreePillar";
import HomeVideoComponent from "../components/components/HomeVideoComponent";
import HomeWelcome from "../components/components/HomeWelcome";

import dynamic from "next/dynamic";
import PageOcc from "@/components/PageOcc";
import HomeVideoComponentMobile from "@/components/components/HomeVideoComponentMobile";
const HomeHighlightCarousel = dynamic(
  () => import("../components/components/HomeHighlightCarousel"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <PageOcc />
      <HomeVideoComponent />
      <HomeVideoComponentMobile />
      <div>
        <HomeWelcome />
        <HomeBrands />
        <HomeThreePillar />
      </div>
      <HomeStatics />
      {/* <HomeHighlightCarousel /> */}
      {/* <HomeCta /> */}
    </>
  );
}
