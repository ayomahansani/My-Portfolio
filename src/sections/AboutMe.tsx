"use client";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import mapImage from "@assets/images/sri-lanka-map.jpg";
import Image from "next/image";
import memojiGirl from "@assets/images/memoji-avatar-girl.png";
import {CardHeader} from "@/components/CardHeader";
import { motion } from "framer-motion";
import {useEffect, useRef, useState} from "react";
import profileImage from "@assets/images/profile-image.jpeg";

const titles = ["Full Stack Developer", "Programmer", "Tech Enthusiast", "Innovator"];
const hobbies = [
    {
        title: 'Reading',
        emoji: '‍📚️',
        left: '45%',
        top: '70%',
    },
    {
        title: 'Dancing',
        emoji: '💃🏻',
        left: '5%',
        top: '5%',
    },
    {
        title: 'Watching Films',
        emoji: '🎬',
        left: '50%',
        top: '5%',
    },
    {
        title: 'Travelling',
        emoji: '🏕️',
        left: '35%',
        top: '40%',
    },
    {
        title: 'Gaming',
        emoji: '🎮',
        left: '10%',
        top: '35%',
    },
    {
        title: 'Fitness',
        emoji: '🏋',
        left: '5%',
        top: '65%',
    },
    {
        title: 'Music',
        emoji: '🎶',
        left: '70%',
        top: '45%',
    },

]

export const AboutMeSection = () => {
    const constraintRef = useRef(null);
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader title="A Glimps Into My World" eyebrow="About Me" description="Learn more about who I am and what inspires me." />

                {/* Main About Me Section */}
                <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-12">

                    {/* 3D Animated Rotating Profile Picture */}
                    <motion.div
                        initial={{ scale: 0.9, rotateY: 0, rotateX: 0 }}
                        animate={{ scale: 1, rotateY: 0, rotateX: 0 }}
                        whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-2xl bg-gradient-to-r from-pink-400 to-yellow-300 p-1"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover object-top rounded-full"
                            />
                        </div>

                        {/* Subtle Glow */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{ opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>


                    {/* Animated Profile Info inside the Card */}
                    <Card className="h-auto p-8 w-full max-w-xl flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 to-pink-300 text-transparent bg-clip-text">Hi.. I'm Ayoma Hansani</h2>
                            <p className="text-lg text-gray-400 mt-2">I am a <span className="text-pink-400">{titles[currentTitle]}</span></p>
                            <p className="mt-4 text-white/80 max-w-md">
                                I am a dedicated software developer with a passion for creating
                                beautiful, efficient, and scalable applications. My journey in tech
                                is fueled by curiosity, creativity, and a love for solving complex
                                problems.
                            </p>
                        </motion.div>
                    </Card>

                </div>

                <div className="mt-10 flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeader className="px-6 py-6" title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." />
                            <div className="relative flex-1" ref={constraintRef}>
                                {hobbies.map(hobby => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-pink-400 to-yellow-200 rounded-full py-1.5 absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                        drag
                                        dragConstraints={constraintRef}
                                    >
                                        <span className="font-medium text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                            <Image src={mapImage} alt={"map"} className="h-full w-full object-cover"/>
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20
                                        rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30"
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-yellow-200 -z-20 animate-ping [animation-duration:2s]"></div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-yellow-200 -z-10"></div>
                                <Image src={memojiGirl} alt={"girl memoji"} className="size-20"/>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};
