import React from "react";
import Image from "next/image";
import style from "./Home.module.css"

const img1 = "/images/location-attraction1.jpeg";
const img2 = "/images/location-attraction2.jpeg";
const img3 = "/images/location-attraction3.jpeg";
const img4 = "/images/location-attraction4.jpeg";
const img5 = "/images/location-attraction5.jpeg";
const img6 = "/images/location-attraction6.jpeg";
const img7 = "/images/location-attraction7.jpeg";
const img8 = "/images/location-attraction8.jpeg";
const img9 = "/images/Dharma Blue restaurant.png";
const img10 = "/images/Hub Staceys Pub.png";
const img11 = "/images/Juans flying burrito.png";
const img12 = "/images/LUCY’S IN THE SQAURE.png";
const img13 = "/images/old christ church.png";
const img14 = "/images/Pensacola bay brewery.png";

const galleryImagesSquare = [
  { src: img1, label: "Historic Pensacola Village" },
  { src: img2, label: "Seville Square" },
  { src: img3, label: "Pensacola Museum of Art" },
  { src: img4, label: "Pensacola Museum of History" },
  { src: img5, label: "Tivoli High Housee" },
  { src: img6, label: "Saenger Theatre" },
  { src: img7, label: "Plaza Ferdinand VII" },
  { src: img8, label: "Veterans Memorial Park" },
  { src: img9, label: "Dharma Blue Restaurant" },
  { src: img10, label: "Hub Staceys Pub" },
  { src: img11, label: "Juans Flying Burrito" },
  { src: img12, label: "LUCY’S IN THE SQAURE" },
  { src: img13, label: "Old Christ Church" },
  { src: img14, label: "Pensacola Bay Brewery" },
];

export default function LocalAttractions() {
  return (
    <div className="w-full py-12 mb-20 relative">
      <div className="grid lg:grid-cols-2 relative">
        {galleryImagesSquare.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video group overflow-hidden"
          >
            {/* Image */}
            <Image
              src={image.src}
              fill
              alt={image.label}
              className={`object-cover transition duration-300`}
              data-aos="fade-up"
            />
            {/* Glare Overlay */}
            <div className={`absolute inset-0 ${style.imageGlare}`} />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#B0C5CA66] opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300"></div>

            {/* Text on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer  transition-opacity duration-300">
              <h2 className="text-2xl font-bold">{image.label}</h2>
            </div>
          </div>
        ))}

        {/* Rotated Label */}
        <h2 className="absolute right-0 top-1/2 -translate-y-1/2 text-nowrap rotate-270 translate-x-[45%] font-bold text-accent text-4xl md:text-7xl xl:text-8xl leading-none">Local Attractions</h2>
      </div>
    </div>
  );
}
