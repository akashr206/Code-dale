"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";

const Card = ({
    title,
    date,
    image,
    className,
}: Readonly<{
    title: string;
    date: string;
    image: string;
    className?: string;
}>) => {
    return (
        <motion.div
            className={cn(
                "flex flex-col cursor-pointer w-full flex-1 gap-2",
                className
            )}
        >
            <div className="h-96 overflow-hidden rounded-lg relative group">
                <div className="absolute z-10 top-3 left-4 text-white gap-2 border border-gray-400/50 rounded-full px-2 bg-zinc-50/20 backdrop-blur-lg flex items-center justify-center">
                    <Sparkles className="w-3 fill-primary text-primary" />
                    <p className="text-xs font-medium">Featured</p>
                </div>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                    <Button className="rounded-full pointer-events-auto">
                        Read Blog
                    </Button>
                </motion.span>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    <img
                        src={image}
                        alt="blog"
                        className="w-full rounded-lg h-full object-cover object-center"
                    />
                </motion.div>
            </div>

            <div className="px-2">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-sm text-zinc-600">{date}</p>
            </div>
        </motion.div>
    );
};

export default Card;
