"use client";

import { useTranslation } from "@/context/TranslationContext";

export default function Footer() {
	const { translations } = useTranslation();

	return (
		<section id="footer" className="bg-green pb-20 md:pb-6 flex flex-col items-center text-center text-sm md:text-base px-10 md:px-20 lg:px-40">
			<p className="text-white">
				{translations.footer.name}
				<span className="span-footer"> . </span>
				{translations.footer.region}
				<span className="span-footer"> . </span>
				{translations.footer.town}
			</p>
			<p className="text-white">
				{translations.footer.copyright}<span className="span-footer"> . </span>{translations.footer.right}
			</p>
		</section>
	);
}
