import React from "react";
import { getHomeBanner } from "@/sanity/lib/queries";
import HeroSection from "@/components/home/HeroSection";
import PropertyDescription from "@/components/home/PropertyDescription";
import Gallery from "@/components/home/Gallery";
import OurLocation from "@/components/home/OurLocation";
import CallNow from "@/components/home/CallNow";
import LocalAttractions from "@/components/home/LocalAttractions";
import DiningAndNight from "@/components/home/DiningAndNight ";
import Video from "@/components/home/Video";
const img = "/images/banner.jpeg";
export default async function HomePage() {
  const homeBanner = await getHomeBanner();
  return (
    <div>
      <HeroSection
        title="Villa Intendencia"
        description="A Turnkey Multi-Property Gem in the Heart of Downtown Pensacola’s Historic Seville District"
        img={homeBanner?.image?.asset?.url || img}
      />
      <PropertyDescription
        title="Property Description"
        description="A Turnkey Multi-Property Gem in the Heart of Downtown Pensacola’s Historic Seville District Welcome to Villa Intendencia, a rare and exceptional opportunity to own a fully renovated, professionally designed, and turnkey multi-family compound in one of the most sought-after neighborhoods in Pensacola—the charming and walkable Seville Historic District.
"
      />
      <Gallery />
      <Video />
      <PropertyDescription
        title="Seville District"
        description="Villa Intendencia is nestled in the heart of Pensacola’s Seville Historic District, one of the oldest and most vibrant neighborhoods in the state. With its tree-lined streets, 19th-century homes and brick sidewalks, the area exudes charm and walkability. Seville Square, the neighborhood’s stunning live oak lined park, hosts major festivals like Pensacola JazzFest, Pensacola Seafood Festival, and Great Gulfcoast Arts Festival. 
You're just steps from Palafox Street, consistently ranked one of America’s Great Streets."
      />
      <LocalAttractions />
      <DiningAndNight />
      <OurLocation />
      <CallNow />
    </div>
  );
}
