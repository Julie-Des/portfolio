import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type ElementTag = "a" | "button" | "div" | "span";

type ButtonProps = Readonly<{
	text: string;
	tag: ElementTag;
	href?: string;
	onClick?: (event: React.MouseEvent) => void;
	type?: "button" | "submit" | "reset";
	imageSrc?: string;
	altText?: string;
	imageElement?: ReactNode;
	external?: boolean;
}>;


export default function Cta({
	text,
	tag,
	href,
	onClick,
	type = "button",
	imageSrc,
    altText,
	imageElement,
	external = false,
}: ButtonProps) {
	const baseClasses = "btn";

	// Create image next to the text
	let sideElement = null;

	if (imageElement) {
		sideElement = imageElement;
	}
	else if (imageSrc) {
		sideElement = (
			<Image
				src={imageSrc}
				alt={altText || ""}
				width={25}
				height={25}
			/>
		);
	}

	// Internal link
	if (tag === "a" && href && !external) {
		return (
			<Link href={href} className={baseClasses}>
				{text}
				{sideElement}
			</Link>
		);
	}

	// External link
	if (tag === "a" && href) {
		return (
			<a
				href={href}
				className={baseClasses}
				target={external ? "_blank" : "_self"} // Ouvre dans un nouvel onglet si external est vrai
				rel={external ? "noopener noreferrer" : undefined}
			>
				{text}
				{sideElement}
			</a>
		);
	}

	// Button
	if (tag === "button") {
		return (
			<button type={type} onClick={onClick} className={baseClasses}>
				{text}
				{sideElement}
			</button>
		);
	}

	// StyleComponent
	return React.createElement(
		tag,
		{ className: baseClasses, onClick: onClick },
		<>
			{text}
			{sideElement}
		</>
	);
}
