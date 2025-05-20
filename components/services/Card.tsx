import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Card = ({
    name,
    description,
    image,
}: Readonly<{ name: string; description: string; image: string }>) => {
    return (
        <div className="p-[10px] h-[436px] lg:h-[375px] flex max-lg:flex-col-reverse border border-border/10 justify-between gap-2 rounded-md bg-zinc-600/20 backdrop-blur-md">
            <div className="flex flex-col flex-1 pt-[10px] h-[355px] pb-[5px] px-[10px] justify-between">
                <h3 className="text-[22px] max-md:text-xl font-semibold">{name}</h3>
                <div className="flex flex-col gap-2 justify-end">
                    <span className="w-full border-b border-zinc-700/60"></span>
                    <div>{description}</div>
                    <div className="py-1 flex gap-2">
                        <ArrowRight className="w-4" />
                        <div>Know more</div>
                    </div>
                </div>
            </div>
            <div className="lg:h-[355px] h-[200px] w-full flex-1">
                <Image
                    height={330}
                    width={350}
                    alt="service-image"
                    src={image}
                    className="object-cover h-full w-full rounded-md"
                ></Image>
            </div>
        </div>
    );
};

export default Card;
