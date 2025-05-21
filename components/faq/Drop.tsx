"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Drop = ({
  open,
  title,
  description,
  id,
  handleOpen,
}: {
  open: boolean;
  title: string;
  description: string;
  id: string;
  handleOpen: (id: string) => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [description]);

  return (
    <div 
      className={cn(
        "w-full rounded-lg cursor-pointer overflow-hidden mb-2",
        open ? "bg-white p-1" : ""
      )}
      onClick={() => handleOpen(id)}
    >
      <motion.div
        layout="position"
        className={cn(
          "flex rounded-md bg-white items-center justify-between p-5",
          open && "bg-[rgb(240_241_232)]"
        )}
      >
        <p className="text-lg font-medium">{title}</p>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          height: open ? contentHeight : 0,
          opacity: open ? 1 : 0
        }}
        transition={{ 
          height: {
            duration: 0.4,
            ease: "easeInOut"
          },
          opacity: {
            duration: 0.3,
            delay: open ? 0.1 : 0
          }
        }}
        className="bg-white overflow-hidden"
      >
        <div ref={contentRef} className="p-5 text-zinc-600">
          {description}
        </div>
      </motion.div>
    </div>
  );
};

export default Drop;