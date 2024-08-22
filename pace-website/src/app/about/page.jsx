import { SparklesPreview } from "@/components/ui/sparklesPreview";
import CompanyProfile from "./(components)/CompanyProfile";
import AboutCards from "./(components)/AboutCards";

export default function About() {
  return (
    <>
      <SparklesPreview heading="About us" />
      <CompanyProfile />
      <AboutCards />
    </>
  );
}
