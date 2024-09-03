import InvestorCTA from "../../components/components/InvestorCTA";
import FinancialCalender from "../../components/components/FinancialCalender";
import InvestorStatics from "../../components/components/InvestorStatics";
import LatestPress from "../../components/components/LatestPress";
import ReportSection from "@/components/components/ReportSection";
import Hero2 from "@/components/components/Hero2";
import PageOcc from "@/components/PageOcc";

export default function investors() {
  return (
    <>
      <PageOcc />
      <Hero2
        // className="pages_investor_wrapper"
        title="Investor Relation Highlights"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      />
      <LatestPress />
      <ReportSection />
      <InvestorStatics />
      <FinancialCalender />
      <InvestorCTA />
    </>
  );
}
