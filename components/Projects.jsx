import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/app/data/projectData';
import { BsGithub, BsLink } from 'react-icons/bs';

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="text-center font-bold text-4xl text-generalbg header-shadow">
        Proof of Work
        <hr className="w-50 h-1 my-3 mx-auto bg-slate-500 border-0 rounded" />
      </h2>
      {projects.map((project, idx) => {
        return (
          <div key={idx}>
            <div className="flex flex-col items-center sm:w-1/2 md:w-full md:mb-12 w-500 h-500 ">
              <div className="project-image">
                <div className="image_wrapper mt-4">
                  <Image
                    src={project.image}
                    alt="picture of my project"
                    height={500}
                    width={500}
                    className="rounded-xl shadow-xl hover:opacity-80 sm:mt-4"
                  />
                </div>
              </div>
              {/* paragraph section below */}
              <div className="mt-4 md:mt-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="md:flex md:items-center md:justify-between">
                  <span className="text-xl md:text-2xl xl:text-4xl mr-4 header-shadow text-fuchsia-500 block md:inline mt-2 mr-2">
                    {project.name}
                  </span>
                  <span className="text-slate-100 tracking-wide text-sm md:text-base xl:text-desc mt-4 mr-2">
                    {project.description}
                  </span>
                </p>
                {/* icon below */}
                <div className="flex items-center justify-end space-x-3 mt-4 md:mt-0">
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={20}
                      className=" text-fuchsia-500 hover:text-generalbg hover:translate-y-1 hover:opacity-80 cursor-pointer"
                    />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsLink
                      size={20}
                      className="text-fuchsia-500 hover:text-generalbg hover:translate-y-1 hover:opacity-80 cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
