"use client";

import { leckerli } from "../fonts";
import { useTranslation } from "../../context/TranslationContext";

export default function Nav() {
	const { t, lang, switchLang } = useTranslation();

	return (
		<nav className="text-white text-xl flex justify-between items-center bg-green pt-8 pb-6 pl-20 pr-20 fixed right-0 left-0 z-50">
			<a href="#header" className={`${leckerli.className} text-5xl text-pink-dark`}>Julie</a>
			<ul className="flex gap-16 cursor-pointer text-white items-center">
				<li>
					<a href="#about" className="nav-link hover:text-pink-dark">
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
				<li className="flex gap-2 pb-2">
					<button
						onClick={() => switchLang("fr")}
						className={`hover:text-pink-dark ${lang === "fr" ? "text-pink-dark font-bold" : ""} cursor-pointer`}
					>FR</button>
					<p>|</p>
					<button
						onClick={() => switchLang("en")}
						className={`hover:text-pink-dark ${lang === "en" ? "text-pink-dark font-bold" : ""} cursor-pointer`}
					>EN</button>
				</li>
			</ul>
		</nav>
	);
}
