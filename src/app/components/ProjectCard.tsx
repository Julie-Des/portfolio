import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import Cta from "./CTA";
import { useTranslation } from "@/context/TranslationContext";

type ButtonProps = Readonly<{
	title: string;
	technos: string;
	image: string;
	logo: string;
	github: string;
	link: string;
}>;

export default function ProjectCard({ title, technos, image, logo, github, link }: ButtonProps) {
	const { t } = useTranslation();

	return (
		<div>
			<div className="relative overflow-hidden border-4 border-[#f9cada] rounded-[15px] shadow-md cursor-pointer group h-[240px]">
				<Image
					src={image}
					alt={title}
					fill
					sizes="(max-width: 440px) 100vw, 400px"
					className="object-contain bg-pink-light transition-transform duration-500 ease-in-out group-hover:scale-110"
				/>

				{/* Overlay */}
				<div
					className="
          absolute inset-0 flex flex-col
          bg-[#1b4332]/90 opacity-0 translate-y-full 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-in-out p-6
        "
				>
					<h3 className="text-white text-xl mb-2">{title}</h3>
					<p className="text-[#f9cada] mb-4">{technos}</p>
					<div className="flex gap-4 items-center justify-end">
						<a href={github} target="_blank" rel="noopener noreferrer" className="icon-btn rounded-full">
							<GithubIcon className="w-8 h-8" />
						</a>

						<Cta
							tag="a"
							text={t.projects.see}
							href={link}
							imageSrc="/images/arrow-button.png"
							altText="Lien vers le projet"
							external
						/>
				  </div>
			  </div>
      </div>
				<div className="mt-4 flex justify-center">
					<Image src={logo} alt={`${title} logo`} width={150} height={35} className="object-contain" />
				</div>
		</div>
	);
}
