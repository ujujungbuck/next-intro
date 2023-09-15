"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>Not found🤷🏻 – 404</h1>
      <div>
        <Link href="/">click to Home</Link>
      </div>
      <style jsx>{`
        .notfound {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin: 100px;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
