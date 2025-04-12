import React from "react";
import Image from "next/image";

const DiningAndNight = () => {
  return (
    <div className="  my-12 py-4 px-[4.1vw]">
      <h2
        className="2xl:text-3xl sm:text-[1.8vw] text-sm mb-4"
        data-aos="fade-up"
      >
        Dining & Night Life
      </h2>
      <div
        className="flex flex-col-reverse lg:flex-row gap-6"
        data-aos="fade-up"
      >
        {/* Main Image 75% - Now on the right in md screens due to flex-row-reverse */}
        <div className="lg:w-3/4 relative aspect-video">
          <Image
            src="/images/dining1.jpeg"
            alt="Seville Square nightlife"
            fill
            className="object-cover "
          />
          <div className="bg-black/20 w-full h-full inset-0 absolute" />
          <div className="bg-background/20 w-full h-full inset-0 absolute" />

          <div className="absolute bottom-0 text-right right-0  bg-opacity-50 text-white p-3 ">
            <h3 className="text-2xl font-medium ">Seville Square</h3>
            <p className="text-sm">
              A 7-room entertainment complex with live music, piano bars, dance
              clubs, and more
            </p>
          </div>
        </div>

        {/* Right Side Content - Now on the left in md screens */}
        <div className="lg:w-1/4 w-full relative flex flex-row-reverse lg:flex-col justify-between gap-10 items-end lg:items-start">
          {/* Text Description */}
          <div className="mb-4">
            <p className="text-sm ">
              Visit Seville&apos;s Palafox Row, where historic buildings line
              the streets. The neighborhood hosts fine dining, craft cocktail
              bars, and live music venues. Enjoy bustling atmospheres at
              establishments within easy walking distance from our location.
            </p>
          </div>

          {/* Small Image */}
          <div className="relative aspect-square hidden sm:block w-[400px] lg:w-full">
            <Image
              src="/images/dining2.jpeg"
              alt="Fine dining plate"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="bg-secondary/20 w-full h-full inset-0 absolute" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningAndNight;
