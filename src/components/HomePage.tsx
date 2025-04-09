import React from "react";
import HeroSection from "./home/HeroSection";
import ServicesAreas from "./home/ServicesAreas";
import CallNow from "./home/CallNow";
import Gallery from "./home/Gallery";
import DownTown from "./home/DownTown";
import SimpleText from "./home/SimpleText";
import ReturnOfInvestment from "./home/ReturnOfInvertment";
import { getHomeBanner } from "@/sanity/lib/queries";

const img = "/images/banner.jpeg";
export default async function HomePage() {
  const homeBanner = await getHomeBanner();
  return (
    <div>
      <HeroSection
        title="Villa intendencia"
        description="Where luxury meets legacy - crafting timeless estates for a prestigious tomorrow"
        img={homeBanner?.image?.asset?.url || img}
      />
      <SimpleText />
      <Gallery />
      <ReturnOfInvestment />
      <DownTown />
      <ServicesAreas />
      <CallNow />
    </div>
  );
}
