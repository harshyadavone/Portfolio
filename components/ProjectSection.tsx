// ProjectsSection.jsx
import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

const ProjectSection = () => (
  <section className="my-8">
    <div className="max-w-[74rem] mx-auto -px-2">
      <h2 className="text-white text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {/* Project Card */}
        <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:bg-gray-800 transition-colors duration-300">
          <div className="p-4">
            <h3 className="text-xl text-purple-500 font-bold mb-2">Vibe</h3>
            <p className="text-gray-300 mb-4">
              This is a Social media app built with React, Node.js, and MongoDB.
            </p>
            <div className="flex justify-end">
              <Link
                href="https://github.com/harshyadavone/vibe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors duration-300"
              >
                <span>GitHub</span>
                <RxExternalLink className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:bg-gray-800 transition-colors duration-300">
          <div className="p-4">
            <h3 className="text-xl text-blue-500 font-bold mb-2">
              Blog Website
            </h3>
            <p className="text-gray-300 mb-4">
              This is a blog website built with Next.js and Markdown.
            </p>
            <div className="flex justify-end">
              <Link
                href="https://github.com/harshyadavone/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors duration-300"
              >
                <span>GitHub</span>
                <RxExternalLink className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:bg-gray-800 transition-colors duration-300">
          <div className="p-4">
            <h3 className="text-xl text-emerald-500 font-bold mb-2">
              Blog Website
            </h3>
            <p className="text-gray-300 mb-4">
              This is a blog website built with Next.js and Markdown.
            </p>
            <div className="flex justify-end">
              <Link
                href="https://github.com/harshyadavone/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors duration-300"
              >
                <span>GitHub</span>
                <RxExternalLink className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectSection;
