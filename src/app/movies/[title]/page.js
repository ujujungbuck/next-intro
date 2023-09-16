"use client";
import { usePathname } from "next/navigation";

export default function MovieId() {
  const pathname = usePathname();
  return (
    <div>
      <h4>{pathname.slice(8).split("%20").join(" ") || "Loading"}</h4>
      <style jsx>{`
        h4 {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
