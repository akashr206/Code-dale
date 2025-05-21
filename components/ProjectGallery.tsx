import React from "react";
import SqPoint from "./ui/SqPoint";
import Image from "next/image";
const ProjectGallery = () => {
    return (
        <section className=" py-[100px] max-md:py-[50px] max-md:px-[10px] px-[40px] ">
            <div className="bg-[rgb(11_23_20)] rounded-lg pt-[50px] flex flex-col items-center text-center p-5 text-white gap-10 ">
                <div className="flex flex-col items-center text-center gap-1">
                    <div className="flex items-center bg-zinc-700/50 w-max px-2 rounded-full gap-1.5 mb-4">
                        <SqPoint color={"bg-primary"} />
                        <p className="font-medium text-sm text-primary">
                            Our Services
                        </p>
                        <SqPoint color={"bg-primary"} />
                    </div>
                    <h2 className=" text-5xl max-md:text-[28px] max-w-[660px] font-semibold">
                        Pest-free in action!
                    </h2>
                    <p className="text-zinc-300 font-medium max-w-[660px]">
                        With just three simple steps, you'll be on your way to a
                        pest-free home or business.
                    </p>
                </div>
                <div className="h-[344px] flex gap-2 justify-center">
                    <div className="max-md:hidden">
                        <Image
                            alt="gallery"
                            src="/gallery1.avif"
                            className="h-full w-auto rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>
                    <div>
                        <Image
                            alt="gallery"
                            src="/gallery2.avif"
                            className="h-full w-auto rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>
                    <div className="self-center">
                        <div className="w-[170px] flex items-center justify-center text-sm font-medium h-[170px] bg-primary rounded-full self-center text-[rgb(11_23_20)]"> VIEW GALLERY</div>
                    </div>
                    <div>
                        <Image
                            alt="gallery"
                            src="/gallery1.avif"
                            className="h-full w-auto rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>
                    <div className="max-md:hidden">
                        <Image
                            alt="gallery"
                            src="/gallery2.avif"
                            className="h-full w-auto rounded-md object-cover"
                            width={344}
                            height={344}
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
