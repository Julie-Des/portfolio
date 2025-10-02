import Image from "next/image";
import { leckerli } from "../fonts";
import Cta from "./CTA";

export default function HeaderText() {
	return (
		<div className="flex justify-center items-start w-1/2 pl-40">
			<Image src="/images/hand.png" alt="" width={40} height={40} />
			<div className="text-white pl-2.5 flex flex-col gap-4.5
            ">
				<h1 className="text-5xl">
					Bonjour, je suis <span className={`${leckerli.className} text-pink-dark ml-1.5`}>Julie</span>
				</h1>
				<p className="text-3xl">
					Intégratrice <span className="text-pink-dark">&</span> développeuse Front-end
				</p>
				<p className="text-xl">
					<span className="text-pink-dark font-semibold">Mon objectif :</span> donner vie à des sites web modernes, agréables à utiliser, inclusifs et plus
					respectueux de l'environnement
				</p>
				<div className="flex gap-5 mt-2.5">
					<Cta tag="a" text="Contactez-moi" href="#footer" />
					<Cta tag="a" text="Mon CV" href="/CV_Julie_Deshayes.pdf" imageSrc="/images/arrow-button.png" altText="Flèche indiquant que le lien mène à une page externe" external />
				</div>
			</div>
			
		</div>
	);
}
