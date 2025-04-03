import floralDreamsProject from "@assets/images/flower-project-background.jpg";
import lightSaasLandingPage from "@assets/images/crop-management-background.jpg";
import aiStartupLandingPage from "@assets/images/news-app-background.jpg";
import library from "@assets/images/library-project-background.jpg";
import Image from "next/image";
import CheckCircleIcon from "@assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";

const portfolioProjects = [
  {
    name: "Floral Dreams",
    year: "2025",
    title: "Flower Management System",
    results: [
      { title: "Streamlined inventory management" },
      { title: "Enhanced user experience with a responsive UI" },
      { title: "Secured data with JWT authentication" },
    ],
    link: "https://github.com/ayomahansani/Floral_Dreams-Frontend.git",
    image: floralDreamsProject,
  },
  {
    name: "NewsFlash",
    year: "2025",
    title: "News Mobile App",
    results: [
      { title: "Real-time news updates with seamless UX" },
      { title: "Optimized API requests with TanStack Query" },
      { title: "Secure user data with JWT and Prisma ORM" },
    ],
    link: "https://github.com/ayomahansani/News-App-Frontend.git",
    image: aiStartupLandingPage,
  },
  {
    name: "Green Shadow",
    year: "2024",
    title: "Crop Monitoring System",
    results: [
      { title: "Implemented RBAC for secure user management" },
      { title: "Secured authentication with JWT and Spring Security" },
      { title: "Optimized database operations with Hibernate and MySQL" },
    ],
    link: "https://github.com/ayomahansani/Crop_Monitoring_System_Frontend_JS_With_AJAX.git",
    image: lightSaasLandingPage,
  },
  {
    name: "Book Worm",
    year: "2023",
    title: "Library Management System",
    results: [
      { title: "Managed books, staff, and transactions with JavaFX" },
      { title: "Secured authentication and access control" },
      { title: "Optimized database operations with Hibernate ORM and MySQL" },
    ],
    link: "https://github.com/ayomahansani/Crop_Monitoring_System_Frontend_JS_With_AJAX.git",
    image: library,
  },
];

export const ProjectsSection = () => {
  return (
      <section className="pb-16 lg:py-24">
        <div className="container">
          <SectionHeader eyebrow="Tangible Outcomes" title="Featured Projects" description="Explore my journey of turning concepts into seamless and interactive solutions."/>
          <div className="flex flex-col gap-20 mt-10 md:mt-20">
            {portfolioProjects.map((project, projectIndex) => (
                <Card
                    key={project.title}
                    className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16 sticky"
                    style={{
                      top: `calc(64px + ${projectIndex * 40}px)`
                    }}
                >

                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">

                    <div className="lg:pb-16">

                      <div className="inline-flex gap-2 bg-gradient-to-r from-pink-400 to-yellow-300 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.name}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                            <li className="flex gap-2 text-sm text-white/50 md:text-base">
                              <CheckCircleIcon className="size-5 md:size-6"/>
                              <span>{result.title}</span>
                            </li>
                        ))}
                      </ul>
                      <a href={project.link}>
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8
                            md:w-auto px-6">
                          <span className="">Get Code</span>
                          <ArrowUpRightIcon className="size-4"/>
                        </button>
                      </a>
                    </div>

                    <div className="relative">
                      <Image src={project.image} alt={project.title}
                             className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                    </div>

                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};
