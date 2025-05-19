import SqPoint from "./ui/SqPoint";
import Card from "./services/Card";
const Services = () => {
    return (
        <section className="py-5 px-10">
            <div className="bg-[#0B1714] flex flex-col gap-10 items-center text-white rounded-md pt-20 pb-[60px] px-16">
                <div className="flex flex-col items-center">
                    <div className="flex items-center bg-zinc-700/50 w-max px-2 rounded-full gap-1.5 mb-4">
                        <SqPoint color={"bg-primary"} />
                        <p className="font-medium text-sm text-primary">
                            About Us
                        </p>
                        <SqPoint color={"bg-primary"} />
                    </div>
                    <div className="flex flex-col gap-2 w-[800px] px-10 text-center tracking-tight font-semibold">
                        <h1 className="text-[44px]">
                            Pest problem? We’ve got your back!
                        </h1>
                        <p className="text-base font-semibold text-muted/60">
                            From tiny ants to sneaky rodents, we tackle all
                            kinds of pests with a smile! Whether they're
                            creeping, crawling, or flying, our expert team will
                            show them the door.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Card
                        image="/service-1.avif"
                        name="Cockroach Conquerers"
                        description="Roaches are tough, but we’re tougher! Our team eliminates these sneaky pests, leaving your home clean and critter-free."
                    ></Card>
                    <Card
                        image="/service-1.avif"
                        name="Cockroach Conquerers"
                        description="Roaches are tough, but we’re tougher! Our team eliminates these sneaky pests, leaving your home clean and critter-free."
                    ></Card>
                    <Card
                        image="/service-1.avif"
                        name="Cockroach Conquerers"
                        description="Roaches are tough, but we’re tougher! Our team eliminates these sneaky pests, leaving your home clean and critter-free."
                    ></Card>
                    <Card
                        image="/service-1.avif"
                        name="Cockroach Conquerers"
                        description="Roaches are tough, but we’re tougher! Our team eliminates these sneaky pests, leaving your home clean and critter-free."
                    ></Card>
                </div>
            </div>
        </section>
    );
};

export default Services;
