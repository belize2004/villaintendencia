"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";
import TwoLines from "@/icons/TwoLines";
import { useState } from "react";

export default function HeroSection({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Optional: prevent background scroll when menu is open

  return (
    <div className="relative xl:h-screen xl:w-full aspect-[16/9]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full relative aspect-[16/9]">
          <Image
            src={img}
            alt="Downtown Pensacola"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className={`w-full absolute inset-0 z-1 ${styles.gradient}`}></div>

      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-30 flex ${styles.navBar} backdrop-blur-md 2xl:px-8 2xl:py-5 px-[3vw] py-[1.3vw]`}
      >
        {/* Toggle Button */}
        <button
          className="absolute inset-0 z-100 flex items-center p-[1.9vw] 2xl:p-7 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen || <TwoLines />}
        </button>

        {/* Title */}
        <div className="relative w-full text-[4vw] sm:text-[2.5vw] 2xl:text-4xl">
          <Link
            href="/"
            className="text-white sm:text-center text-right transition block"
          >
            Villa Intendencia
          </Link>
        </div>
      </nav>

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="relatve inset-0 z-100 flex items-center p-[1.9vw] 2xl:p-7 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen && (
            // Cross Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <div className="pt-20 px-8">
          <ul className="space-y-6 text-white">
            <li>
              <Link
                href="/"
                className="text-xl hover:text-[#C4A77D] transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-xl hover:text-[#C4A77D] transition"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Text */}
      <div className="text-white absolute z-30 2xl:bottom-5 2xl:left-[2.7vw] bottom-[1.3vw] left-[2vw]">
        <p className="2xl:text-8xl text-[6vw]">{title}</p>
        <p className="2xl:text-3xl text-[1.8vw]">{description}</p>
      </div>
    </div>
  );
}
