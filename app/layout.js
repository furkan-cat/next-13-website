import { Inter } from "next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";
import Header from "@/componets/header";
import Footer from "@/componets/footer";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
