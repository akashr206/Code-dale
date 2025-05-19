"use client";
import { useEffect } from "react";
import Lenis from "lenis";
const Main = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return <main>{children}</main>;
};

export default Main;
