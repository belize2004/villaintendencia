import React from "react";
import GallerySwiper from "./GallerySwiper";
import { getGalleryItems } from "@/sanity/lib/queries";
export type GallerySlide = {
  _id: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  area: number;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export default async function Gallery() {

  const slides: GallerySlide[] =  await getGalleryItems();

  return (
    <div className="w-full bg-black text-white py-12">
      {/* Gallery heading */}
      <p className="lg:text-6xl text-3xl pl-[4.5vw]">Gallery</p>
      <GallerySwiper slides={slides} />
    </div>
  );
}
