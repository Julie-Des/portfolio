"use client";

import { useTranslation } from "@/context/TranslationContext";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

export default function Projects() {
	const { t, tr } = useTranslation();

	return (
		<section id="projects" className="bg-white pt-10 pb-10 flex flex-col items-center px-40 scroll-mt-[104]">
			
			<div className="relative">
				<h2 className="title">{t.projects.title}</h2>
				<Image src="/icons/arrow-pink.png" alt="" width={83} height={83} className="absolute left-[-100px] top-[-10px] rotate-[144deg]"/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1200px] pt-2.5">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						title={tr(project.titleKey)}
						technos={tr(project.technosKey)}
						image={project.image}
						logo={project.logo}
						github={project.github}
						link={project.link}
					/>
				))}
			</div>
		</section>
	);
}
