"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

const Life = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

    return (
        <section ref={sectionRef} className="py-5 px-10 max-md:px-3">
            <div className="h-[660px] max-md:h-[580px] relative">
                <div>
                    <p className="text-[32px] max-w-[450px] leading-9 max-md:leading-7 max-md:right-2 max-md:bottom-2 max-md:text-[24px] max-md:w-[320px] font-[500] z-10 text-white absolute bottom-10 right-10">
                        Life is just better without bugs! Fresh air, peaceful
                        nights, and no creepy crawlers—because a pest-free home
                        is a happy home!
                    </p>
                </div>
                <div className="h-full w-full">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                        <motion.img
                            style={{ scale }}
                            transition={{ duration: 1 }}
                            alt="life"
                            width={1000}
                            height={800}
                            src={"/life.avif"}
                            className="rounded-2xl object-cover max-md:object- object-center h-full w-auto"
                        />
                        <span className="absolute inset-0 rounded-2xl bg-zinc-950/60 top-0 left-0 z-5"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Life;
