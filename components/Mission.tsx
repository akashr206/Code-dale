import { Button } from "./ui/Button";
const Mission = () => {
    return (
        <section className="pb-10 max-md:pt-[50px] max-md:px-3 pt-[100px] px-10">
            <div className="flex flex-col gap-10 p-10 max-md:px-3 bg-zinc-900 text-white rounded-md">
                <div className="flex text-4xl max-md:text-[28px] flex-col gap-10">
                    <h2 className=" w-[600px] font-semibold">
                        Your local pest control experts with a mission to make
                        every home and business pest-free!
                    </h2>
                    <h2 className=" w-[600px] font-semibold">
                        We’re problem solvers! We’ve spent over a decade
                        perfecting our craft
                    </h2>
                </div>
                <div className="flex gap-10 max-lg:flex-col relative">
                    <div className="lg:w-[60%]">
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            loading="lazy"
                            src="https://www.youtube.com/embed/pkV0lJaR9hY?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1"
                            allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                    <div className="lg:w-2/5 flex flex-col items-center gap-10">
                        <ul className="text-lg flex text-zinc-300/90 font-medium flex-col gap-2 ">
                            <li className="flex gap-4 items-start">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5"></div>
                                We don’t just treat the problem—we stay ahead of
                                it! Our proactive monitoring service tracks pest
                                activity before it becomes a major issue,
                                ensuring long-term peace of mind.
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5"></div>
                                Our treatments are tough on pests but gentle on
                                your loved ones. We use non-toxic, eco-friendly
                                products that are safe for children, pets, and
                                the environment.
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5"></div>
                                If you’re not happy, we’re not happy. We offer a
                                full satisfaction guarantee—if pests return
                                within a set period, so do we, free of charge!
                            </li>
                        </ul>
                        <Button>Request for Custom Service</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
