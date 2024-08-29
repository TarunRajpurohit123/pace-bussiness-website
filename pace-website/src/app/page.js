import HomeBrands from "./components/HomeBrands";
import HomeCta from "./components/HomeCta";
import HomeHighlightCarousel from "./components/HomeHighlightCarousel";
import HomeStatics from "./components/HomeStatics";
import HomeThreePillar from "./components/HomeThreePillar";
import HomeVideoComponent from "./components/HomeVideoComponent";
import HomeWelcome from "./components/HomeWelcome";

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
