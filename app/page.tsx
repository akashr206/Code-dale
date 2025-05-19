import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
export default function Home() {
    return (
        <div className="font-[family-name:var(--font-inter-sans)]">
            <Hero />
            <AboutUs />
            <Services />
        </div>
    );
}
