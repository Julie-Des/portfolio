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
  disabled?: boolean; // 👈 nouvelle prop
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
  disabled = false, // 👈 valeur par défaut
}: ButtonProps) {
  const baseClasses = `btn ${disabled ? "cursor-default" : "cursor-pointer"}`;

  // Image à côté du texte
  let sideElement = null;
  if (imageElement) {
    sideElement = imageElement;
  } else if (imageSrc) {
    sideElement = (
      <Image
        src={imageSrc}
        alt={altText || ""}
        width={20}
        height={20}
        className="w-[20px] h-[20px]"
      />
    );
  }

  // 🔹 Cas 1 : lien interne
  if (!disabled && tag === "a" && href && !external) {
    return (
      <Link href={href} className={baseClasses}>
        {text}
        {sideElement}
      </Link>
    );
  }

  // 🔹 Cas 2 : lien externe
  if (!disabled && tag === "a" && href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {text}
        {sideElement}
      </a>
    );
  }

  // 🔹 Cas 3 : bouton cliquable
  if (!disabled && tag === "button") {
    return (
      <button type={type} onClick={onClick} className={baseClasses}>
        {text}
        {sideElement}
      </button>
    );
  }

  // 🔹 Cas 4 : mode désactivé (non cliquable)
  return (
    <div className={baseClasses}>
      {text}
      {sideElement}
    </div>
  );
}
