import HeaderText from "./HeaderText"
import HeaderImage from "./HeaderImage"

export default function Header() {
    return (
        <header className="bg-green w-full min-h-screen pt-30 flex justify-center items-center gap-4.5">
            <HeaderText />
            <HeaderImage />

        </header>
    )
}