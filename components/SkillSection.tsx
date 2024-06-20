import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  databasesAndOrm,
  librariesAndFrameworks,
  mainStack,
  otherTools,
} from "@/utils/Data";

export interface TechItem {
  name: string;
  color: string;
  description: string;
  icon: React.ElementType;
}

const SkillSection: React.FC = () => {
  const renderTechItems = (items: TechItem[]) => (
    <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6">
      {items.map((tech, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={`flex items-center font-other gap-2 px-3 py-2 rounded-md  border-gray-500/20 hover:bg-gray-500/10 transition-colors duration-300 cursor-pointer`}
            >
              <div className={`w-4 h-4 `} style={{ color: tech.color }}>
                <tech.icon />
              </div>
              {tech.name}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <span>{tech.description}</span>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );

  return (
    <section className="py-12 md:ml-16 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Technologies and Tools
      </h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-other mb-2 ">Main Stack</h3>
            {renderTechItems(mainStack)}
          </div>

          <div>
            <h3 className="text-xl font-other mb-2">
              Libraries and Frameworks
            </h3>
            {renderTechItems(librariesAndFrameworks)}
          </div>

          <div>
            <h3 className="text-xl  mb-2">Databases and ORM</h3>
            {renderTechItems(databasesAndOrm)}
          </div>

          <div>
            <h3 className="text-xl  mb-2">Other Tools</h3>
            {renderTechItems(otherTools)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;