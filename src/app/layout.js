"use client";
import NavBar from "./components/NavBar";
//import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <style jsx global>{`
          body {
            max-width: 520px;
            width: 100%;
            margin: 0 auto;
            background-color: white;
            color: gray;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          .active {
            color: #c34261;
          }
          h3 {
            margin: 10px 185px;
            color: gray;
          }
        `}</style>
      </body>
    </html>
  );
}
