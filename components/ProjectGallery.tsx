"use client";
import { useState, useEffect, useRef } from "react";
import SqPoint from "./ui/SqPoint";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
const ProjectGallery = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"],
    });
    const [value, setValue] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setValue(v < 0.5 ? 0 : 1);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);
    return (
        <section
            ref={sectionRef}
            className=" py-[100px] max-md:py-[50px] relative h-[200vh] max-md:px-[10px] px-[40px] "
        >
            <div className="bg-[rgb(11_23_20)] sticky top-30 rounded-lg pt-[50px] flex flex-col items-center text-center p-5 text-white gap-10 ">
                <div className="flex flex-col items-center text-center gap-1">
                    <div className="flex items-center bg-zinc-700/50 w-max px-2 rounded-full gap-1.5 mb-4">
                        <SqPoint color={"bg-primary"} />
                        <p className="font-medium text-sm text-primary">
                            Our Services
                        </p>
                        <SqPoint color={"bg-primary"} />
                    </div>
                    <h2 className=" text-5xl max-md:text-[28px] max-w-[660px] font-semibold">
                        Pest-free in action!
                    </h2>
                    <p className="text-zinc-300 font-medium max-w-[660px]">
                        With just three simple steps, you'll be on your way to a
                        pest-free home or business.
                    </p>
                </div>
                <div className="h-[344px] w-full flex gap-2 justify-center">
                    <div className="max-md:hidden w-full">
                        <Image
                            alt="gallery"
                            src="/gallery1.avif"
                            className="h-full w-full rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            src="/gallery2.avif"
                            className="h-full w-full rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <motion.div
                            initial={{
                                scale: 0,
                                filter: "blur(10px)",
                            }}
                            animate={{
                                opacity: value,
                                scale: value,
                                width: value * 170,
                                height: value * 170,
                                filter: "blur(0px)",
                            }}
                            transition={{
                                duration: 1,
                                ease: [0, 0.4, 0.26, 0.25],
                            }}
                            style={{ scale: value }}
                            className=" flex items-center justify-center text-sm font-medium bg-primary rounded-full text-[rgb(11_23_20)]"
                        >
                            {" "}
                            VIEW GALLERY
                        </motion.div>
                    </div>

                    <div className="w-full">
                        <Image
                            alt="gallery"
                            src="/gallery1.avif"
                            className="h-full w-full rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>
                    <div className="max-md:hidden w-full">
                        <Image
                            alt="gallery"
                            src="/gallery2.avif"
                            className="h-full w-auto rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
