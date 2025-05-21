import { Button } from "./ui/Button";
import SqPoint from "./ui/SqPoint";
import { MessageSquare } from "lucide-react";

const HowWorks = () => {
    return (
        <section className=" mx-auto py-[100px] items-center flex flex-col gap-10 max-md:py-[50px] max-md:px-[10px] px-[40px] ">
            <div className="flex flex-col items-center text-center gap-1">
                <div className="flex items-center bg-zinc-200/50 w-max px-2 rounded-full gap-1.5 mb-4">
                    <SqPoint />
                    <p className="font-medium text-sm">How it Works</p>
                    <SqPoint />
                </div>
                <h2 className=" text-5xl max-md:text-[28px] max-w-[660px] font-semibold">
                    Getting started is simple!
                </h2>
                <p className="text-zinc-600 max-w-[660px]">
                    With just three simple steps, you'll be on your way to a
                    pest-free home or business.
                </p>
            </div>
            <div className="flex gap-8 relative items-center md:py-5 md:px-[70px] flex-col">
                <div className="absolute max-md:hidden flex gap-1 z-5 p-5 top-0 left-0 rounded-lg bg-primary">
                    <MessageSquare className="w-5"></MessageSquare> STEP 1
                </div>
                <div className="absolute max-md:hidden flex gap-1 z-5 p-5 top-[212px] left-0 rounded-lg bg-primary">
                    <MessageSquare className="w-5"></MessageSquare> STEP 2
                </div>
                <div className="absolute max-md:hidden flex gap-1 z-5 p-5 top-[424px] left-0 rounded-lg bg-primary">
                    <MessageSquare className="w-5"></MessageSquare> STEP 3
                </div>
                <div className="border-1 max-md:hidden border-dashed border-black h-[164px] absolute top-16 left-[57px]">
                    <div className="bg-black h-2 w-2 rounded-full absolute top-0 left-0 -translate-x-1/2"></div>
                </div>
                <div className="border-1 max-md:hidden border-dashed border-black h-[164px] absolute top-[276px] left-[57px]">
                    <div className="bg-black h-2 w-2 rounded-full absolute top-0 left-0 -translate-x-1/2"></div>
                </div>
                <div className="md:h-[180px] p-2.5 w-full bg-zinc-100/50 rounded-lg max-w-[700px]">
                    <div className="flex p-2 gap-3 max-md:flex-col max-md:items-start max-md:gap-0 items-center h-full">
                        <div className="md:flex-1/2 flex items-center gap-2">
                            <Button
                                className={
                                    "px-2 md:hidden pointer-events-none py-2 flex gap-1 text-sm items-center"
                                }
                            >
                                {" "}
                                <MessageSquare className="w-5"></MessageSquare>{" "}
                                STEP 1
                            </Button>
                            <h3 className="text-xl max-md:text-lg h-max font-semibold">
                                Request a Free Consultation
                            </h3>
                        </div>
                        <p className="md:flex-1/2">
                            Our experts begin with a thorough inspection of your
                            property to identify the type of pests and assess
                            the extent of the infestation. and what’s keeping
                            them around.
                        </p>
                    </div>
                </div>
                <div className="md:h-[180px] p-2.5 w-full bg-zinc-100/50 rounded-lg max-w-[700px]">
                    <div className="flex p-2 gap-3 max-md:flex-col max-md:items-start max-md:gap-0 items-center h-full">
                        <div className="md:flex-1/2 flex items-center gap-2">
                            <Button
                                className={
                                    "px-2 md:hidden py-2 flex gap-1 text-sm items-center"
                                }
                            >
                                {" "}
                                <MessageSquare className="w-5"></MessageSquare>{" "}
                                STEP 2
                            </Button>
                            <h3 className="text-xl max-md:text-lg h-max font-semibold">
                                Get Your Customized Plan
                            </h3>
                        </div>
                        <p className="md:flex-1/2">
                            After inspecting your home or business, we’ll
                            provide you with a personalized pest control plan.
                            how long it will take, and the cost—no surprises!
                        </p>
                    </div>
                </div>
                <div className="md:h-[180px] p-2.5 w-full bg-zinc-100/50 rounded-lg max-w-[700px]">
                    <div className="flex p-2 gap-3 max-md:flex-col max-md:items-start max-md:gap-0 items-center h-full">
                        <div className="md:flex-1/2 flex items-center gap-2">
                            <Button
                                className={
                                    "px-2 md:hidden py-2 flex gap-1 text-sm items-center"
                                }
                            >
                                {" "}
                                <MessageSquare className="w-5"></MessageSquare>{" "}
                                STEP 3
                            </Button>
                            <h3 className="text-xl max-md:text-lg h-max font-semibold">
                                Sit Back & Relax
                            </h3>
                        </div>
                        <p className="md:flex-1/2">
                            Once you approve the plan, we’ll handle everything!
                            Our pest control experts will take care of the
                            problem quickly and effectively.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Button>Get in touch</Button>
            </div>
        </section>
    );
};

export default HowWorks;
