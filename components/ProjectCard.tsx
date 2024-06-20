// ProjectCard.tsx
import { FC } from "react";
import { Dot } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkSquare02Icon } from "./Icons";
import { Project } from "@/utils/Data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <div className="card flex flex-col rounded-md border bg-zinc-900/20 border-gray-500/20 w-full p-3">
    <div className="flex items-center justify-between">
      <h1 className="font-other text-lg">{project.title}</h1>
      <div className="flex items-center justify-center gap-4 mr-2 mt-1">
        <Link
          href={project.githubLink}
          className="hover:bg-gray-500/10 p-2 rounded-lg transition-colors duration-300"
        >
          <GithubIcon />
        </Link>
        <Link
          href={project.liveLink}
          className="hover:bg-gray-500/10 p-2 rounded-lg transition-colors duration-300"
        >
          <LinkSquare02Icon />
        </Link>
      </div>
    </div>
    <div className="border border-b my-2 border-gray-500/10" />
    <div>
      {project.description.map((desc, index) => (
        <p key={index} className="font-other flex">
          <Dot />
          {desc}
        </p>
      ))}
      <div className="my-3" />
      <div className="flex gap-4 items-center justify-normal flex-wrap">
        {project.technologies.map((tech, index) => (
          <span key={index} className="flex items-center font-other gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full  `}
              style={{ backgroundColor: tech.color }}
            />{" "}
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
