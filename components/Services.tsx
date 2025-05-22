import SqPoint from "./ui/SqPoint";
import Card from "./services/Card";
import { Button } from "./ui/Button";
const Services = () => {
    return (
        <section className="py-5 px-3 md:px-10">
            <div className="bg-[#0B1714] flex flex-col gap-10 items-center text-white rounded-md pt-20 pb-[60px] px-10 max-md:px-3">
                <div className="flex flex-col items-center">
                    <div className="flex items-center bg-zinc-700/50 w-max px-2 rounded-full gap-1.5 mb-4">
                        <SqPoint color={"bg-primary"} />
                        <p className="font-medium text-sm text-primary">
                            Our Services
                        </p>
                        <SqPoint color={"bg-primary"} />
                    </div>
                    <div className="flex flex-col gap-2  px-10 text-center tracking-tight font-semibold">
                        <h1 className="text-[44px] max-md:text-[30px]">
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
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
                <Button>See Pricing</Button>
            </div>
        </section>
    );
};

export default Services;
