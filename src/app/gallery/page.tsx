export const revalidate = 0;

import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import React from "react";
import { getGalleryBanner, getGalleryImagesSquare } from "@/sanity/lib/queries";
const heroImg = "/images/galleryBanner.jpeg";
type GalleryImage = {
  imageSquare?: {
    asset?: {
      url: string;
    };
  };
};
export default async function page() {
  let galleryImagesSquare = await getGalleryImagesSquare();
  galleryImagesSquare = galleryImagesSquare.map((item: GalleryImage) => {
    return item?.imageSquare?.asset?.url || heroImg;
  });
  const galleryBanner = await getGalleryBanner();
  return (
    <div className="overflow-hidden">
      <HeroSection
        title="Gallery"
        description="Coastal Luxury Captured — Step Inside Our Handpicked Beachfront Retreats"
        img={galleryBanner?.image?.asset?.url || heroImg}
      />

      <div className="w-full bg-black mx-auto 2xl:px-20 px-[3vw] py-12">
        <div className="grid lg:grid-cols-2 2xl:gap-20 gap-[3vw]">
          {galleryImagesSquare.map((image: string, index: number) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image}
                fill
                alt={`Modern house image ${index + 1}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
