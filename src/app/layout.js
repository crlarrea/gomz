import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import Header from "@/components/header/header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
