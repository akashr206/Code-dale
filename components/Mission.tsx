"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import { useEffect, useRef } from "react";
const Mission = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"],
    });
    const bg = useTransform(scrollYProgress, (progress)=>{
        if(progress < 0.5) return "white";
        return "black";
    });
    const text = useTransform(scrollYProgress, (progress)=>{
        if(progress < 0.5) return "black";
        return "white";
    });
    const pointer = useTransform(scrollYProgress, (progress)=>{
        if(progress < 0.5) return "black";
        return "var(--primary)";
    });


    return (
        <section
            ref={sectionRef}
            className="pb-10 max-md:pt-[50px] max-md:px-3 pt-[100px] px-10"
        >
            <motion.div
                style={{ backgroundColor: bg, color: text }}
                className="flex flex-col gap-10 p-10 transition-all duration-500 max-md:px-3 text-white rounded-md"
            >
                <div className="flex text-4xl max-md:text-[28px] flex-col gap-10">
                    <h2 className=" max-w-[600px] font-semibold">
                        Your local pest control experts with a mission to make
                        every home and business pest-free!
                    </h2>
                    <h2 className=" max-w-[600px] font-semibold">
                        We’re problem solvers! We’ve spent over a decade
                        perfecting our craft
                    </h2>
                </div>
                <div className="flex gap-10 max-lg:flex-col relative">
                    <div className="lg:w-[60%]">
                        <article role="presentation">
                            <link
                                rel="preconnect"
                                href="https://www.youtube.com"
                            />
                            <link
                                rel="preconnect"
                                href="https://www.google.com"
                            />
                            <iframe
                                className="w-full aspect-video rounded-lg"
                                loading="lazy"
                                src="https://www.youtube.com/embed/pkV0lJaR9hY?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0"
                                allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </article>
                    </div>
                    <div className="lg:w-2/5 flex flex-col items-center gap-10">
                        <ul className="text-lg flex text-zinc-300/90 font-medium flex-col gap-2 ">
                            <li className="flex gap-4 items-start">
                                <motion.div style={{backgroundColor: pointer}} className="w-2.5 h-2.5 rounded-full shrink-0 mt-2.5"></motion.div>
                                We don’t just treat the problem—we stay ahead of
                                it! Our proactive monitoring service tracks pest
                                activity before it becomes a major issue,
                                ensuring long-term peace of mind.
                            </li>
                            <li className="flex gap-4 items-start">
                                <motion.div style={{backgroundColor: pointer}} className="w-2.5 h-2.5 rounded-full shrink-0 mt-2.5"></motion.div>
                                Our treatments are tough on pests but gentle on
                                your loved ones. We use non-toxic, eco-friendly
                                products that are safe for children, pets, and
                                the environment.
                            </li>
                            <li className="flex gap-4 items-start">
                                <motion.div style={{backgroundColor: pointer}} className="w-2.5 h-2.5 rounded-full shrink-0 mt-2.5"></motion.div>
                                If you’re not happy, we’re not happy. We offer a
                                full satisfaction guarantee—if pests return
                                within a set period, so do we, free of charge!
                            </li>
                        </ul>
                        <Button>Request for Custom Service</Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Mission;
