import React from "react";

const OurLocation = () => {
  return (
    <div className="w-full py-20">
      <div className="2xl:container mx-auto px-[4.3vw] 2xl:px-8">
        <div className=" lg:flex lg:space-evenly ">
          <div className="mb-10 lg:w-[55%] lg:mb-0">
            <h2 data-aos="fade-up" className="2xl:text-6xl text-center md:text-left md:text-[3.8vw] text-[6vw]  font-light mb-12 mr-2">
              Location
            </h2>

            <div className="sm:flex gap-16" data-aos="fade-up">
              <div>
                <p className="2xl:text-xl sm:text-[1.3vw]  text-[4vw] font-light">
                  421 E Intendencia St, Pensacola, FL 32502
                </p>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="lg:w-[45%]  aspect-video relative" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.8582415583375!2d-87.2093579244614!3d30.411308774737234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890c0b4069c0da9%3A0x3dc0aa72355ca76b!2s421%20E%20Intendencia%20St%2C%20Pensacola%2C%20FL%2032502%2C%20USA!5e0!3m2!1sen!2s!4v1712561814445!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
