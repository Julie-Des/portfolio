"use client";

import { useTranslation } from "@/context/TranslationContext";

export default function Footer() {
	const { t } = useTranslation();

	return (
		<section id="footer" className="bg-green pb-5 flex flex-col items-center px-40">
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
