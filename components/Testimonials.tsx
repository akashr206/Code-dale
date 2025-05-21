import React from "react";
import SqPoint from "./ui/SqPoint";
import Card from "./testimonial/Card";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    return (
        <section className="pb-20 relative max-md:pt-[50px] flex flex-col gap-10 items-center max-md:px-3 pt-[100px] px-10">
            <div className="flex flex-col items-center text-center gap-2 max-w-[800px]">
                <div className="flex items-center bg-zinc-200/50 w-max px-2 rounded-full gap-1.5">
                    <SqPoint />
                    <p className="font-medium text-sm">Customer Stories</p>
                    <SqPoint />
                </div>
                <h1 className="text-5xl max-md:text-[30px] font-semibold">
                    What our happy customers are buzzing about!
                </h1>
            </div>
            <div className="w-full">
                <div className="max-w-[calc(100vw-16px)] bg-gray-50 rounded-xl py-5">
                    <Marquee className="p-[10px]" gradient={false} speed={80}>
                        <Card
                            title="No More Creepy Crawlies!"
                            message="I used to dread going into the basement, but thanks to these guys, I haven’t seen a single bug in months! Super friendly service, and they were in and out in no time. Highly recommend!"
                            author="Percive D."
                            location="Phoenix, Arizona"
                            image="/user2.avif"
                            review="Google Review"
                        ></Card>
                        <Card
                            title="No More Creepy Crawlies!"
                            message="I used to dread going into the basement, but thanks to these guys, I haven’t seen a single bug in months! Super friendly service, and they were in and out in no time. Highly recommend!"
                            author="Ryan Martinez"
                            location="Phoenix, Arizona"
                            image="/user1.avif"
                            review="Facebook Review"
                        ></Card>
                        <Card
                            title="No More Creepy Crawlies!"
                            message="I used to dread going into the basement, but thanks to these guys, I haven’t seen a single bug in months! Super friendly service, and they were in and out in no time. Highly recommend!"
                            author="Leonard M."
                            location="Phoenix, Arizona"
                            image="/user2.avif"
                            review="Linkedin Review"
                        ></Card>
                        <Card
                            title="No More Creepy Crawlies!"
                            message="I used to dread going into the basement, but thanks to these guys, I haven’t seen a single bug in months! Super friendly service, and they were in and out in no time. Highly recommend!"
                            author="Ryan Martinez"
                            location="Phoenix, Arizona"
                            image="/user1.avif"
                            review="Trustpilot Review"
                        ></Card>
                    </Marquee>
                </div>
                <div className="flex gap-2 max-lg:flex-col">
                    <div className="bg-[rgb(240_241_232)] gap-10 flex max-md:flex-col relative p-[10px] lg:pr-6 rounded-xl">
                        <div className="flex-1/2 max-md:w-full max-md:max-w-[500px] mx-auto aspect-[9/16]">
                            <iframe
                                src="https://www.youtube.com/embed/y0__MG9RdZY?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0&color=white"
                                allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                loading="lazy"
                                title="Youtube Video"
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                        <div className="flex flex-1/2 gap-10 px-2.5 py-5 flex-col justify-center">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-xl">
                                    Highly recommend!
                                </h3>
                                <p className="text-[rgb(25_28_27)] text-base">
                                    "....These guys are amazing! They got rid of
                                    our termite problem fast and efficiently.
                                    Now, we can enjoy our home without worrying
                                    about structural damage. Highly recommend
                                    their service!...."
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl">
                                    Lucian H.
                                </h3>
                                <p className="text-[rgb(25_28_27)] text-base">
                                    Carmel, IN
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[rgb(240_241_232)] gap-10 flex max-md:flex-col relative p-[10px] lg:pr-6 rounded-xl">
                        <div className="flex-1/2 max-md:w-full max-md:max-w-[500px] mx-auto aspect-[9/16]">
                            <iframe
                                src="https://www.youtube.com/embed/y0__MG9RdZY?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0&color=white"
                                allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                loading="lazy"
                                title="Youtube Video"
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                        <div className="flex flex-1/2 gap-10 px-2.5 py-5 flex-col justify-center">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-xl">
                                    Highly recommend!
                                </h3>
                                <p className="text-[rgb(25_28_27)] text-base">
                                    "....These guys are amazing! They got rid of
                                    our termite problem fast and efficiently.
                                    Now, we can enjoy our home without worrying
                                    about structural damage. Highly recommend
                                    their service!...."
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl">
                                    Lucian H.
                                </h3>
                                <p className="text-[rgb(25_28_27)] text-base">
                                    Carmel, IN
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
