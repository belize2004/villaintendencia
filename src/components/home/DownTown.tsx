import { getDowntownPansacola } from "@/sanity/lib/queries";
import Image from "next/image";
import React from "react";
const img = "/images/downtown.jpeg";

export default async function DownTown() {
  const downtownImg = await getDowntownPansacola();
  return (
    <div className="w-full mx-auto    py-12 space-y-5 ">
      <p className="lg:text-6xl text-3xl text-center py-5">
        DownTown <br />
        Pensacola
      </p>
      <div className="w-full relative aspect-[16/9]">
        <Image
          src={downtownImg?.image?.asset?.url || img}
          alt="Downtown Pensacola"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
