import { motion } from "framer-motion";
import projects from "../data/projects";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="border-t border-t-gray-600 mt-10"
      id="projects"
    >
      <div className="p-8 mt-5">
        <h3 className="text-xl font-semibold text-gray-300">Projects</h3>
        <p className="text-sm text-gray-400">Map applications I have built</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-gray-400 rounded-lg"
            >
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
              <div className="p-2 flex gap-1 ">
                {project.tags.map((tag) => (
                  <p key={tag} className="bg-black px-4 text-sm rounded-full">
                    {tag}
                  </p>
                ))}
              </div>
              <nav className="flex items-center gap-2 pl-4 mb-3">
                <a href="" className="text-sm text-blue-700">
                  🔗 Live demo
                </a>
                <a href="" className="text-sm text-blue-700">
                  📂 GitHub
                </a>
              </nav>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
