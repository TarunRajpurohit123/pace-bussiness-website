import { Karla } from "next/font/google";
import "./globals.css";
import "./tablet-and-tablet.css";
import { Annoucebar, Footer, Navbar } from "@/components";
import MobileNavbar from "@/components/Navbar/MobileNavbar";

const inter = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Pace",
  description: "Ecommerce Ventures Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark-mode `}>
        <Annoucebar />
        <Navbar />
        <MobileNavbar />
        <section className="absolute global-abs top-[5rem] z-[-9]">
          {children}
          {/* <Footer /> */}
        </section>
      </body>
    </html>
  );
}
