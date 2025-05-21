"use client";
import { Shield, Bug, Clock, Award } from "lucide-react";
import SqPoint from "./ui/SqPoint";
import { motion } from "motion/react";

export default function AboutUs() {
    return (
        <section className=" mx-auto py-[100px] max-md:py-[50px] max-md:px-[10px] px-[40px] ">
            <div className="flex items-center bg-zinc-200/50 w-max px-2 rounded-full gap-1.5 mb-4">
                <SqPoint />
                <p className="font-medium text-sm">About Us</p>
                <SqPoint />
            </div>

            <div className="mb-6">
                <h1 className="text-[33px] font-semibold lg:leading-10 max-w-[80%] max-md:text-2xl max-lg:text-3xl text-zinc-900 mb-2">
                    <span className="font-bold ">Bug Hunters </span>
                    <span className="font-normal text-zinc-600">
                        is your partners in creating a{" "}
                    </span>
                    <span className=" text-zinc-900">
                        safe, comfortable, and pest-free space!{" "}
                    </span>
                    <span className="text-gray-600">With over </span>
                    <span className="text-zinc-900 ">
                        15 years of experience{" "}
                    </span>
                    <span className="text-zinc-600">
                        we've perfected the art of protecting homes and
                        businesses from unwelcome critters.
                    </span>
                </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-[55%]">
                    <img
                        src="/about.avif"
                        alt="Pest control professionals in protective gear spraying fog"
                        className="w-auto h-full rounded-lg shadow-md object-cover"
                    />
                </div>
                <div className="md:w-2/5 flex flex-col justify-end text-xl font-medium">
                    <p className=" text-zinc-700 mb-6">
                        We've mastered the art of evicting unwanted critters
                        using safe, eco-friendly methods that protect your
                        family and the planet.
                    </p>
                    <p className=" mb-4">
                        Ready to{" "}
                        <span className="font-bold text-zinc-900">
                            take back your home?
                        </span>{" "}
                        We're here to help, with fast, reliable service and a
                        smile!
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.7 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }} className="flex items-center bg-zinc-100/60 border-3 px-2.5 rounded-full py-1 gap-2">
                            <Shield className="h-6 w-6 text-zinc-800" />
                            <span className="font-bold">1,500+ </span>
                            <span className=" text-base">
                                Homes Protected
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.7 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }} className="flex items-center bg-zinc-100/60 border-3 px-2.5 rounded-full py-1 gap-2">
                            <Clock className="h-6 w-6 text-zinc-800" />
                            <span className="font-bold">15+ </span>
                            <span className=" text-base">
                                Years of Expertise
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.7 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }} className="flex items-center bg-zinc-100/60 border-3 px-2.5 rounded-full py-1 gap-2">
                            <Bug className="h-6 w-6 text-zinc-800" />
                            <span className="font-bold">25M+ </span>
                            <span className=" text-base">Bugs Busted</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.7 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}   className="flex items-center bg-zinc-100/60 border-3 px-2.5 rounded-full py-1 gap-2">
                            <Award className="h-6 w-6 text-zinc-800" />
                            <span className="font-bold">99.9% </span>
                            <span className=" text-base">
                                Pest-Free Success Rate
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
