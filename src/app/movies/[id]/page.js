"use client";
//import { useRouter } from "next/navigation";
//import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
export default function MovieId() {
  //const router = useRouter();
  //const pathname = usePathname();
  const searchParams = useSearchParams();
  //console.log(router);
  //console.log(pathname);
  console.log(searchParams);
  return "mobie idd";
}
