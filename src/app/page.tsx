import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { SkillsSection } from "@/sections/Skills";
import { Footer } from "@/sections/Footer";
import { AboutMeSection} from "@/sections/AboutMe";
import {ContactSection} from "@/sections/Contact";
import {ServiceSection} from "@/sections/Service";

export default function Home() {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutMeSection />
            <SkillsSection />
            <TapeSection />
            <ProjectsSection />
            <ServiceSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
