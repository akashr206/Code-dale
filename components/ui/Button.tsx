"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Button = ({
    children,
    className,
    secondaryColor = "bg-gray-50",
    secondaryTextColor = "text-black",
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    secondaryColor?: string;
    secondaryTextColor?: string;
}>) => {
    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            animate="initial"
            className={cn(
                "px-7 w-max py-3 font-semibold rounded-lg cursor-pointer relative overflow-hidden",
                className
            )}
        >
            <motion.div
                className={cn(
                    "absolute inset-0 bg-primary",
                    "flex items-center justify-center"
                )}
                variants={{
                    initial: { y: 0 },
                    hover: { y: "-100%" }
                }}
                transition={{ 
                    duration: 0.4, 
                    ease: "easeOut" 
                }}
            >
                <span className="text-primary-foreground">{children}</span>
            </motion.div>

            <motion.div
                className={cn(
                    "absolute inset-0",
                    secondaryColor,
                    secondaryTextColor,
                    "flex items-center justify-center"
                )}
                variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 }
                }}
                transition={{ 
                    duration: 0.4, 
                    ease: "easeOut" 
                }}
            >
                <span className="text-primary-foreground">{children}</span>
            </motion.div>

            <span className="opacity-0">{children}</span>
        </motion.button>
    );
};

export default Button;