"use client";

import { useTranslation } from "@/context/TranslationContext";
import Image from "next/image";
import Cta from "./CTA";

export default function Skills() {
	const { t } = useTranslation();

	return (
		<section
			id="skills"
			className="bg-gradient-to-b from-[#FBEFF3] to-[#FDFDFD] pt-10 pb-10 flex flex-col items-center px-10 relative scroll-mt-[104]"
		>
			<h2 className="title mb-10">{t.skills.title}</h2>
			<div className="grid grid-cols-3 place-items-center">
				<div className="max-w-2xl w-[275px]">
					<div className="grid grid-cols-2 gap-3 place-items-center">
						<Image
							src="/images/logos/skills/react.png"
							alt="React"
							width={70}
							height={55}
							className="logo-techno"
                            />
						<Image
							src="/images/logos/skills/vitejs.png"
							alt="Vite"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/redux.png"
							alt="Redux"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/sass.png"
							alt="Sass"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/tailwind.png"
							alt="Tailwind CSS"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/figma.png"
							alt="Figma"
							width={70}
							height={55}
							className="logo-techno"
						/>
					</div>
					<div className="mt-4">
						<Cta tag="div" text={t.skills.text1} imageSrc="/icons/palette.png" altText="palette de peinture" disabled />
					</div>
				</div>
                <div>
					<Image
						src="/images/logos/skills/computer.png"
						alt="Figma"
						width={350}
						height={305}
						className="w-auto h-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#f9cada]"
					/>
                </div>
                <div className="max-w-2xl w-[275px]">
                    <div className="mb-4">
						<Cta tag="div" text={t.skills.text2} imageSrc="/icons/gear.png" altText="Engrenage" disabled />
					</div>
					<div className="grid grid-cols-2 gap-3 place-items-center">
						<Image
							src="/images/logos/skills/github.png"
							alt="React"
							width={70}
							height={55}
							className="logo-techno"
                        />
						<Image
							src="/images/logos/skills/git.png"
							alt="Vite"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/swagger.png"
							alt="Redux"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/next.png"
							alt="Sass"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/agile.png"
							alt="Tailwind CSS"
							width={70}
							height={55}
							className="logo-techno"
						/>
						<Image
							src="/images/logos/skills/seo.png"
							alt="Figma"
							width={70}
							height={55}
							className="logo-techno"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
