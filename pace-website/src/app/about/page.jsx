import CompanyProfile from "../../components/components/CompanyProfile";
import AboutCards from "../../components/components/AboutCards";
import Zigzag from "@/components/ui/zigzag";
import CTA from "../../components/components/CTA";
import Hero2 from "../../components/components/Hero2";
import TimelineGroup from "@/components/components/TimelineGroup";
import PageOcc from "@/components/PageOcc";
import CareerSection1 from "@/components/components/CareerSection1";
import AboutCoverFlowSlider from "@/components/components/AboutCoverFlowSlider";
import CTA_Group_Mobile from "@/components/components/CTA_Group_Mobile";

export default function About() {
  return (
    <>
      <PageOcc />
      <Hero2 />
      <CompanyProfile />
      <AboutCards extclass={"about__aboutcardz"} />
      {/* <AboutCoverFlowSlider /> */}
      <Zigzag
        styles={{
          padding: "7.5rem 0 7.5rem 0",
        }}
      />
      {/* timeline */}
      <TimelineGroup />
      {/* <CareerSection1 /> */}
      <CTA />
      <CTA_Group_Mobile />
    </>
  );
}
