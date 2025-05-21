import React from "react";
import Image from "next/image";
const Card = ({
    title,
    date,
    image,
}: Readonly<{ title: string; date: string; image: string }>) => {
    return (
        <div className="flex flex-col flex-1 gap-2">
            <div className="h-[368px] rounded-lg">
                <Image
                    src={image}
                    alt="blog"
                    width={600}
                    height={300}
                    className="w-full rounded-lg h-full object-cover object-center"
                />
            </div>
            <div className="px-2">
                <h4 className="text-lg font-[600]">
                    {title}
                </h4>
                <p className="text-sm text-zinc-600">{date}</p>
            </div>
        </div>
    );
};

export default Card;
