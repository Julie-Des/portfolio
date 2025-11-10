"use client";

import Image from "next/image";
import { leckerli } from "../fonts";
import { useTranslation } from "@/context/TranslationContext";
import Cta from "./CTA";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function HeaderText() {
	const { translations } = useTranslation();

	return (
		<div className="flex justify-center items-start max-w-[890px]">
			<Image src="/icons/waving-hand.svg" alt="" width={40} height={40} className="hidden sm:block"/>
			<div className="text-white text-center sm:text-left sm:pl-2.5 flex flex-col gap-5 lg:gap-4.5">
				<h1 className="text-4xl xl:text-5xl">
					{translations.header.title}
					<span className={`${leckerli.className} text-pink-dark ml-1.5`}> Julie</span>
				</h1>
				<h2 className="text-2xl xl:text-3xl">
					{translations.header.job1} <span className="text-pink-dark">&</span> {translations.header.job2}
				</h2>
				<p className="text-lg xl:text-xl">
					<span className="text-pink-dark font-semibold"> {translations.header.objectiveLabel} </span> {translations.header.objectiveText}
				</p>
				<div className="flex flex-col sm:flex-row sm:items-end gap-5 mt-2.5 relative">
					<div className="flex justify-center sm:justify-normal gap-5">
						<Cta tag="a" text={translations.header.contact} href="#footer" />
						<Cta
							tag="a"
							text={translations.header.cv}
							href="/CV_Julie_Deshayes.pdf"
							imageSrc="/icons/arrow-button.png"
							aria-label="Ouvre un fichier PDF dans un autre onglet"
							external
						/>
					</div>
					<div className="flex flex-col pl-4 sm:flex-row gap-3 absolute bottom-[-100px] sm:relative sm:bottom-0 sm:pl-0">
						<a
							href="https://www.linkedin.com/in/julie-deshayes-21443727b"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="icon-social"
							aria-label="Profil LinkedIn - ouvre un nouvel onglet"
						>
							<LinkedinIcon className="w-7 h-7" />
						</a>
						<a
							href="https://github.com/Julie-Des"
							target="_blank"
							rel="noopener noreferrer nofollow"
							className="icon-social"
							aria-label="Profil Github - ouvre un nouvel onglet"
						>
							<GithubIcon className="w-7 h-7" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
