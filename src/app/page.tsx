import Header from "@/components/Header";
import { AuroraBackgroundDemo } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black text-white snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Header />
      <AuroraBackgroundDemo />
      <div className="w-full h-screen">3</div>
    </div>
  );
}
