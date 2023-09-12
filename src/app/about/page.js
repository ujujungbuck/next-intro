"use client";
import Seo from "../Seo";

export default function About() {
  return (
    <div>
      <Seo title="About" />
      about page
      <style jsx global>{`
        div {
          background-color: tomato;
        }
      `}</style>
    </div>
  );
}
