"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/context/TranslationContext";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

export default function Projects() {
	const { t, tr } = useTranslation();
	const [activeId, setActiveId] = useState<number | null>(null);

	// Close the active card when clicked outside
	useEffect(() => {
		const handleClickOutside = () => setActiveId(null);
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<section
			id="projects"
			className="bg-white pt-12 pb-12 flex flex-col items-center px-10 md:px-20 lg:px-40 scroll-mt-[104]"
		>
			<div className="relative">
				<h2 className="title">{t.projects.title}</h2>
				<Image
					src="/icons/arrow-pink.png"
					alt=""
					width={100}
					height={100}
					className="absolute left-[-55px] sm:left-[-70px] lg:left-[-100px] top-[-20px] rotate-[144deg] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-[1200px] pt-2.5">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						title={tr(project.titleKey)}
						technos={tr(project.technosKey)}
						image={project.image}
						logo={project.logo}
						github={project.github}
						link={project.link}
						isActive={activeId === project.id}
						onToggle={() => setActiveId(activeId === project.id ? null : project.id)}
					/>
				))}
			</div>
		</section>
	);
}
