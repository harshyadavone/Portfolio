import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa"; // Import React, Node.js, MongoDB, Express.js, and JavaScript icons
import {
  TbBrandHtml5,
  TbBrandNextjs,
  TbBrandSass,
  TbBrandVscode,
  TbHtml,
  TbSql,
} from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";

const SkillSection = () => (
  <section className="my-8">
    <div className="md:px-0 lg:px-12">
      <h2 className="text-
      3xl font-bold mb-4 text-white ">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
        <div className="bg-gray-900  p-4 rounded-lg flex items-center">
          <FaReact className="text-blue-500 mr-2" />
          <span className=" text-white">React</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <FaNodeJs className="text-green-500 mr-2" />
          <span className=" text-white">Node.js</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <FaDatabase className="text-yellow-500 mr-2" />
          <span className=" text-white">MongoDB</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <FaServer className="text-purple-500 mr-2" />
          <span className=" text-white">Express.js</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <FaJsSquare className="text-yellow-500 mr-2" />
          <span className=" text-white">JavaScript</span>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <VscGithubAlt className="mr-2 text-white" />
          <span className=" text-white">Github</span>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <TbBrandVscode className="mr-2 text-blue-500" />
          <span className=" text-white">Vscode</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <FaGitAlt className="mr-2 text-red-500" />
          <span className=" text-white">Git</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <TbBrandNextjs className="mr-2 text-blue-500" />
          <span className=" text-white">Nextjs</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <TbSql className="mr-2 text-orange-500" />
          <span className=" text-white">Sql</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <TbBrandHtml5 className="mr-2 text-red-500" />
          <span className=" text-white">Html</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center">
          <TbBrandSass className="mr-2 text-pink-500" />
          <span className=" text-white">Sass</span>
        </div>
      </div>
    </div>
  </section>
);

export default SkillSection;
