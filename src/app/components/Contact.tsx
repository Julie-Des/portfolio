"use client";

import { useState } from "react";
import { useTranslation } from "@/context/TranslationContext";
import Cta from "./CTA";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import Image from "next/image";

export default function Contact() {
	const { translations } = useTranslation();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				setStatus("success");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
			}
		} catch (err) {
			console.error(err);
			setStatus("error");
		}
	};

	return (
		<section
			id="contact"
			className="bg-green pt-10 pb-8 flex flex-col items-center px-10 md:px-20 lg:px-40 scroll-mt-[104]"
		>
			<div className="relative">
				<h3 className="font-bold text-2xl md:text-3xl text-pink-dark mb-10">{translations.contact.title}</h3>
				<Image
					src="/icons/arrow-pink.png"
					alt=""
					width={80}
					height={80}
					loading="lazy"
					className="absolute rotate-45 left-[-80px] md:left-[-250px] lg:left-[-300px] top-[-15px] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
				/>
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
				<div>
					<label htmlFor="name" className="label-form">
						{translations.contact.nameLabel}
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="input-form"
					/>
				</div>

				<div>
					<label htmlFor="email" className="label-form">
						{translations.contact.emailLabel}
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="input-form"
					/>
				</div>

				<div>
					<label htmlFor="message" className="label-form">
						{translations.contact.messageLabel}
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={5}
						className="input-form"
					/>
				</div>

				<div className="mt-4 flex justify-center">
					<Cta tag="button" type="submit" text={translations.contact.submit} disabled={status === "loading"} />
				</div>

				{status === "success" && <p className="text-pink-dark text-center mt-2">{translations.contact.success}</p>}
				{status === "error" && <p className="text-red-600 text-center mt-2">{translations.contact.error}</p>}
			</form>
			<div className="flex gap-4 mt-5">
				<a
					href="https://www.linkedin.com/in/julie-deshayes-21443727b"
					target="_blank"
					rel="noopener noreferrer"
					className="icon-social"
					aria-label="Profil LinkedIn - ouvre un nouvel onglet"
				>
					<LinkedinIcon className="w-7 h-7" />
				</a>
				<a
					href="https://github.com/Julie-Des"
					target="_blank"
					rel="noopener noreferrer"
					className="icon-social"
					aria-label="Profil Github - ouvre un nouvel onglet"
				>
					<GithubIcon className="w-7 h-7" />
				</a>
			</div>
		</section>
	);
}
