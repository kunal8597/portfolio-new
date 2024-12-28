import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
import Journing from "/public/images/journing.png"
import Pixelquest from"/public/images/pixelquest.png"
import Livedocs from "/public/images/livedocs.png"
import Passop from "/public/images/passop.png"

import Header from "./Header";
import Particles from "./Particles";

const projects = [
  {
    title: "Journing",
    image: Journing,
    description:
      "A web-based journaling application with features for private entry creation and optional public sharing, designed to facilitate self-reflection and enhance mental wellness.",
    liveLink: "https://journing.vercel.app/",
    githubLink: "https://github.com/kunal8597/journing",
    tags: [
     "NextJs", "Typescript","Supabase", "Tailwind CSS", "shadcn"
    ],
  },
  {
    title: "LiveDocs",
    description:
      "LiveDocs offers real-time collaborative text editing with GitHub authentication via Clerk, robust document management with granular permissions, inline/threaded commenting, and real-time activity notifications, accessible across devices.",
    image: Livedocs,
    liveLink: "https://livedocs-lol.vercel.app/sign-in",
    githubLink: "https://github.com/kunal8597/livedocs",
    tags: ["NextJs", "Typescript", "Tailwind CSS", "shadcn", "Clerk", "Liveblocks"],
  },
  {
    title: "PixelQuest",
    
    description:
      "A simple online multiplayer game using HTML, CSS, vanilla JavaScript, and Firebase. The game will involve player movement, sprite animations, collision detection, and score tracking.",
      

  
    image: Pixelquest,
    liveLink: "https://github.com/kunal8597/pixelquest",
    githubLink: "https://github.com/kunal8597/pixelquest",
    tags: ["HTML","CSS","Javascript","Firebase"],
  },
  {
    title: "PassOP",
    description:
      "This password manager provides a secure and convenient way to store all your login information. With a user-friendly design and automatic updates, it simplifies password management and helps protect your online security.",
    image: Passop,
    liveLink: "https://github.com/kunal8597/passop",
    githubLink: "https://github.com/kunal8597/passop",
    tags: [
    "React",
    "Tailwind CSS", "Express","MongoDB"
    ],
  },
  
];

const Projects = () => {
  return (
   
   
    <div className="grid grid-rows pt-24 items-left justify-items-left min-h-screen p-8 pb-20 gap- sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      {/* Assuming Header and Particles components are imported and rendered correctly */}
      <Header/>
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={460} />

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg border-neutral-600 border-2 rounded-xl p-4 text-white hover:bg-gray-900 transition duration-300"
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            <div className="overflow-hidden rounded-lg ">
              <Link href={project.liveLink} target="_blank">
                <Image
                width={500} // Set fixed width
                height={600} 
                  src={project.image} // Ensure each project has an "image" property
                  alt={project.title}
                  className="rounded-s hover:scale-110 transition-transform duration-500"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
              <Link
                href={project.liveLink}
                className="text-2xl font-bold font-inter"
              >
                {project.title}
              </Link>
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="hover:scale-110 size-6" /> 
              </Link>
            </div>
            <div className="px-3 text-neutral-400 italic">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
