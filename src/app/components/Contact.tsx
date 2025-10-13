"use client";

import { useState } from "react";
import { useTranslation } from "@/context/TranslationContext";
import Cta from "./CTA";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import Image from "next/image";

export default function Contact() {
	const { t } = useTranslation();

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
			className="bg-green pt-10 pb-10 flex flex-col items-center px-40 relative scroll-mt-[104]"
		>
			<h2 className="font-bold text-3xl text-pink-dark mb-10">{t.contact.title}</h2>

			<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
				<div>
                    <label htmlFor="name" className="label-form">
						{t.contact.nameLabel}
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
						{t.contact.emailLabel}
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
						{t.contact.messageLabel}
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
					<Cta tag="button" type="submit" text={t.contact.submit} disabled={status === "loading"}/>
				</div>

				{status === "success" && <p className="text-green-600 text-center mt-2">{t.contact.success}</p>}
				{status === "error" && <p className="text-red-600 text-center mt-2">{t.contact.error}</p>}
			</form>
            <div className="flex gap-2 mt-2.5">
                 <a href="mailto:julie.deshayes14@gmail.com" className="icon-social rounded-full" aria-label="Envoyer un e-mail">
                    <Image src="/icons/mail.png" width={36} height={28} alt="Mail" className="w-auto h-auto"/>
                </a>
                <a href="https://www.linkedin.com/in/julie-deshayes-21443727b" target="_blank" rel="noopener noreferrer" className="icon-social"><LinkedinIcon className="w-auto h-auto"/></a>
                <a href="https://github.com/Julie-Des" target="_blank" rel="noopener noreferrer" className="icon-social rounded-full"> <GithubIcon className="w-auto h-auto"/></a>
            </div>
		</section>
	);
}
