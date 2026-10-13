import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="about"
      className="py-20 px-6"
    >
      <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
        {/* badge */}
        <p className="bg-blue-100 text-blue-700 text-xs font-medium rounded-full px-4 py-1.5 mb-6">
          🗺️ GIS Frontend Developer
        </p>

        {/* main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-300 leading-tight mb-6">
          Building interactive <br /> maps that{" "}
          <span className="text-blue-500">tell stories</span>
        </h1>

        {/* subtitle */}
        <p className="text-gray-500 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          I build web-based GIS applications using Leaflet and Mapbox.
          Passionate about turning geographic data into beautiful, functional
          map experiences.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-12">
          {/* ✅ proper anchor tag not nav */}
          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-500 text-white py-2.5 px-6 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            👁️ View my projects
          </a>

          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 py-2.5 px-6 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-300 ease-in-out">
            ⬇ Download CV
          </button>
        </div>

        {/* stats with dividers */}
        <div className="flex items-center gap-8 mt-2">
          <div className="text-center">
            <p className="text-3xl font-semibold text-gray-400">8+</p>
            <p className="text-xs text-gray-400 mt-1">Projects built</p>
          </div>

          {/* divider line */}
          <div className="w-px h-10 bg-gray-700"></div>

          <div className="text-center">
            <p className="text-3xl font-semibold text-gray-400">2</p>
            <p className="text-xs text-gray-400 mt-1">Map libraries</p>
          </div>

          {/* divider line */}
          <div className="w-px h-10 bg-gray-700"></div>

          <div className="text-center">
            <p className="text-3xl font-semibold text-gray-400">6+</p>
            <p className="text-xs text-gray-400 mt-1">APIs integrated</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
