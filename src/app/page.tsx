import React from "react";
import { getHomeBanner } from "@/sanity/lib/queries";
import HeroSection from "@/components/home/HeroSection";
import PropertyDescription from "@/components/home/PropertyDescription";
import Gallery from "@/components/home/Gallery";
import ReturnOfInvestment from "@/components/home/ReturnOfInvertment";
// import DownTown from "@/components/home/DownTown";
import OurLocation from "@/components/home/OurLocation";
import CallNow from "@/components/home/CallNow";

const img = "/images/banner.jpeg";
export default async function HomePage() {
  const homeBanner = await getHomeBanner();
  return (
    <>
      <HeroSection
        title="Villa Intendencia"
        description="A Turnkey Multi-Property Gem in the Heart of Downtown Pensacola’s Historic Seville District"
        img={homeBanner?.image?.asset?.url || img}
      />
      <PropertyDescription />
      <Gallery />
      <ReturnOfInvestment />
      {/* <DownTown /> */}
      <OurLocation />
      <CallNow />
    </>
  );
}
