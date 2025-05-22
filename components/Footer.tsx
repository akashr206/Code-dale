"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Input } from "./ui/input";
import Button from "./ui/Button";
const Footer = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.8], [1.4, 1.0]);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <section ref={ref} className="p-10 relative">
            <div className="rounded-md relative overflow-hidden">
                <div className="absolute z-5 flex items-center justify-center inset-0 bg-[linear-gradient(to_bottom,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.71))] flex-col">
                    <div className="flex flex-col gap-4 items-center max-w-[700px] text-center text-white">
                        <h1 className=" text-5xl font-bold">
                            Get your free estimate today!
                        </h1>
                        <p className="text-lg">
                            Ready to say goodbye to unwanted guests? Fill out
                            the form below, and we’ll provide a customized,
                            no-obligation estimate tailored to your specific
                            pest control needs.
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 items-center border bg-gray-100/10 border-gray-400/50 rounded-md p-4 backdrop-blur-md"
                    >
                        <div className="flex gap-4">
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <Input
                                id="name"
                                className="bg-white"
                                placeholder="Name"
                            />
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <Input
                                id="email"
                                className="bg-white"
                                placeholder="Email"
                            />
                        </div>

                        <label htmlFor="phone" className="sr-only">
                            Phone
                        </label>
                        <Input
                            id="phone"
                            className="bg-white"
                            placeholder="Phone"
                        />
                        <Button>Get Estimate</Button>
                    </form>
                </div>
                <motion.img
                    style={{ scale }}
                    src="/footer.avif"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-full lg:h-[1000px] md:h-[900px] object-top object-cover"
                />
            </div>
        </section>
    );
};

export default Footer;
