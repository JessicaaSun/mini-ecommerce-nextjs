import NavbarComponent from "@/components/common/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import FooterComponent from "@/components/common/Footer";
import thumbnail from "../../public/images/thumbnail.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jules",
  description: "Your 24/7 shopping place",
  openGraph: {
    images: [
      {
        url: thumbnail,
        alt: "Jules Thumbnail",
      },
    ],
    title: "Jules",
    description: "Your 24/7 shopping place",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <NavbarComponent />
        <div className="pt-12">{children}</div> <FooterComponent />
      </body>
    </html>
  );
}
