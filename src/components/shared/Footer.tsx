import Link from "next/link";
import Linkdin from "@/icons/socials/Linkdin";
import Facebook from "@/icons/socials/Facebook";
import Instagram from "@/icons/socials/Instagram";
import Email from "@/icons/socials/Email";

export default function Footer() {
  const contactList = [
    { name: "+1 (251) 504-6642", link: "tel:+1234567890" },
    { name: "caroline@coastallinkproperties.com", link: "/" },
  ];
  const linksList = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/gallery" },
  ];
  return (
    <footer className="text-white  m-auto bg-black w-full 2xl:px-10 px-[2.2vw] pb-5">
      {/* Remove the flex justify-center that was causing the centering */}
      <div className="w-full 2xl:w-fit m-auto">
        <div className="md:flex w-full md:justify-between lg:items-center items-start md:flex-col lg:flex-row md:px-[5vw] py-4">
          <TagLine />
          <div className="md:grid md:grid-cols-2 lg:w-[40%]">
            <InfoLinks title="Links" list={linksList} />
            <InfoLinks title="Contact" list={contactList} />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* Bottom section with copyright and terms */}
        <div className="pt-6 md:px-[5vw]  border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">© 2025 ALL RIGHTS RESERVED</p>
          <div className="mt-4 md:mt-0">
            <Link
              href="/"
              className="text-white text-sm hover:text-[#C4A77D] transition-colors"
            >
              TERMS&CONDITIONS{" "}
            </Link>
            <span className="text-white">|</span>
            <Link
              href="/"
              className="text-white text-sm hover:text-[#C4A77D] transition-colors"
            >
              {" "}
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InfoLinks({
  title,
  list,
}: {
  title: string;
  list: { name: string; link: string }[];
}) {
  return (
    <div>
      <div className="2xl:text-xl flex flex-col gap-1">
        <p className="lg:text-2xl text-sm font-semibold">{title}</p>
        {list.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-white lg:text-2xl sm:text-[2vw] text-[3vw] hover:text-[#C4A77D] break-words transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function TagLine() {
  return (
    <div className="xl:w-[48%] mb-[5vw] 2xl:mb-6">
      <p className="md:text-[3.3vw] 2xl:text-5xl sm:text-[3vw] text-xl text-left">
        YOUR GATEWAY TO
        <br />
        UNFORGETTABLE GETAWAYS.
      </p>
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-6">
      <Link href="https://linkedin.com">
        <Linkdin />
        {/* <span className="sr-only">LinkedIn</span> */}
      </Link>
      <Link href="https://facebook.com">
        <Facebook />
      </Link>
      <Link href="https://instagram.com">
        <Instagram />
      </Link>
      <Link href="https://twitter.com">
        <Email />
      </Link>
    </div>
  );
}
