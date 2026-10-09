import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center mt-10"
        id="about"
      >
        <p className="bg-blue-500 text-xs rounded-full px-4 py-1 mb-6">
          🗺️ GIS Frontend Developer
        </p>
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl mb-6">
          Building interactive <br /> maps that{" "}
          <span className="text-blue-500">tell stories</span>{" "}
        </h1>
        <p className="text-gray-500 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          I build web-based GIS applications using Leaflet and Mapbox.
          Passionate about turning geographic data into beautiful, functional
          map experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          <nav className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-all duration-300 ease-in-out">
            <a href="#projects">👁️ View my projects</a>
          </nav>
          <button className="border border-gray-500 py-2 px-4 rounded-lg text-sm hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in-out">
            ⬇ Download CV
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-5 mt-4">
          <div className="text-center">
            <span className="text-3xl font-semibold">8+</span>
            <p className="text-sm">Projects built</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-semibold">2</span>
            <p className="text-sm">Map libraries</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-semibold">6+</span>
            <p className="text-sm">APIs integrated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
