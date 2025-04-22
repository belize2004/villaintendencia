import React from "react";
import Image from "next/image";
import Phone from "@/icons/Phone";
import Link from "next/link";

const CallNow = () => {
  return (
    <div className="w-full py-20 bg-primary">
      <div className="2xl:container mx-auto px-6 2xl:px-8">
        <div>
          <div className="md:w-1/2 mx-auto aspect-square relative" data-aos="fade-right">
            <Image
              src="/images/person.webp"
              alt="Service Areas Map"
              fill
              className="object-cover bg-accent"
            />
          </div>
          <div className="mb-5 md:mb-10 p-[2vw] lg:mb-0">
            <h2 className="2xl:text-6xl  md:text-[3.8vw] text-[6vw]  font-light mb-12 mr-2" data-aos="fade-up">
              Caroline Jordan
            </h2>

            <div className="gap-5 md:gap-16">
              {/* Left column of areas */}
              <div className="2xl:text-xl sm:text-[1.3vw]  text-[4vw] font-light space-y-3">
                <p data-aos="fade-up">Caroline Jordan is a licensed Real Estate Broker in both Alabama and Florida, and the founder of Link Realty Gulf Coast, a real estate agency, and Coastal Link Properties, a boutique vacation rental management company serving the Gulf Coast.</p>
                <p data-aos="fade-up">With over a decade of experience in real estate and property management, Caroline has built a business rooted in integrity, connection, and exceptional service.</p>
                <p data-aos="fade-up">Originally from Gulfport, Mississippi, Caroline fell in love with the Alabama and Northwest Florida coast during her younger years, eventually settling in Orange Beach, where she launched her real estate career.
                  After gaining experience in everything from property management, real estate, appraisals and interior design, she took over the vacation rental business Rental Link in 2014 and rebranded it as Coastal Link Properties.
                </p>
                <p data-aos="fade-up">
                  At the same time, Caroline founded Link Realty Gulf Coast, where she serves as broker and agent, helping both buyers and sellers in their real estate journeys.
                </p>
                <p data-aos="fade-up">
                  Today, she operates both companies from Pensacola, Florida, managing a growing portfolio of investment properties and real estate listings along the Alabama and Northwest Florida coasts.
                </p>
                <p data-aos="fade-up">
                  As both a Realtor and a broker, Caroline offers her clients strategic insight into: property acquisition, marketing and staging, long-term investment planning, preparing homes for the short-term rental market.
                  She creates turnkey rental experiences that deliver strong returns and guest loyalty.
                </p>
                <p data-aos="fade-up">
                  Thanks to her dual licensure in Alabama and Florida, Caroline serves a broad region with ease. Her boutique approach means every owner and guest receives highly personalized care. Caroline is known for being hands-on, honest, deeply relationship-driven.
                </p>
                <p data-aos="fade-up">
                  Whether she’s helping a buyer find their dream home, advising an investor on a revenue-generating property, or preparing a guest’s rental to feel like a home away from home, she gives every detail her full attention.
                </p>
                <p data-aos="fade-up">
                  Caroline has cultivated a loyal network of clients, property owners, and returning guests who value her warm communication, sharp market knowledge, commitment to excellence.
                </p>
                <p data-aos="fade-up">
                  She sees herself not just as a real estate professional, but as a trusted partner—one who values long-term relationships over quick transactions.
                </p>
                <p data-aos="fade-up">
                  For Caroline, it’s not just about buying, selling, or managing properties. It’s about building trust, creating joy, and growing a business rooted in love for the Gulf Coast and the people who make it special.
                </p>
              </div>
              <div className="flex justify-between items-center mt-5" data-aos="fade-up" >
                <Image src="/images/Link_realty.png" alt="Link Realty Gulf Coast" className="bg-blend-lighten" width={250} height={250} />
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
