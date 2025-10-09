import Image from "next/image";

export default function HeaderImage() {
    return (
        <div className="flex gap-4.5">
            <div className="flex justify-center items-end">
                <Image src="/icons/arrow-pink2.png" alt="" width={115} height={115} />
            </div>
            <div>
                <Image src="/images/photo-profil.svg" alt="Photo de profil de Julie Deshayes" width={300} height={300} className="rounded-full border-[6] border-pink-hover shadow-[0_0_20px_#f9cada99]" />
            </div>
        </div>
    )
}