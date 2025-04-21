import React from "react";
import Image from "next/image";
import Phone from "@/icons/Phone";
import Link from "next/link";

const CallNow = () => {
  return (
    <div className="w-full py-20 bg-primary">
      <div className="2xl:container mx-auto px-6   2xl:px-8">
        <div>
          <div className="md:w-1/2 mx-auto aspect-square relative" data-aos="fade-right">
            <Image
              src="/images/person.jpg"
              alt="Service Areas Map"
              fill
              className="object-cover"
            />
          </div>
          <div className="mb-5 md:mb-10 p-[2vw] lg:mb-0">
            <h2 className="2xl:text-6xl  md:text-[3.8vw] text-[6vw]  font-light mb-12 mr-2" data-aos="fade-up">
              Take Off Meet
            </h2>

            <div className="gap-5 md:gap-16">
              {/* Left column of areas */}
              <div className="2xl:text-xl sm:text-[1.3vw]  text-[4vw] font-light space-y-3">
                <p data-aos="fade-up" className="flex flex-col">
                  <span>Owner, Coastal Link Properties LLC and Link Realty Gulf Coast LLC</span>
                  <span>Licensed Broker, Florida & Alabama</span>
                </p>
                <p data-aos="fade-up">Caroline Jordan is a licensed Realtor and broker in both Alabama and Florida, and the founder of Link Realty Gulf Coast a real estate agency, and Coastal Link Properties a boutique vacation rental and real estate management company serving the Gulf Coast. With more than a decade of experience in real estate and property management, Caroline has built a business rooted in integrity, connection, and exceptional service.</p>

                <p data-aos="fade-up">
                  Originally from Gulfport, Mississippi, Caroline fell in love with the Alabama and Northwest Florida coast during her younger years, eventually settling in Orange Beach where she launched her real estate career. After working with RE/MAX and gaining experience in everything from appraisals to design, she took over the vacation rental business, Rental Link, in 2014 and rebranded it as Coastal Link Properties. At the same time Caroline started Link Realty Gulf Coast, where she serves as broker and agent helping both buyers and sellers in their real estate journeys. Today, she operates both companies from Pensacola, Florida, managing a growing portfolio of investment properties and real estate listings along the Alabama and Northwest Florida coasts.
                </p>

                <p data-aos="fade-up">
                  As both a Realtor and a broker, Caroline offers her clients strategic insight into property acquisition, marketing, and long-term investment. She assists clients in identifying, purchasing, and preparing properties for the short-term rental market, creating turnkey experiences that generate strong returns and guest loyalty. Her dual licensure in Alabama and Florida allows her to serve a broad region,and her boutique approach means every owner and guest receives highly personalized care.
                </p>

                <p data-aos="fade-up">
                  Caroline is known for being hands-on, honest and incredibly relationship driven. Whether she’s helping a buyer find their dream home, advising an investor on a revenue-generating property, or preparing a guest’s rental to feel like a home away from home, she gives every detail her full attention.
                </p>

                <p data-aos="fade-up">
                  Caroline has cultivated a loyal network of clients, property owners, and returning guests who appreciate her warm communication, sharp market knowledge, and commitment to excellence. She sees herself not just as a real estate professional, but as a trusted partner—one who values long-term relationships over quick transactions.
                </p>

                <p data-aos="fade-up">
                  For Caroline, it’s not just about buying, selling or managing properties, it’s about building trust, creating joy and growing a business rooted in love for the Gulf Coast and the people who make it special.
                </p>
              </div>
              <div className="flex justify-between items-center mt-5" data-aos="fade-up">
                <Image src="/images/Link_reality.png" alt="Link Reality Gulf Coast" className="" width={250} height={250} />
                <Link
                  href="tel:+1234567890"
                  className="bg-accent hover:bg-transparent hover:text-accent border-1 hover:cursor-pointer border-accent flex justify-center items-center p-4 gap-5"
                >
                  <Phone />
                  Call Now
                </Link>
              </div>
            </div>
          </div>

          {/* Map Image */}
        </div>
      </div>
    </div>
  );
};

export default CallNow;
