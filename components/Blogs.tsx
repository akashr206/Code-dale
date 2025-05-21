import React from "react";
import SqPoint from "./ui/SqPoint";
import Card from "./blog/Card";
import { Button } from "./ui/Button";
const Blogs = () => {
    return (
        <section className="py-[100px] items-center max-md:py-[50px] max-md:px-[10px] px-[40px] flex gap-10 flex-col ">
            <div>
                <div className="flex flex-col items-center text-center gap-1">
                    <div className="flex items-center bg-zinc-200/50 w-max px-2 rounded-full gap-1.5 mb-4">
                        <SqPoint />
                        <p className="font-medium text-sm">How it Works</p>
                        <SqPoint />
                    </div>
                    <h2 className=" text-5xl max-md:text-[28px] max-w-[660px] font-semibold">
                        Pest control 101: Mastering your home defense
                    </h2>
                    <p className="text-zinc-600 max-w-[660px]">
                        Our blog breaks down the best practices for keeping your
                        home pest-free, with easy-to-follow guides and expert
                        insights.
                    </p>
                </div>
            </div>
            <div className="flex gap-2">
                <Card
                    title="Top most 7"
                    image="/blog1.avif"
                    date={"June 6, "}
                />
                <Card
                    title="Top most 7"
                    image="/blog1.avif"
                    date={"June 6, "}
                />
                <Card
                    title="Top most 7"
                    image="/blog1.avif"
                    date={"June 6, "}
                />
            </div>
            <div>
                <Button
                    secondaryColor="bg-black"
                    secondaryTextColor="text-gray-50"
                >
                    Explore all Blogs
                </Button>
            </div>
        </section>
    );
};

export default Blogs;
