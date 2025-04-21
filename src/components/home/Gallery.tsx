export const revalidate = 0;
import React from "react";
import GallerySwiper from "./GallerySwiper";
import { getOrderedGallery } from "@/sanity/lib/queries";
export type GallerySlide = {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  imageSquare: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export default async function Gallery() {
  const slides = (await getOrderedGallery()).images;

  return (
    <div className="w-full py-12">
      {/* Gallery heading */}
      <h2 className="lg:text-6xl text-3xl pl-[4.5vw]" data-aos="fade-up">
        Gallery
      </h2>
      <GallerySwiper slides={slides} />
    </div>
  );
}
