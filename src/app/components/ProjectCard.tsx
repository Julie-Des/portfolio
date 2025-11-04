import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import Cta from "./CTA";
import { useTranslation } from "@/context/TranslationContext";

type ProjectCardProps = Readonly<{
	title: string;
	technos: string;
	image: string;
	logo: string;
	github: string;
	link: string;
	isActive: boolean;
	onToggle: () => void;
}>;

export default function ProjectCard({
	title,
	technos,
	image,
	logo,
	github,
	link,
	isActive,
	onToggle,
}: ProjectCardProps) {
	const { t } = useTranslation();

	return (
		<div>
			<button
				onClick={(e) => {
					e.stopPropagation();
					onToggle();
				}}
				type="button"
				className="relative overflow-hidden border-4 border-pink-dark rounded-[15px] shadow-md group h-[240px] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-dark transition"
			>
				<Image
					src={image}
					alt=""
					fill
					sizes="(max-width: 440px) 100vw, 400px"
					loading="lazy"
					className={`object-contain bg-pink-light transition-transform duration-500 ease-in-out ${
						isActive ? "scale-110" : "group-hover:scale-110"
					}`}
				/>

				{/* Overlay */}
				<div
					className={`absolute inset-0 flex flex-col bg-green/90 transition-all duration-500 ease-in-out p-4 text-left justify-between ${
						isActive
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
					}`}
				>
					<div>
						<h3 className="text-white text-xl mb-2">{title}</h3>
						<p className="text-pink-dark mb-4">{technos}</p>
					</div>
					<div className="flex gap-4 items-center justify-end">
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="icon-social"
							aria-label="Voir le projet sur Github - ouvre un nouvel onglet"
							onClick={(e) => e.stopPropagation()}
						>
							<GithubIcon className="w-8 h-8" />
						</a>
						<Cta
							tag="a"
							text={t.projects.see}
							href={link}
							imageSrc="/icons/arrow-button.png"
							external
						/>
					</div>
				</div>
			</button>

			<div className="flex justify-center">
				<div className="relative h-[25px] w-[220px] mt-4">
					<Image
						src={logo}
						alt={`${title} logo`}
						fill
						className="object-contain"
						sizes="(max-width: 768px) 100vw, 220px"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
}
