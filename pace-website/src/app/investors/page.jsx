import Hero from "../components/Hero";
import CTA from "./CTA";
import FinancialCalender from "./FinancialCalender";
import InvestorStatics from "./InvestorStatics";
import ReportSection from "./ReportSection";

export default function investors() {
  return (
    <>
      <Hero
        isContact={false}
        title="Investor Relation Highlights"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      />
      <ReportSection />
      <InvestorStatics />
      <FinancialCalender />
      <CTA />
    </>
  );
}
