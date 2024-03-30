import Link from "next/link";
import { BsGithub } from "react-icons/bs";

//@ts-ignore
const ProjectCard = ({ title, description, link, colorClass }) => (
  <div className="project-card">
    <div className="card-content">
      <h3 className={`project-title ${colorClass}`}>{title}</h3>
      <p className="project-description">{description}</p>
      <Link
        href={link}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <p className="flex items-center">
          View on GitHub
          <BsGithub className="link-icon" />
        </p>
      </Link>
    </div>
  </div>
);

const ProjectSection = () => (
  <section className="project-section">
    <div className="container">
      <h2 className="section-title pb-3">Featured Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Vibe"
          description="This is a Social media app built with React, Node.js, and MongoDB."
          link="https://github.com/harshyadavone/vibe"
          colorClass="text-purple-500"
        />
        <ProjectCard
          title="Blog Website"
          description="This is a blog website built with Next.js and Markdown."
          link="https://github.com/harshyadavone/mern-blog-app"
          colorClass="text-blue-500"
        />
        <ProjectCard
          title="More coming soon"
          description="i'm working on more projects...."
          link="https://github.com/harshyadavone"
          colorClass="text-emerald-500"
        />
      </div>
    </div>
  </section>
);

export default ProjectSection;
