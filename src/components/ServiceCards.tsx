import React from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export const ServiceCards = ({ items, className }: {
    items: {
        title: string;
        iconType: StaticImageData;
        description: string;
    }[];
    className?: string;
}) => {
    return (
        <div className={twMerge("services-container relative", className)}>
            <div className="services-wrapper">
                {items.map((item, index) => {
                    const angle = (360 / items.length) * index; // Evenly space items
                    return (
                        <div
                            key={item.title}
                            className="service-card absolute flex flex-col items-center gap-4 py-4 px-5 outline outline-2 outline-white/10 rounded-lg text-center w-[250px] shadow-lg shadow-pink-400/20 bg-gray-900"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(250px)`, // 3D positioning
                            }}
                        >
                            <Image
                                src={item.iconType}
                                alt={item.title}
                                width={64}
                                height={64}
                                className="bg-gradient-to-r from-pink-400 to-yellow-300"
                            />
                            <span className="font-semibold text-lg">{item.title}</span>
                            <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
