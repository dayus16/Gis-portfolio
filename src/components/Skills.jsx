import { motion } from "framer-motion";
import skillset from "../data/skillset";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="skills"
      className="border-t border-t-gray-600 py-12 px-8"
    >
      {/* section header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-300">Skills</h2>
        <p className="text-sm text-gray-400 mt-1">Technologies I work with</p>
      </div>

      {/* skills grid — ✅ using gap not space-x/space-y */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillset.map((skill) => (
          <div
            key={skill.name}
            className="border border-gray-700 py-4 px-4 rounded-lg text-center hover:border-blue-500 transition-colors duration-300 cursor-default"
          >
            {/* emoji — ✅ block display with margin */}
            <span className="text-3xl block mb-2">{skill.emoji}</span>

            {/* skill name */}
            <h3 className="text-sm font-semibold text-gray-200">
              {skill.name}
            </h3>

            {/* skill level */}
            <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
