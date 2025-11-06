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
  disabled?: boolean;
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
  disabled = false,
}: ButtonProps) {
  const baseClasses = `btn ${disabled ? "cursor-default" : "cursor-pointer"}`;

  // Image next to the text in the CTA
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
        unoptimized
      />
    );
  }

  // If CTA is an internal link
  if (!disabled && tag === "a" && href && !external) {
    return (
      <Link href={href} className={baseClasses}>
        {text}
        {sideElement}
      </Link>
    );
  }

  // If CTA is an external link
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

  // If CTA is a clickable button
  if (!disabled && tag === "button") {
    return (
      <button type={type} onClick={onClick} className={baseClasses}>
        {text}
        {sideElement}
      </button>
    );
  }

  // If CTA is a non-clickable element
  return (
    <div className={baseClasses}>
      {text}
      {sideElement}
    </div>
  );
}
