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
			<div>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-5 place-items-center max-w-4xl w-full">
					{/* Ligne 1 */}
					<Image
						src="/images/logos/skills/react.png"
						alt="React"
						width={70}
						height={55}
						className="w-auto h-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#f9cada]"
					/>
					<Image
						src="/images/logos/skills/vitejs.png"
						alt="Vite"
						width={70}
						height={55}
						className="w-auto h-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#f9cada]"
					/>
					<Image
						src="/images/logos/skills/redux.png"
						alt="Redux"
						width={70}
						height={55}
						className="w-auto h-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#f9cada]"
					/>

					{/* Ligne 2 */}
					<Image
						src="/images/logos/skills/sass.png"
						alt="Sass"
						width={70}
						height={55}
						className="w-auto h-auto object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#f9cada]"
					/>
					<Image
						src="/images/logos/skills/tailwind.png"
						alt="Tailwind CSS"
						width={140}
						height={55}
						className="w-auto h-auto object-contain col-span-2 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#f9cada]"
					/>

					{/* Ligne 3 */}
					<Image
						src="/images/logos/skills/figma.png"
						alt="Figma"
						width={70}
						height={55}
						className="w-auto h-auto object-contain col-start-2 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#f9cada]"
					/>
				</div>
                <div>
                    <Cta
                        tag="div"
                        text={t.skills.text1}
                        imageSrc="/icons/palette.png"
                        altText="palette de peinture"
                        disabled // 👈 ce CTA ne sera pas cliquable
                    />
                </div>
			</div>
		</section>
	);
}
