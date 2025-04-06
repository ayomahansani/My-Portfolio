"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { Card } from "@/components/Card";

import ReactIcon from "@assets/icons/react.png";
import HtmlIcon from "@assets/icons/html5.png";
import CSSIcon from "@assets/icons/css.png";
import BootstrapIcon from "@assets/icons/bootstrap.png";
import ReduxIcon from "@assets/icons/redux.png";
import NextJsIcon from "@assets/icons/nextjs.png";
import TailwindCSSIcon from "@assets/icons/tailwindcss.png";
import MaterialUIIcon from "@assets/icons/material-ui.png";

import NodeIcon from "@assets/icons/nodejs.png";
import ExpressIcon from "@assets/icons/express-js.png";
import SpringBootIcon from "@assets/icons/spring-boot.png";
import SpringIcon from "@assets/icons/spring.png";
import MySQLIcon from "@assets/icons/mysql.png";
import MongoDBIcon from "@assets/icons/mongodb.png";
import HibernateIcon from "@assets/icons/hibernate.png";
import PrismaIcon from "@assets/icons/prisma.png";

import JavaIcon from "@assets/icons/java.png";
import JavaScriptIcon from "@assets/icons/javascript.png";
import TypeScriptIcon from "@assets/icons/typescript.png";
import PythonIcon from "@assets/icons/python.png";

import GitIcon from "@assets/icons/git.png";
import GithubIcon from "@assets/icons/github.png";
import PostmanIcon from "@assets/icons/postman.png";
import FigmaIcon from "@assets/icons/figma.png";

import KubernetesIcon from "@assets/icons/kubernetes.png";
import DockerIcon from "@assets/icons/docker.png";

const skills = [
    {
        title: "Frontend",
        skills: [
            { name: "React Js", image: ReactIcon },
            { name: "Redux", image: ReduxIcon },
            { name: "Next Js", image: NextJsIcon },
            { name: "HTML", image: HtmlIcon },
            { name: "CSS", image: CSSIcon },
            { name: "Tailwind CSS", image: TailwindCSSIcon },
            { name: "Bootstrap", image: BootstrapIcon },
            { name: "Material UI", image: MaterialUIIcon },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node Js", image: NodeIcon },
            { name: "Express Js", image: ExpressIcon },
            { name: "SpringBoot", image: SpringBootIcon },
            { name: "Spring", image: SpringIcon },
            { name: "MySQL", image: MySQLIcon },
            { name: "MongoDB", image: MongoDBIcon },
            { name: "Hibernate", image: HibernateIcon },
            { name: "Prisma", image: PrismaIcon },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "Java", image: JavaIcon },
            { name: "Javascript", image: JavaScriptIcon },
            { name: "Typescript", image: TypeScriptIcon },
            { name: "Python", image: PythonIcon },
        ],
    },
    {
        title: "Others",
        skills: [
            { name: "Git", image: GitIcon },
            { name: "Github", image: GithubIcon },
            { name: "Postman", image: PostmanIcon },
            { name: "Figma", image: FigmaIcon },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { name: "Kubernetes", image: KubernetesIcon },
            { name: "Docker", image: DockerIcon },
        ],
    },
];

export const SkillsSection = () => {
    return (
        <div className="py-20 lg:py-28 flex flex-col items-center">
            <div className="container">
                <SectionHeader
                    title="Unveiling My Expertise"
                    eyebrow="Skills"
                    description="A showcase of my technical proficiency."
                />

                {/* Skills Container */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-12">
                    {skills.map((category, index) => (
                        <Tilt key={index} options={{ max: 18, scale: 1.08 }}>
                            <Card className="w-[340px] md:w-[600px] lg:w-[400px] p-4 md:p-8 lg:p-8 shadow-2xl shadow-pink-400/20 hover:scale-108 transition-transform border border-gray-700">
                                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-400 text-center mb-6">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {category.skills.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 lg:px-5 lg:py-3 bg-gray-900 rounded-xl shadow-lg border border-gray-700 transition hover:border-pink-400 hover:shadow-yellow-400/30"
                                        >
                                            <Image src={skill.image} alt={skill.name} width={28} height={28} />
                                            <span className="text-gray-300 font-semibold">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    );
};
