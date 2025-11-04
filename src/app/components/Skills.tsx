"use client";

import { useTranslation } from "@/context/TranslationContext";
import Image from "next/image";
import Cta from "./CTA";
import skillsData from "@/data/skillsData.json";

export default function Skills() {
	const { t } = useTranslation();

	const renderLogoGrid = (logos: { src: string; alt: string; width?: number }[]) => (
		<div className="grid grid-cols-2 gap-3 place-items-center [grid-auto-rows:56px]">
			{logos.map((logo) => (
				<Image
					key={logo.alt}
					src={logo.src}
					alt={logo.alt}
					width={logo.width ?? 70}
					height={55}
					loading="lazy"
					className="logo-techno w-[50px] h-[35px] sm:w-[70px] sm:h-[55px] object-contain"
				/>
			))}
		</div>
	);

	return (
		<section
			id="skills"
			className="bg-gradient-to-b from-[#FBEFF3] to-[#FDFDFD] pt-12 pb-12 px-10 md:px-12 flex flex-col items-center relative scroll-mt-[104]"
		>
			<h3 className="title mb-10">{t.skills.title}</h3>

			<div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
				{/* left column */}
				<div className="w-full max-w-[280px] flex flex-col-reverse lg:flex-col">
					<div className="mt-4 lg:mt-0 lg:mb-4">
						<Cta
							tag="div"
							text={t.skills.text1}
							imageSrc="/icons/palette.png"
							altText="palette de peinture"
							disabled
						/>
					</div>
					{renderLogoGrid(skillsData.leftColumn)}
				</div>

				{/* center */}
				<div className="flex items-center justify-center relative max-w-[400px]">
					<Image
						src="/icons/arrow-green-right.png"
						alt=""
						width={80}
						height={80}
						loading="lazy"
						className="absolute top-[-20] left-[-40] rotate-[85deg] lg:rotate-[25deg] lg:static w-16 h-16 xl:w-20 xl:h-20"
					/>
					<Image
						src="/images/logos/skills/computer.png"
						alt="Ecran d'ordinateur affichant les logos H T M L, C S S, JavaScript et TypeScript"
						width={375}
						height={375}
						loading="lazy"
						className="logo-techno w-[220px] sm:w-[280px] md:w-[375px] h-auto object-contain"
					/>
					<Image
						src="/icons/arrow-green-right.png"
						alt=""
						width={80}
						height={80}
						loading="lazy"
						className="absolute bottom-[-20] right-[-40] rotate-[-90deg] lg:rotate-[-160deg] lg:static w-16 h-16 xl:w-20 xl:h-20"
					/>
				</div>

				{/* right column */}
				<div className="w-full max-w-[280px] flex flex-col-reverse lg:flex-col">
				{renderLogoGrid(skillsData.rightColumn)}
					<div className="mb-4 lg:mb-0 lg:mt-4">
						<Cta
							tag="div"
							text={t.skills.text2}
							imageSrc="/icons/gear.png"
							altText="Engrenage"
							disabled
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
