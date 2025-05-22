"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FlowingMenu from "./flowing-menu/FlowingMenu";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const demoItems = [
        {
            link: "#",
            text: "About",
            image: "",
        },
        {
            link: "#",
            text: "Services",
            image: "",
        },
        {
            link: "#",
            text: "Pricing",
            image: "",
        },
        {
            link: "#",
            text: "Projects",
            image: "",
        },
        {
            link: "#",
            text: "Gallery",
            image: "",
        },
        {
            link: "#",
            text: "Blog",
            image: "",
        },
        {
            link: "#",
            text: "Reviews",
            image: "",
        },
        {
            link: "#",
            text: "Career",
            image: "",
        },
        {
            link: "#",
            text: "Contact",
            image: "",
        },
    ];
    
    return (
        <motion.header 
            className="fixed z-50 w-full p-2 backdrop-blur-sm"
            initial={{ height: "86px" }}
            animate={{ 
                height: isOpen ? "90vh" : "86px"
            }}
            transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0,
                damping: 30,
                stiffness: 90,
            }}
        >
            <div className="bg-[rgb(11_23_20)] relative z-50 text-white flex flex-col rounded-lg h-full w-full overflow-hidden">
                <div className="flex justify-between items-center px-8 py-3 min-h-[70px]">
                    <div>
                        <Image
                            src={"/logo.avif"}
                            height={50}
                            width={114}
                            alt="logo"
                        />
                    </div>

                    <div>
                        <ul className="flex max-lg:hidden items-center gap-4">
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">Services</Link>
                            </li>
                            <li>
                                <Link href="#">Pricing</Link>
                            </li>
                            <li>
                                <Link href="#">Projects</Link>
                            </li>
                            <li>
                                <Link href="#">Gallery</Link>
                            </li>
                            <li>
                                <Link href="#">Blog</Link>
                            </li>
                            <li>
                                <Link href="#">Reviews</Link>
                            </li>
                            <li>
                                <Link href="#">Career</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <motion.div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex flex-col cursor-pointer gap-1.5 items-end lg:hidden"
                        
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="bg-white rounded-md"
                            animate={{
                                width: isOpen ? "20px" : "28px",
                                height: "2px",
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 4 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                            className="bg-white rounded-md"
                            animate={{
                                width: isOpen ? "20px" : "18px",
                                height: "2px",
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -4 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>

                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.4,
                                ease: "easeOut"
                            }}
                            className="flex-1 flex justify-center items-center lg:hidden"
                        >
                            <FlowingMenu items={demoItems} />
                        </motion.div>
                    )}
            </div>
        </motion.header>
    );
};

export default Navbar;