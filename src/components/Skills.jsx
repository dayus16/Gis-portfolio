import React from "react";
import skillset from "../data/skillset";

const Skills = () => {
  return (
    <div className="border-t border-t-gray-600 mt-10" id="skill">
      <div className="p-8 mt-5">
        <h3 className="text-xl font-semibold text-gray-300">Skills</h3>
        <p className="text-sm text-gray-400">Technologies I work with</p>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 space-x-4 space-y-4 mt-4">
          {skillset.map((skill) => (
            <div
              key={skill.name}
              className="border border-gray-400 py-2 px-4 rounded-lg text-center"
            >
              <span className="text-2xl py-2 px-4">{skill.emoji}</span>
              <h3 className="text-sm font-semibold">{skill.name}</h3>
              <p className="text-xs text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
