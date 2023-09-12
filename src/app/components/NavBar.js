"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/" style={{ color: pathname === "/" ? "yellow" : "" }}>
        Home
      </Link>
      <Link href="/about" style={{ color: pathname === "/about" ? "red" : "" }}>
        About
      </Link>
      <style jsx global>{`
        nav {
          background-color: pink;
        }
      `}</style>
    </nav>
  );
}
