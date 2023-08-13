import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "Next.js Blog",
        description: "Blog made I made using Nextv13, MDX, and Tailwind.",
        image: "/nextjsblogfrontpage.webp",
        github: "https://github.com/Vintagejojo/jojonxtblog23",
        link: "https://fiftyshadesofv.vercel.app/"
    },
    {
        name: "Vue to-do list",
        description: "Simple Todo list using Typescript, Vue.js, and Vite for lightning fast bundling.",
        image: "/todopreview.webp",
        github: "https://github.com/Vintagejojo/vuetodo",
        link: "https://shimmering-raindrop-68cbcc.netlify.app/"
    }
]

export default function Projects() {
    return (
        <section className="projects">
            <h2 className="text-center font-bold text-4xl">
                Proof of Work
                <hr className="w-50 h-1 my-3 mx-auto bg-slate-500 border-0 rounded" />
            </h2>
            {projects.map((project, idx)=> {
                return (
                    <div key={idx}>
                        <div className="flex flex-col items-center sm:w-1/2 md:w-full md:mb-12 w-500 h-500 rounded-xl shadow-xl hover:opacity-80">
                            <div className="md:w-1/2">
                                <Image 
                                src={project.image}
                                alt="picture of my project"
                                height={1000}
                                width={1000}
                                className="rounded-xl shadow-xl"
                                />
                            </div>
                            {/* paragraph section below */}
                            <div className="mt-4 md:mt-2 flex flex-col md:flex-row md:items-center md:justify-between">
                                <p>
                                    <span className="text-xl md:text-2xl xl:text-4xl text-gray-200 clashd block md:inline mt-2 mr-2">{project.name}
                                    </span>
                                    <span className="text-gray-400 tracking-wide text-sm md:text-base xl:text-desc mt-4 mr-2">
                                        {project.description}
                                    </span>
                                </p>
                                {/* icon below */}
                                <div className="flex items-center justify-end space-x-5 mt-3 md:mt-0">
                                    <Link href={project.github} target="_blank">
                                        <BsGithub 
                                        size={20}
                                        />
                                    </Link>
                                    <Link href={project.link} target="_blank"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}