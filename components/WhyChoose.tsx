import SqPoint from "./ui/SqPoint";
import Card from "./why-choose/Card";
import { UserCheck } from "lucide-react";
const WhyChoose = () => {
    return (
        <section className="pt-[100px] max-md:items-center gap-10 max-md:pt-[50px] max-md:px-3 max-md:flex-col flex min-[1200px]:justify-between pb-[50px] px-10 relative">
            <div className="flex flex-col sticky top-[104px] max-md:static max-md:items-center max-md:text-center shrink-0 pr-2 gap-2 max-w-[412px] h-fit">
                <div className="flex items-center bg-zinc-200/50 w-max px-2 rounded-full gap-1.5">
                    <SqPoint />
                    <p className="font-medium text-sm">Why Choose Us?</p>
                    <SqPoint />
                </div>
                <h1 className="text-5xl max-md:text-[30px] font-bold">
                    Why we are your best choice!
                </h1>
            </div>
            <div className="grid grid-cols-2 pl-2 max-[1200px]:grid-cols-1 gap-12">
                <Card
                    title="Customer First, Always!"
                    description="Your satisfaction is our top priority. We're not happy until your home is pest-free and you're smiling."
                    icon={<UserCheck />}
                ></Card>
                <Card
                    title="Customer First, Always!"
                    description="Your satisfaction is our top priority. We're not happy until your home is pest-free and you're smiling."
                    icon={<UserCheck />}
                ></Card>
                <Card
                    title="Customer First, Always!"
                    description="Your satisfaction is our top priority. We're not happy until your home is pest-free and you're smiling."
                    icon={<UserCheck />}
                ></Card>
                <Card
                    title="Customer First, Always!"
                    description="Your satisfaction is our top priority. We're not happy until your home is pest-free and you're smiling."
                    icon={<UserCheck />}
                ></Card>
                <Card
                    title="Customer First, Always!"
                    description="Your satisfaction is our top priority. We're not happy until your home is pest-free and you're smiling."
                    icon={<UserCheck />}
                ></Card>
                <Card
                    title="Customer First, Always!"
                    description="Your satisfaction is our top priority. We're not happy until your home is pest-free and you're smiling."
                    icon={<UserCheck />}
                ></Card>
            </div>
        </section>
    );
};

export default WhyChoose;
