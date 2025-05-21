import React from "react";
import Image from "next/image";
const Card = () => {
    return (
        <div className="flex flex-col flex-1 gap-2">
            <div className="h-[368px] rounded-lg">
                <Image src="/blog1.avif" alt="blog" width={600} height={300} className="w-full rounded-lg h-full object-cover object-center" />
            </div>
            <div className="px-2">
                <h4 className="text-lg font-[600]">Top 7 Pest Control Tips for a Bug-Free Home</h4>
                <p className="text-sm text-zinc-600">June 6, 2024</p>
            </div>
        </div>
    );
};

export default Card;
