import NavbarComponent from "@/components/common/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import FooterComponent from "@/components/common/Footer";
import thumbnail from "../../public/images/thumbnail.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jules",
  description: "Your 24/7 shopping place",
  thumbnail: "https://advancedbytez.com/wp-content/uploads/2022/03/Accessibility-for-your-Online-eCommerce-Store.jpg",
  openGraph: {
    images:
      "https://advancedbytez.com/wp-content/uploads/2022/03/Accessibility-for-your-Online-eCommerce-Store.jpg",
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
