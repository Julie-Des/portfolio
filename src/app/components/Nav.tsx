"use client";

import { leckerli } from "../fonts";
import { useTranslation } from "../../context/TranslationContext";

export default function Nav() {
	const { t, lang, switchLang } = useTranslation();

	return (
		<>
			<nav className="text-white lg:text-xl flex justify-between items-center bg-green pt-6 pb-6 px-6 sm:px-8 md:px-12 md:fixed right-0 left-0 top-0 z-50">
				<a
					href="#header"
					className={`${leckerli.className} text-4xl md:text-5xl text-pink-dark`}
				>
					Julie
				</a>

				{/* Tablet and desktop */}
				<ul className="hidden md:flex gap-12 items-center pt-[15px]">
					<li>
						<a href="#about" className="nav-link active:text-pink-dark">
							{t.navbar.about}
						</a>
					</li>
					<li>
						<a href="#projects" className="nav-link hover:text-pink-dark">
							{t.navbar.projects}
						</a>
					</li>
					<li>
						<a href="#skills" className="nav-link hover:text-pink-dark">
							{t.navbar.skills}
						</a>
					</li>
					<li>
						<a href="#contact" className="nav-link hover:text-pink-dark">
							{t.navbar.contact}
						</a>
					</li>
				</ul>

				
				<div className="flex gap-2">
					<button
						onClick={() => switchLang("fr")}
						className={`hover:text-pink-dark ${
							lang === "fr" ? "text-pink-dark font-bold" : ""
						}`}
					>
						FR
					</button>
					<p>|</p>
					<button
						onClick={() => switchLang("en")}
						className={`hover:text-pink-dark ${
							lang === "en" ? "text-pink-dark font-bold" : ""
						}`}
					>
						EN
					</button>
				</div>
			</nav>

			{/* Mobile */}
			<ul className="fixed w-full bottom-0 left-0 right-0 bg-green text-white flex justify-around items-center py-3 text-sm border-t border-pink-dark md:hidden z-50 overflow-hidden">
				<li>
					<a href="#about" className="nav-link hover:text-pink-dark flex flex-col items-center">
						{t.navbar.about}
					</a>
				</li>
				<li>
					<a href="#projects" className="nav-link hover:text-pink-dark flex flex-col items-center">
						{t.navbar.projects}
					</a>
				</li>
				<li>
					<a href="#skills" className="nav-link hover:text-pink-dark flex flex-col items-center">
						{t.navbar.skills}
					</a>
				</li>
				<li>
					<a href="#contact" className="nav-link hover:text-pink-dark flex flex-col items-center">
						{t.navbar.contact}
					</a>
				</li>
			</ul>
		</>
	);
}
