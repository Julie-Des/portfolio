import HeaderText from "./HeaderText"
import HeaderImage from "./HeaderImage"

export default function Header() {
    return (
        <header id="header" className="bg-green w-full min-h-screen md:pt-30 px-8 md:px-12 flex flex-col lg:flex-row justify-center items-center gap-10">
            <HeaderText />
            <HeaderImage />
        </header>
    )
}