import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import Link from "next/link";
import { InquiryProvider } from "@/context/Inquiry-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Axis Remodeling – Where Trust is Built",
  description: "Peace of Mind. Our experts meet and exceed industry standards to ensure quality and protect your investment",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <InquiryProvider>
          <Navbar />
          {children}
          <Footer />
        </InquiryProvider>
      </body>
    </html>
  );
}
