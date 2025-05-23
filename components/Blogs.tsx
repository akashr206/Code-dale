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
            <div className="flex w-full max-md:flex-col max-md:gap-6 gap-2">
                <Card
                    title="Top 7 Pest Control Tips for a Bug-Free Home"
                    image="/blog1.avif"
                    date={"June 6, 2024"}
                />
                <Card
                    title="EcoGuard Pest Repellent Spray: Safe for Your Family and Pets"
                    image="/blog2.avif"
                    date={"September 2, 2024"}
                />
                <Card   
                    className="max-lg:hidden max-md:flex"
                    title="New Innovations in Pest Control: What’s Coming in 2024"
                    image="/blog1.avif"
                    date={"June 6, 2024"}
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
