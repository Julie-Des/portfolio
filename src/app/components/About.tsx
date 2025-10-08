"use client"

import { useTranslation } from "@/context/TranslationContext";
import Image from "next/image";

export default function About() {
    const { t } = useTranslation();
    
    return (
        <section id="about" className="bg-pink-light pt-8 pb-8 flex flex-col items-center px-40 relative">
            <h2 className="title">{t.about.title}</h2>
            <p className="text-center text-black-text">{t.about.text}</p>
            <Image src="/icons/arrow-green.png" alt="" width={80} height={80} className="absolute right-15 top-12"/>
        </section>
    )
}