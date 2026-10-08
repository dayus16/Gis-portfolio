import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="border-t border-t-gray-600 mt-10">
      <div className="p-8 mt-5">
        <h3 className="text-xl font-semibold text-gray-300">Projects</h3>
        <p className="text-sm text-gray-400">Map applications I have built</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 space-x-4 space-y-3 mt-4">
          {projects.map((project) => (
            <div className="border border-gray-400 rounded-lg">
              <div
                className="relative border border-gray-400 rounded-t-lg h-30"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
                }}
              >
                <p className="absolute right-2 top-2 text-xs bg-blue-950 rounded-full px-4">
                  {project.library}
                </p>
                <span className="flex justify-center items-center text-3xl mt-7">
                  {project.emoji}
                </span>
              </div>
              <div className="p-2">
                <h3 className="text-xl text-gray-300 font-bold">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="p-2 flex gap-3 ">
                {project.tags.map((tag) => (
                  <p key={tag} className="bg-black px-4 rounded-full">{tag}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
