"use client";

import { useTranslation } from "@/context/TranslationContext";
import Image from "next/image";

export default function About() {
	const { t } = useTranslation();

	return (
		<section
			id="about"
			className="bg-pink-light pt-12 pb-12 flex flex-col items-center px-10 md:px-20 lg:px-40 relative scroll-mt-[104]"
		>
			<h3 className="title">{t.about.title}</h3>
			<p className="text-center text-black-text">{t.about.text}</p>
			<Image
				src="/icons/arrow-green-left.png"
				alt=""
				width={80}
				height={80}
                loading="lazy"
				className="absolute right-10 lg:right-15 top-6 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
			/>
		</section>
	);
}
