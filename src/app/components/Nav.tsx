import { leckerli } from "../fonts";

export default function Nav() {
	return (
		<nav className="text-white text-xl flex justify-between items-center bg-green pt-8 pb-6 pl-20 pr-20 fixed right-0 left-0 z-50">
            <p className={`${leckerli.className} text-6xl text-pink-dark`}>Julie</p>
			<ul className="flex gap-16 cursor-pointer text-white">
				<li>
					<a href="#about" className="nav-link hover:text-pink-dark">À propos</a>
				</li>
				<li>
					<a href="#projects" className="nav-link hover:text-pink-dark">Mes projets</a>
				</li>
				<li>
					<a href="#skills" className="nav-link hover:text-pink-dark">Mes compétences</a>
				</li>
				<li>
					<a href="#contact" className="nav-link hover:text-pink-dark">Contact</a>
				</li>
				<li>FR | EN</li>
			</ul>
		</nav>
	);
}
