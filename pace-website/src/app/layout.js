import localFont from "next/font/local";
import "./globals.css";
import "./tablet-and-tablet.css";
import { Annoucebar, Footer, Navbar } from "@/components";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import FontProvider from "./providers/fontProvider";
import ProgressBar from "@/components/ProgressBar";

export const metadata = {
  title: "Pace",
  description: "Ecommerce Ventures Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <FontProvider />
      <html lang="en">
        <body className={`dark-mode`}>
          <ProgressBar />
          <Annoucebar />
          <Navbar />
          <MobileNavbar />
          <section className="absolute global-abs top-[5rem] z-[-9]">
            {children}
            <Footer />
          </section>
        </body>
      </html>
    </>
  );
}
