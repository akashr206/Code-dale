"use client";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = ({
    name,
    description,
    image,
}: Readonly<{ name: string; description: string; image: string }>) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
    const cardVariants = {
        hover: {},
    };

    const imageVariants = {
        hover: {
            filter: "grayscale(1)",
            transition: { duration: 0.3 },
        },
    };
    return (
        <motion.div
            whileHover="hover"
            variants={cardVariants}
            ref={ref}
            className="p-[10px] h-[436px] cursor-pointer lg:h-[375px] flex max-lg:flex-col-reverse border border-border/10 justify-between gap-2 rounded-md bg-zinc-600/20 backdrop-blur-md"
        >
            <div className="flex flex-col flex-1 pt-[10px] h-[355px] pb-[5px] px-[10px] justify-between">
                <motion.h3
                    variants={{
                        hover: {
                            color: "var(--primary)",
                        },
                    }}
                    className="text-[22px] max-md:text-xl font-semibold"
                >
                    {name}
                </motion.h3>
                <div className="flex flex-col gap-2 justify-end">
                    <span className="w-full border-b border-zinc-700/60"></span>
                    <div>{description}</div>
                    <motion.div
                        variants={{
                            hover: {
                                color: "var(--primary)",
                            },
                        }}
                        className="py-1 flex items-center gap-2"
                    >
                        <ArrowRight className="w-4" />
                        <motion.p
                            variants={{
                                hover: {
                                    color: "var(--primary)",
                                    translateX: "5px",
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    },
                                },
                            }}
                            className="text-sm"
                        >
                            Know more
                        </motion.p>
                    </motion.div>
                </div>
            </div>
            <div className="lg:h-[355px] h-[200px] overflow-hidden rounded-md w-full flex-1">
                <motion.img
                    variants={imageVariants}
                    height={330}
                    width={350}
                    alt="service-image"
                    style={{ scale }}
                    transition={{ duration: 0.8, type: "spring", damping: 200, stiffness: 100 }}
                    src={image}
                    className="object-cover h-full w-full rounded-md"
                />
            </div>
        </motion.div>
    );
};

export default Card;
