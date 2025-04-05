"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ServiceCards } from "@/components/ServiceCards";
import WebDevelopment from "@assets/icons/web-development.png";
import MobileAppDevelopment from "@assets/icons/mobile-app-development.png";
import CustomSolutions from "@assets/icons/software-development.png";


// Define services list with imported images
const services = [
    {
        title: "Web Development",
        iconType: WebDevelopment, // Imported image object
        description: "Building high-performance, scalable websites with modern technologies for a seamless user experience.",
    },
    {
        title: "Mobile App Development",
        iconType: MobileAppDevelopment,
        description: "Creating responsive and feature-rich mobile applications for iOS and Android platforms.",
    },
    {
        title: "Custom Software Solutions",
        iconType: CustomSolutions,
        description: "Developing tailored software solutions to meet your business needs with efficiency and innovation.",
    },
];

export const ServiceSection = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    title="What I offer?"
                    eyebrow="Services"
                    description="Discover the services I provide to help bring your ideas to life with quality and efficiency."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <Card className="h-[400px] pt-4 flex items-center justify-center">
                        <ServiceCards
                            items={services}
                            className="flex justify-center"
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};
