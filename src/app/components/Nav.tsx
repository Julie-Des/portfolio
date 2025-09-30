import { leckerli } from "../fonts";

export default function Nav() {
	return (
		<nav className="text-white text-xl flex justify-between items-center">
            <p className={`${leckerli.className} text-5xl text-pink-dark`}>Julie</p>
			<ul className="flex gap-16 cursor-pointer text-white">
				<li>
					<a href="#about" className="hover:text-pink-dark">À propos</a>
				</li>
				<li>
					<a href="#projects">Mes projets</a>
				</li>
				<li>
					<a href="#skills">Mes compétences</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<li>FR | EN</li>
			</ul>
		</nav>
	);
}
