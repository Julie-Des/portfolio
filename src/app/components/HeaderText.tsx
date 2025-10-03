"use client"

import Image from "next/image";
import { leckerli } from "../fonts";
import { useTranslation } from "@/context/TranslationContext";
import Cta from "./CTA";

export default function HeaderText() {
	const { t } = useTranslation();

	return (
		<div className="flex justify-center items-start w-1/2">
			<Image src="/images/hand.png" alt="" width={60} height={60} />
			<div className="text-white pl-2.5 flex flex-col gap-4.5">
				<h1 className="text-5xl">
					{t.header.title}<span className={`${leckerli.className} text-pink-dark ml-1.5`}> Julie</span>
				</h1>
				<p className="text-3xl">
					{t.header.job1} <span className="text-pink-dark">&</span> {t.header.job2}
				</p>
				<p className="text-xl">
					<span className="text-pink-dark font-semibold"> {t.header.objectiveLabel} </span> {t.header.objectiveText}
				</p>
				<div className="flex gap-5 mt-2.5">
					<Cta tag="a" text={t.header.contact} href="#footer" />
					<Cta tag="a" text={t.header.cv} href="/CV_Julie_Deshayes.pdf" imageSrc="/images/arrow-button.png" altText="Flèche indiquant que le lien mène à une page externe" external />
				</div>
			</div>
			
		</div>
	);
}
