import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <header className="fixed z-[99] h-[86px] w-full p-2 backdrop-blur-sm">
            <div className="bg-[rgb(11_23_20)] text-white flex justify-between items-center rounded-lg h-full w-full px-[30px] py-[10px]">
                <div>
                    <Image
                        src={"/logo.avif"}
                        height={50}
                        width={114}
                        alt="logo"
                    ></Image>
                </div>
                <div>
                    <ul className="flex max-lg:hidden items-center gap-4">
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link href="/career">Career</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
