import Image from "next/image";
import Link from "next/link";
import logo from "/public/flytech-White.png";
const Header = () => {
    return (
        <header className="flex max-width justify-between items-center py-4">
            <div>
                <Image src={logo} alt="Flytech It" className="w-48" />
            </div>
            <nav>
                <ul className="flex gap-4 font-light">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>.</li>
                    <li>
                        <Link href="/about">Services</Link>
                    </li>
                    <li>.</li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>.</li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <button className="bg-white py-2 px-4 text-black rounded-md font-semibold">Contact Now</button>
        </header>
    );
};

export default Header;
