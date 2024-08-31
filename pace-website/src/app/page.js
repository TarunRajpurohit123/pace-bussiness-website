import HomeBrands from "../components/components/HomeBrands";
import HomeCta from "../components/components/HomeCta";
import HomeHighlightCarousel from "../components/components/HomeHighlightCarousel";
import HomeStatics from "../components/components/HomeStatics";
import HomeThreePillar from "../components/components/HomeThreePillar";
import HomeVideoComponent from "../components/components/HomeVideoComponent";
import HomeWelcome from "../components/components/HomeWelcome";

export default function Home() {
  return (
    <>
      <HomeVideoComponent />
      <HomeWelcome />
      <HomeBrands />
      <HomeThreePillar />
      <HomeStatics />
      {/* <HomeHighlightCarousel /> */}
      <HomeCta />
    </>
  );
}
