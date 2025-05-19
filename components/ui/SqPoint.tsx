import { cn } from "@/lib/utils";
const SqPoint = ({ color }: Readonly<{ color?: String }>) => {
    return (
        <div
            className={cn("h-2 w-2 bg-black rounded-[2px] rotate-45", color)}
        />
    );
};

export default SqPoint;
