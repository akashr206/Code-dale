import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Mission from "@/components/Mission";
export default function Home() {
    return (
        <div className="font-[family-name:var(--font-inter-sans)] relative">
            <Hero />
            <AboutUs />
            <Services />
            <WhyChoose />
            <Mission />
        </div>
    );
}
