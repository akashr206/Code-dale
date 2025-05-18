import { cn } from "@/lib/utils";
export const Button = ({
    children,
    className
}: Readonly<{
    children: React.ReactNode;
    className?: String;
}>) => {
    return <button className={cn("px-7 w-max py-3 font-semibold rounded-lg text-primary-foreground cursor-pointer bg-primary", className)}>{children}</button>;
};
