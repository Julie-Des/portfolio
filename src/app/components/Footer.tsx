"use client";

import { useTranslation } from "@/context/TranslationContext";

export default function Footer() {
	const { t } = useTranslation();

	return (
		<section id="footer" className="bg-green pb-20 md:pb-6 flex flex-col items-center text-center text-sm md:text-base px-10 md:px-20 lg:px-40">
			<p className="text-white">
				{t.footer.name}
				<span className="span-footer"> . </span>
				{t.footer.region}
				<span className="span-footer"> . </span>
				{t.footer.town}
			</p>
			<p className="text-white">
				{t.footer.copyright}<span className="span-footer"> . </span>{t.footer.right}
			</p>
		</section>
	);
}
