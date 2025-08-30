import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


const projects = [
  {
    title: "Django Music-System",
    description: "Django that allows users to upload, organize, and play music tracks. It features user authentication, playlist management, and a simple, responsive interface for streaming songs.",
    image: "/projects/d1.png",
    technologies: ["Javascript", "Tailwindcss", "Python', 'Django"],
    githublink: "https://github.com/shaik-imran46",
  },
  {
    title: "Personal Portfolio",
    description: "A modern personal portfolio website to showcase projects and skills.",
    image: "/projects/saki2.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    githublink: "https://github.com/shaik-imran46",
  },
];

const Projects = () => {
  return (
    <div>
      <section className="container px-4 py-20 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-semibold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50"
            >
              <div className="relative mb-4 overflow-hidden transition rounded-lg aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <Link
                  href={project.githublink}
                  target="_blank"
                  className="flex items-center gap-2 transition-colors text-secondary hover:text-primary"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>Code</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
