export const revalidate = 0;
import HeroSection from "@/components/home/HeroSection";
import ReturnOfInvestment from "@/components/home/ReturnOfInvertment";
import { getPropertyDescriptionBanner } from "@/sanity/lib/queries";
import Image from "next/image";
import React from "react";
const img = "/images/perperty-description.jpeg";
const img1 = "/images/perperty-description1.jpg";
const img2 = "/images/perperty-description5.png";
const img4 = "/images/Image 4-13-25 at 9.22 AM.jpeg";
export default async function page() {
  const propertyDescriptionBanner = await getPropertyDescriptionBanner();
  return (
    <div>
      <HeroSection
        title="Property description"
        description="A Turnkey Multi-Property Gem in the Heart of Downtown Pensacola’s Historic Seville District"
        img={propertyDescriptionBanner?.image?.asset?.url || img}
      />
      {/* font-bold */}
      <div className="px-[4.1vw] space-y-6 ">
        <div className="w-full relative aspect-[16/9] mt-8" data-aos="fade-up">
          <Image
            src={img1}
            alt="Downtown Pensacola"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>{" "}
        <div className="lg:text-xl  space-y-6" data-aos="fade-up">
          <p className="font-bold">
            A Turnkey Multi-Property Gem in the Heart of Downtown Pensacola’s
            Historic Seville District{" "}
          </p>
          <p>
            {" "}
            Welcome to <span className="font-bold">Villa Intendencia</span>, a
            rare and exceptional opportunity to own a fully renovated,
            professionally designed, and turnkey multi-family compound in one of
            the most sought-after neighborhoods in Pensacola—the charming and
            walkable{" "}
            <span className="font-semibold">Seville Historic District</span>.
          </p>
          <p>
            {" "}
            Comprised of{" "}
            <span className="font-bold">
              {" "}
              three separate residences across two parcels
            </span>
            , this stunning property package seamlessly blends historic
            character with modern amenities. Every structure has been
            thoughtfully renovated or built new in 2022 with full permitting,
            inspections, and no detail overlooked. Whether you’re looking for an{" "}
            <span className="font-bold">owner-occupy + rental </span>setup, aa{" "}
            <span className="font-bold">multigenerational estate</span>, or a{" "}
            <span className="font-bold">{" "}
              income-producing short-term or long-term rental investment
            </span>{" "}
            , Villa Intendencia offers unparalleled flexibility, location, and
            comfort.
          </p>
          <p>
            This property is being sold{" "}
            <span className="font-bold">fully furnished</span>—everything you
            see conveys, from high-end furnishings and art to linens, dishware,
            kitchen appliances, beach gear, bicycles and Smart TVs. It’s 100%
            turnkey, allowing you to begin operating or enjoying immediately.
          </p>
        </div>
        <h2
          className="lg:text-6xl text-3xl text-center mt-8"
          data-aos="fade-up"
        >
          Property Description
        </h2>
        <div className="w-full relative aspect-[16/9]" data-aos="fade-up">
          <Image
            src={img2}
            alt="Downtown Pensacola"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1
          className="2xl:text-4xl sm:text-[2.8vw] text-lg mb-4"
          data-aos="fade-up"
        >
          423 E Intendencia St – The Historic Front House (2BR/1BA)
        </h1>
        <div
          className="space-y-6 text-base lg:text-xl text-gray-800"
          data-aos="fade-up"
        >
          <p>
            Originally constructed in 1895, this classic cottage was taken down
            to the studs and completely rebuilt in 2022.
          </p>

          <div>
            <p className="font-bold mb-2">All new major systems include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>New water & sewer lines</li>
              <li>Spray foam insulation</li>
              <li>All new electrical & plumbing</li>
              <li>New roof</li>
              <li>New foundation and leveled floors</li>
              <li>High-end windows</li>
              <li>Bosch HVAC system (whisper-quiet and efficient)</li>
            </ul>
          </div>

          <p>
            This 2-bedroom, 1-bath home features a spacious living room, dining
            area, and chef’s kitchen with a gas stove/air fryer combo and modern
            appliances. Elegant finishes, professional décor, and fully
            outfitted amenities make this a top-performing short-term rental.
          </p>

          <div>
            <p className="font-bold mb-2">Outdoor features:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Covered front porch</li>
              <li>Private paver patio with firepit</li>
              <li>Private off-street parking + street parking</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-2">Technology & Comfort:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>High-speed 280MB Wi-Fi</li>
              <li>Smart TVs in all rooms</li>
              <li>Hotel-quality linens & towels</li>
              <li>Washer & dryer</li>
            </ul>
          </div>

          <p>Sleep up to 4</p>
        </div>
        <div className="w-full relative aspect-[16/9]">
          <Image
            src={img4}
            alt="Downtown Pensacola"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1
          className="2xl:text-4xl sm:text-[2.8vw] text-lg mb-4"
          data-aos="fade-up"
        >
          421 E Intendencia St – Modern Two-Level Duplex + Garage (Built New in
          2022)
        </h1>
        <div
          className="space-y-8 text-base lg:text-lg text-gray-800"
          data-aos="fade-up"
        >
          {/* Built in 2022 Description */}
          <p>
            <span className="font-bold">
              This structure was newly built from the ground up in 2022,
            </span>{" "}
            offering two distinct and private living spaces across two
            levels—each with its own entrance, outdoor space and fully-equipped
            kitchen.
          </p>

          {/* Upper Unit */}
          <div>
            <p className="font-bold">Upper Unit (2BR/1BA)</p>
            <p>
              A serene treetop escape with 10-foot ceilings, leather sectional,
              fireplace (decorative), Smart TVs, elegant kitchen with induction
              stove and island seating and a private covered balcony shaded by
              bamboo.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Garage parking</li>
              <li>In-unit washer/dryer</li>
              <li>Luxury linens, beach gear, and cruiser bikes included</li>
              <li>Desk space for remote work</li>
              <li>Sleep 4</li>
            </ul>
          </div>

          {/* Lower Unit */}
          <div>
            <p className="font-bold">Lower Unit (1BR/1BA)</p>
            <p>
              A romantic hideaway suite with a king bed, large induction
              kitchen, dedicated living area, Smart TV and private courtyard
              patio with outdoor seating and dining.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Separate entrance</li>
              <li>Fully equipped kitchen</li>
              <li>Sleep 2</li>
              <li>Private off-street parking space</li>
            </ul>
          </div>

          {/* Features Across Compound */}
          <div>
            <p className="font-bold">Additional Features Across the Compound</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Large 2-car garage with storage</li>
              <li>Multiple outdoor seating areas</li>
              <li>Grassy green spaces for pets or relaxation</li>
              <li>Thoughtful landscaping and privacy fencing</li>
              <li>Professionally designed interior</li>
              <li>
                Extensive inventory included: cookware, dishware, glassware,
                bedding, furniture, art, TVs, appliances and outdoor furnishings
              </li>
            </ul>
          </div>

          {/* Proximity */}
          <div>
            <p className="font-bold uppercase text-sm tracking-wide">
              Proximity
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>15 minutes to Pensacola Beach</li>
              <li>15 minutes to NAS Pensacola</li>
              <li>15 minutes to Pensacola International Airport</li>
              <li>No HOA and no pay-to-park hassle</li>
            </ul>
          </div>

          {/* Investment Highlights */}
          <div>
            <p className="font-bold uppercase text-sm tracking-wide">
              Investment Highlights
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                High-performing short-term rental history (Airbnb superhosts
                since 2014)
              </li>
              <li>Zoned HR-1 Historic District Residential</li>
              <li>Owner-occupy or invest with flexibility</li>
              <li>Professionally maintained and managed</li>
              <li>
                Fully turnkey – furnishings, décor, kitchenware, linens and all
                appliances included
              </li>
              <li>Unit is a long term and currently rents for $2300</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <ReturnOfInvestment /> */}
      <div
        className="bg-[#b3c6c9] py-10 px-[4.1vw] flex justify-end"
        data-aos="fade-up"
      >
        <div className="flex items-start gap-8 max-w-4xl">
          <h1 className="text-[10px] lg:text-xs uppercase tracking-wider text-gray-800 leading-snug text-right max-w-xl">
            This is more than just a property—Villa Intendencia is a curated
            experience, a slice of Pensacola history, and a smart investment all
            rolled into one move-in or rent-ready masterpiece. immediately
          </h1>
          <div className="w-[2px] h-14 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
