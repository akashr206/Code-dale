"use client"
import SqPoint from "./ui/SqPoint";
import Drop from "./faq/Drop";
import { useEffect, useState } from "react";

const FAQ = () => {
    const [open, setOpen] = useState<string[]>(["01"]);

    const handleOpen = (id: string) => {
        setOpen((prev) =>{
            if(prev.includes(id)){
                return prev.filter((item) => item !== id);
            }
            return [...prev, id];
        });
    }
    
    return (
        <section className="py-5 items-center max-md:py-[50px] max-md:px-[10px] px-[40px] flex gap-10 flex-col ">
            <div className="py-[100px] rounded-lg w-full px-10 flex flex-col items-center gap-10 bg-[rgb(240_241_232)]">
                <div>
                    <div className="flex flex-col items-center text-center gap-1">
                        <div className="flex items-center bg-zinc-200/50 w-max px-2 rounded-full gap-1.5 mb-4">
                            <SqPoint />
                            <p className="font-medium text-sm">
                                Frequently Asked Questions
                            </p>
                            <SqPoint />
                        </div>
                        <h2 className=" text-5xl max-md:text-[28px] max-w-[722px] font-semibold">
                            Wondering about something? Let’s clear things up!
                        </h2>
                        <p className="text-zinc-600 max-w-[460px] text-center">
                            We’ve gathered all the important info right here.
                            Explore our FAQs and find the answers you need.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2 max-w-[800px]">
                    <Drop
                        open={open.includes("01")}
                        handleOpen={handleOpen}
                        id="01"
                        title="What is Pest Control?"
                        description="Pest control is the practice of preventing or eliminating pests, such as insects, rodents, and other pests, from causing damage to property, crops, and other living organisms. It involves identifying the pest, determining the extent of the infestation, and implementing methods to control or eliminate the pest."
                    />
                    <Drop
                        open={open.includes("02")}
                        handleOpen={handleOpen}
                        id="02"
                        title="What is Pest Control?"
                        description="Pest control is the practice of preventing or eliminating pests, such as insects, rodents, and other pests, from causing damage to property, crops, and other living organisms. It involves identifying the pest, determining the extent of the infestation, and implementing methods to control or eliminate the pest."
                    />
                    <Drop
                        open={open.includes("03")}
                        handleOpen={handleOpen}
                        id="03"
                        title="What is Pest Control?"
                        description="Pest control is the practice of preventing or eliminating pests, such as insects, rodents, and other pests, from causing damage to property, crops, and other living organisms. It involves identifying the pest, determining the extent of the infestation, and implementing methods to control or eliminate the pest."
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
