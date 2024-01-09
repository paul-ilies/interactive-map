"use client";
import SearchItems from "@/components/search-items";
import Tools from "@/components/tools";
import Navbar from "@/components/ui/navbar";
import dynamic from "next/dynamic";

const useMediaQuery = dynamic(()=>import("@/hooks/useMediaQuery"))

export default function Home() {

  const isMediumDevice = useMediaQuery("only screen and (max-width : 1000px)");



  return (
    <div className="flex flex-col h-full bg-gray-200">
      {isMediumDevice ? (
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="text-3xl">This is for desktop only</h1>
          <p>Switch to desktop to get the most of it</p>
        </div>
      ) : (
        <>
          <Navbar />
          <SearchItems />
          <Tools/>
        </>
      )}
    </div>
  );
}
