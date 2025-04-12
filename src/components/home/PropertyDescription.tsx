import React from "react";

export default function PropertyDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full mx-auto lg:px-20 px-[5vw] py-12 space-y-5 ">
      <h2 className="lg:text-6xl text-3xl text-center" data-aos="fade-up">
        {title}
      </h2>
      <p className="lg:text-xl " data-aos="fade-up">
        {description}
      </p>
    </div>
  );
}
