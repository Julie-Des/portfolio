import { poppins, leckerli } from "./fonts";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import "./globals.css";

export const metadata: Metadata = {
	title: "Julie Deshayes - Portfolio",
	description: "Portfolio de Julie Deshayes, développeuse web",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={`${poppins.variable} ${leckerli.variable}`}>
			<body>
				<TranslationProvider>
					<Nav />
					{children}
					<Footer />
				</TranslationProvider>
			</body>
		</html>
	);
}
