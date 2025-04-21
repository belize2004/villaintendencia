export const revalidate = 0;

import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import React from "react";
import {
  getGalleryBanner,
  getGalleryImagesSquare,
  getOrderedGallery,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { GallerySlide } from "@/components/home/Gallery";
const heroImg = "/images/galleryBanner.jpeg";

export default async function page() {
  let galleryImages: GallerySlide[] = (await getOrderedGallery()).images;
  const galleryBanner = await getGalleryBanner();
  return (
    <div className="overflow-hidden">
      <HeroSection
        title="Gallery"
        description="Coastal Luxury Captured — Step Inside Our Handpicked Beachfront Retreats"
        img={galleryBanner?.image?.asset?.url || heroImg}
      />

      <div className="w-full mx-auto 2xl:px-20 px-[3vw] py-12 mb-20">
        <div className="grid lg:grid-cols-2 2xl:gap-20 gap-[3vw]">
          {galleryImages.map((slide, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={urlFor(slide.image).url()}
                fill
                alt={`Modern house image ${index + 1}`}
                className="object-cover bg-accent"
                data-aos="fade-up"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
