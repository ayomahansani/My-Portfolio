import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { SkillsSection } from "@/sections/Skills";
import { Footer } from "@/sections/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <HeroSection />
            <ProjectsSection />
            <TapeSection />
            <SkillsSection />
            <Footer />
        </div>
    );
}
