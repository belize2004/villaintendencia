"use client"
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function FadeIn() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);

    return (
        <></>
    );
}
