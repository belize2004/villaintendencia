import React from "react";
import Image from "next/image";
import Phone from "@/icons/Phone";
import Link from "next/link";

const CallNow = () => {
  return (
    <div className="w-full bg-black text-white py-20">
      <div className="2xl:container mx-auto px-6   2xl:px-8">
        <div className=" lg:flex lg:space-evenly ">
          <div className="lg:w-[45%]  aspect-square relative">
            <Image
              src="/images/person.png"
              alt="Service Areas Map"
              fill
              className="object-cover"
            />
          </div>
          <div className="mb-10 lg:w-[55%] p-[2vw] lg:mb-0">
            <h2 className="2xl:text-6xl  md:text-[3.8vw] text-[6vw]  font-light mb-12 mr-2">
              Meet Caroline Jordan Your Next Realtor
            </h2>

            <div className=" gap-16">
              {/* Left column of areas */}
              <div>
                <p className="2xl:text-xl sm:text-[1.3vw]  text-[4vw] font-light">
                  Hello, I’m Caroline Jordan—the owner of Coastal Link
                  Properties LLC vacation rentals. For over 10 years, I have
                  enjoyed providing superior vacation rental services to the
                  Gulf Coast. My goal is always to grow a better business that
                  focuses on building great rapport with property owners, and
                  each and every one of our guests. I love what I do, and
                  especially love the people I connect with each day.
                </p>
              </div>
              <div className="flex justify-end mt-5 ">
                <Link
                  href="tel:+1234567890"
                  className="bg-[#C4A77D] hover:bg-transparent hover:text-[#C4A77D] border-1 hover:cursor-pointer border-[#C4A77D] flex justify-center items-center p-4 gap-5"
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
