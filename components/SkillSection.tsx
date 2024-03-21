import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  TbBrandHtml5,
  TbBrandNextjs,
  TbBrandSass,
  TbBrandVscode,
  TbSql,
} from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";

//@ts-ignore
const Skill = ({ IconComponent, color, skillName }) => (
  <div className="skill">
    <IconComponent className={`icon ${color}`} />
    <span className="skill-name">{skillName}</span>
  </div>
);

const SkillSection = () => (
  <section className="skill-section my-8 pt-3">
    <div className="container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <Skill IconComponent={FaReact} color="blue" skillName="React" />
        <Skill IconComponent={FaNodeJs} color="green" skillName="Node.js" />
        <Skill IconComponent={FaDatabase} color="yellow" skillName="MongoDB" />
        <Skill IconComponent={FaServer} color="purple" skillName="Express.js" />
        <Skill
          IconComponent={FaJsSquare}
          color="yellow"
          skillName="JavaScript"
        />
        <Skill IconComponent={VscGithubAlt} color="white" skillName="Github" />
        <Skill IconComponent={TbBrandVscode} color="blue" skillName="VSCode" />
        <Skill IconComponent={FaGitAlt} color="red" skillName="Git" />
        <Skill IconComponent={TbBrandNextjs} color="blue" skillName="Next.js" />
        <Skill IconComponent={TbSql} color="orange" skillName="SQL" />
        <Skill IconComponent={TbBrandHtml5} color="red" skillName="HTML5" />
        <Skill IconComponent={TbBrandSass} color="pink" skillName="Sass" />
      </div>
    </div>
  </section>
);

export default SkillSection;
