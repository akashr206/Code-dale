"use client";
import { Button } from "./ui/Button";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
    return (
        <section className="pt-[150px] items-center px-10 text-white bg-[rgb(11_23_20)] flex flex-col gap-12 relative w-full">
            <div className="flex max-lg:flex-col justify-center max-lg:items-center max-lg:text-center">
                <div>
                    <h1 className="lg:text-[78px] md:text-5xl text-3xl space font-semibold">
                        Taking care of pests so you can{" "}
                        <span className="text-primary">relax</span> and{" "}
                        <span className="text-primary">breathe</span> easy.
                    </h1>
                </div>
                <div className="lg:ml-10 max-lg:items-center lg:w-[550px] w-[360px] gap-4 text-[15px] font-semibold text-muted/70 flex flex-col ">
                    <p>
                        Unwanted guests? Not anymore! Our expert team is here to
                        make sure your home is pest-free, stress-free, and 100%
                        comfortable.
                    </p>
                    <Button>Get Template</Button>
                </div>
            </div>

            <div className="flex w-full pb-10 h-[700px]">
                <div className="flex gap-4 w-full max-lg:flex-col">
                    <div className="lg:w-[65%] max-lg:h-[65%] relative">
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.7 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex gap-4 absolute bg-gray-50/20 backdrop-blur-lg md:w-4/5 rounded-xl border border-border/20 p-4 bottom-0 left-0 m-4"
                        >
                            <div className="shrink-0">
                                <Image
                                    width={40}
                                    height={40}
                                    alt="tiny"
                                    src={"/tiny-hero.avif"}
                                    className="w-[50px] h-[50px]"
                                ></Image>
                            </div>
                            <motion.div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg lg:text-2xl">
                                    Bug Hunters, At Your Service!
                                </h2>
                                <p>
                                    We don’t just get rid of pests—we kick them
                                    out with style! With over 1,000+ happy
                                    customers and 15 years of experience, we’ve
                                    become the neighborhood’s go-to team for
                                    pest control.
                                </p>
                            </motion.div>
                        </motion.div>
                        <Image
                            width={990}
                            height={660}
                            alt="hero"
                            src="/hero-1.avif"
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                    <div className="lg:w-[35%] max-lg:h-[35%]">
                        <Image
                            width={490}
                            height={660}
                            alt="hero-2"
                            src="/hero-2.avif"
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
