"use client";

import { useTranslation } from "@/context/TranslationContext";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
	const { t, tr } = useTranslation();

	return (
		<section id="projects" className="bg-white pt-10 pb-10 flex flex-col items-center px-40 scroll-mt-[104]">
			<h2 className="title">{t.projects.title}</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-[1200px]">
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
