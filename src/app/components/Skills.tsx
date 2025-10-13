"use client";

import { useTranslation } from "@/context/TranslationContext";
import Image from "next/image";
import Cta from "./CTA";
import skillsData from "@/data/skillsData.json";

export default function Skills() {
	const { t } = useTranslation();

	const renderLogoGrid = (logos: { src: string; alt: string; width?: number }[]) => (
		<div className="grid grid-cols-2 gap-3 place-items-center [grid-auto-rows:56px]">
			{logos.map((logo, index) => (
				<Image
					key={logo.alt}
					src={logo.src}
					alt={logo.alt}
					width={logo.width ?? 70}
					height={55}
					className="logo-techno"
				/>
			))}
		</div>
	);

	return (
		<section
			id="skills"
			className="bg-gradient-to-b from-[#FBEFF3] to-[#FDFDFD] pt-10 pb-10 flex flex-col items-center px-10 relative scroll-mt-[104]"
		>
			<h2 className="title mb-10">{t.skills.title}</h2>

			<div className="grid grid-cols-3 place-items-center gap-4">
				{/* left column */}
				<div className="max-w-2xl w-[275px]">
					{renderLogoGrid(skillsData.leftColumn)}
					<div className="mt-4">
						<Cta
							tag="div"
							text={t.skills.text1}
							imageSrc="/icons/palette.png"
							altText="palette de peinture"
							disabled
						/>
					</div>
				</div>

				{/* center */}
				<div className="relative">
					<Image
						src="/icons/arrow-green-right.png"
						alt=""
						width={80}
						height={80}
						className="absolute bottom-0 left-[-40px]"
					/>
					<Image
						src="/images/logos/skills/computer.png"
						alt="Ordinateur affichant les logos H T M L, C S S, JavaScript et TypeScript"
						width={375}
						height={375}
						className="logo-techno"
					/>
					<Image
						src="/icons/arrow-green-right.png"
						alt=""
						width={80}
						height={80}
						className="absolute top-[-10px] right-[-40px] rotate-180"
					/>
				</div>

				{/* right column */}
				<div className="max-w-2xl w-[275px]">
					<div className="mb-4">
						<Cta
							tag="div"
							text={t.skills.text2}
							imageSrc="/icons/gear.png"
							altText="Engrenage"
							disabled
						/>
					</div>
					{renderLogoGrid(skillsData.rightColumn)}
				</div>
			</div>
		</section>
	);
}
