'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import VerticalLine from '@/icons/VerticalLine';
import { Swiper as SwiperType } from "swiper";
import { GallerySlide } from "./Gallery";
import { urlFor } from "@/sanity/lib/image";
import Baths from "@/icons/Baths";
import Bed from "@/icons/Bed";
import Area from "@/icons/Area";

export default function GallerySwiper({ slides }: { slides: GallerySlide[] }) {
    const swiperRef = useRef<SwiperType | null>(null);
    return (
        <>
            {/* Swiper carousel */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop
                autoplay
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="my-10"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={slide._id || idx}>
                        {/* Image section */}
                        <div className="px-[4.5vw]">
                            <div className="w-full relative aspect-[16/9]">
                                {slide.image && (
                                    <Image
                                        src={urlFor(slide.image).url()}
                                        alt={slide.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="px-[4.5vw] 2xl:text-3xl sm:text-[1.8vw] text-sm mt-5">
                            <p className="mb-5">{slide.title}</p>
                            <div className="md:flex justify-between">
                                <div className="md:flex md:items-center gap-5">
                                    <p className="mb-5 lg:text-lg sm:text-[1.5vw] text-xs">
                                        {slide.address}
                                    </p>
                                    <div className="flex gap-4">
                                        <GalleryInfo
                                            icon={<Baths />}
                                            detail={`${slide.baths} Baths`}
                                        />
                                        <VerticalLine />
                                        <GalleryInfo icon={<Bed />} detail={`${slide.beds} Beds`} />
                                        <VerticalLine />
                                        <GalleryInfo
                                            icon={<Area />}
                                            detail={`${slide.area} Sq.ft`}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-5 mt-5 md:mt-1">
                                    <CircleIcon onClick={() => swiperRef.current?.slidePrev()} />
                                    <CircleIcon
                                        onClick={() => swiperRef.current?.slideNext()}
                                        right
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

function CircleIcon({
    onClick,
    right = false,
}: {
    onClick?: () => void;
    right?: boolean;
}) {
    return (
        <div
            className="flex border-2 border-white hover:border-[#C4A77D] items-center justify-center sm:w-[60px] w-[50px] h-[50px] sm:h-[60px] rounded-full cursor-pointer hover:bg-[#C4A77D]"
            onClick={onClick}
        >
            <svg
                width="29"
                height="23"
                viewBox="0 0 29 23"
                fill="none"
                style={{
                    transform: !right ? "rotate(0deg)" : "rotate(180deg)",
                }}
            >
                <path
                    d="M28.5919 12.673C26.2468 12.8904 23.926 12.9227 21.5717 12.9155C21.1834 12.9152 20.7951 12.9149 20.395 12.9146C19.1636 12.9133 17.9323 12.9106 16.7009 12.9078C15.8623 12.9065 15.0237 12.9056 14.1852 12.9047C12.1373 12.9023 10.0894 12.8986 8.04157 12.8939C8.22343 13.0719 8.4053 13.2498 8.59267 13.4331C8.83135 13.6687 9.07002 13.9043 9.31593 14.147C9.55248 14.3797 9.78904 14.6123 10.0328 14.8519C10.9003 15.7631 11.5399 16.7205 12.1572 17.8105C12.268 17.9946 12.3788 18.1786 12.4929 18.3681C13.1352 19.4668 13.5424 20.4846 13.7868 21.7328C13.1305 21.9515 12.4742 22.1703 11.7981 22.3957C11.7044 22.2165 11.6106 22.0374 11.5141 21.8528C9.57146 18.1852 7.65666 14.939 3.62215 13.3359C2.5248 13.0476 1.43003 12.836 0.307591 12.673C0.380511 11.8708 0.453431 11.0687 0.528562 10.2423C0.718555 10.2283 0.908546 10.2144 1.10429 10.2C3.99445 9.90058 6.19094 8.81833 8.18572 6.69381C9.16918 5.46162 9.93153 4.10572 10.6932 2.72928C10.8151 2.51337 10.937 2.29746 11.0627 2.075C11.3113 1.63214 11.5554 1.18672 11.7981 0.740543C12.4544 0.959304 13.1106 1.17806 13.7868 1.40346C12.7539 5.15934 10.8023 7.48156 8.04157 10.2423C14.7502 10.2423 21.4589 10.2423 28.3709 10.2423C28.4438 11.0444 28.5167 11.8465 28.5919 12.673Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}

function GalleryInfo({
    icon,
    detail,
}: {
    icon?: React.ReactNode;
    detail: string;
}) {
    return (
        <div className="flex md:flex flex-col gap-2 items-center justify-center">
            {icon}
            <p className="text-xs">{detail}</p>
        </div>
    );
}
