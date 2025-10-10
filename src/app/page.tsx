import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Projects />
				<Skills />
			</main>
		</>
	);
}
