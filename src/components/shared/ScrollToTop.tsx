"use client"
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className="fixed bottom-5 right-5 cursor-pointer z-50 w-[40px] aspect-square rounded-full bg-white flex items-center justify-center"
            onClick={scrollToTop}
        >
            <FaArrowUp size={20} className='text-background' />
        </div>
    );
}
