"use client";
import { motion } from "framer-motion";
import ArrowDown from "@assets/icons/arrow-down.svg";
import SparkleIcon from "@assets/icons/sparkle.svg";
import StarIcon from "@assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
    return (
        <section id="HeroSection">
            <div className="py-32  md:py-48 lg:py-38 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
                {/* Background Rings */}
                <div
                    className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                    <div className="size-[620px] hero-ring"></div>
                    <div className="size-[820px] hero-ring"></div>
                    <div className="size-[1020px] hero-ring"></div>
                    <div className="size-[1220px] hero-ring"></div>
                    <div className="size-[1420px] hero-ring"></div>
                </div>

                {/* Floating Hero Elements */}
                <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
                    <SparkleIcon className="size-8 text-pink-400/20"/>
                </HeroOrbit>
                <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
                    <SparkleIcon className="size-5 text-yellow-300/20"/>
                </HeroOrbit>
                <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
                    <div className="size-2 rounded-full bg-yellow-400/20"/>
                </HeroOrbit>
                <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
                    <SparkleIcon className="size-10 text-pink-400/20"/>
                </HeroOrbit>
                <HeroOrbit size={520} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-12 text-yellow-300/20"/>
                </HeroOrbit>
                <HeroOrbit size={570} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-8 text-pink-400"/>
                </HeroOrbit>
                <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
                    <div className="size-2 rounded-full bg-pink-400/20"/>
                </HeroOrbit>
                <HeroOrbit size={700} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
                    <SparkleIcon className="size-14 text-yellow-300/20"/>
                </HeroOrbit>
                <HeroOrbit size={720} rotation={90} shouldOrbit orbitDuration="46s">
                    <div className="size-3 rounded-full bg-pink-400/20"/>
                </HeroOrbit>
                <HeroOrbit size={768} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-28 text-pink-400/50"/>
                </HeroOrbit>

                {/* Floating Animated Blobs */}
                <motion.div
                    className="absolute top-10 left-10 size-36 bg-yellow-400/30 rounded-full blur-xl animate-pulse"
                    initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 1}}/>
                <motion.div
                    className="absolute bottom-20 right-20 size-36 bg-pink-400/30 rounded-full blur-xl animate-pulse"
                    initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1, delay: 0.5}}/>

                {/* Hero Content */}
                <div className="text-center px-6">
                    <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}
                                className="flex flex-col items-center">
                        <div
                            className="mt-4 px-6 py-2 rounded-lg border border-gray-800 bg-gray-900/80 backdrop-blur-md flex items-center gap-3">
                            <div className="bg-yellow-300 size-2.5 rounded-full relative">
                                <div className="bg-pink-400 absolute inset-0 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-sm font-medium">Looking for My Next Challenge</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mt-6 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300"
                        initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}>
                        Bringing Ideas to Life Through Code
                    </motion.h1>
                    <motion.p className="mt-4 text-lg text-white/70" initial={{opacity: 0, y: 50}}
                              animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.6}}>
                        Driven to Develop Scalable and Efficient Software Solutions
                    </motion.p>

                    {/* Buttons */}
                    {/*<motion.div
                        className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.9}}
                    >
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-yellow-300">
                            <span className="font-semibold">Check Resume</span>
                            <ArrowDown className="size-4"/>
                        </button>

                        <a href="#ContactSection"
                           className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-yellow-300">
                            <span>👋🏻</span>
                            <span className="font-semibold">Get in Touch</span>
                        </a>

                    </motion.div>*/}
                </div>
            </div>
        </section>
    );
};
