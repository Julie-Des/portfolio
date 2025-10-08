import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import Cta from "./CTA";
import { useTranslation } from "@/context/TranslationContext"; // ✅ import du hook

export default function ProjectCard({ title, technos, image, logo, github, link }: any) {
  const { t } = useTranslation(); // ✅ on récupère t

  return (
    <div className="relative overflow-hidden border-4 border-[#f9cada] rounded-[15px] shadow-md cursor-pointer group h-[270px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 flex flex-col justify-center items-center text-center 
          bg-[#1b4332]/90 opacity-0 translate-y-full 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-in-out p-6
        "
      >
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-[#f9cada] mb-4">{technos}</p>
        <div className="flex gap-4 items-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f9cada] hover:text-[#f6b8cd] transition-colors duration-300"
          >
            <GithubIcon className="w-8 h-8" />
          </a>

          <Cta
            tag="a"
            text={t.projects.see}
            href={link}
            imageSrc="/images/arrow-button.png"
            altText="Lien vers le projet"
            external
          />
        </div>
      </div>

      {/* Logo du projet sous la card (désactivé pour le moment)
      {logo && (
        <div className="mt-4 flex justify-center">
          <Image
            src={logo}
            alt={`${title} logo`}
            width={100}
            height={40}
            className="h-10 object-contain"
          />
        </div>
      )} */}
    </div>
  );
}
