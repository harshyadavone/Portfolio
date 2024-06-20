import { FC } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/utils/Data";

const ProjectSection: FC = () => (
  <section className="md:px-6 lg:px-8 py-12">
    <h1 className="md:ml-10 pb-3 text-3xl font-other">Code:Work</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectSection;
