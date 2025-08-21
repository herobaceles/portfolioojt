import React from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaLaravel,
  FaUser,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFlutter,
} from "react-icons/si";

const About = ({ id }) => {
  const techItemClass =
    "flex flex-col items-center justify-center gap-2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white text-black rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition transform";

  const aboutBoxClass =
    "w-full rounded-lg p-4 sm:p-6 flex flex-col items-start justify-start gap-3 sm:gap-4 border border-gray-300 shadow-md bg-white text-black";

  return (
    <section
      id={id}
      className="w-full min-h-screen flex flex-col justify-center items-center text-black px-4 sm:px-6 md:px-12 py-8 sm:py-10 gap-6 sm:gap-8"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #FFD70033 100%)",
      }}
    >
      <div className="w-full max-w-5xl">
        {/* About Section */}
        <div className={aboutBoxClass}>
          <h1 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
            <FaUser color="#FFD700" /> About Me
          </h1>
          <p className="text-sm sm:text-base md:text-base leading-relaxed">
            I’m Hero Baceles, a software developer specializing in dynamic web
            and mobile applications. I enjoy solving problems, building scalable
            solutions, and learning new technologies.
          </p>
          <p className="text-sm sm:text-base md:text-base leading-relaxed">
            I focus on clean, maintainable code and delivering user-friendly
            experiences. Collaboration and modern tech excite me.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mt-8 sm:mt-10">
          <h2 className="flex items-center gap-2 w-full justify-center text-black text-lg sm:text-xl md:text-2xl font-bold mb-2">
            <FaCode color="#FFD700" /> Technologies
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-6 justify-items-center">
            <div className={techItemClass}>
              <FaJs color="#F7DF1E" size={24} /> JavaScript
            </div>
            <div className={techItemClass}>
              <FaReact color="#61DAFB" size={24} /> React
            </div>
            <div className={techItemClass}>
              <FaReact color="#61DAFB" size={24} /> React Native
            </div>
            <div className={techItemClass}>
              <SiFlutter color="#02569B" size={24} /> Flutter
            </div>
            <div className={techItemClass}>
              <SiTailwindcss color="#06B6D4" size={24} /> Tailwind
            </div>
            <div className={techItemClass}>
              <FaNodeJs color="#339933" size={24} /> Node.js
            </div>
            <div className={techItemClass}>
              <SiExpress color="#000000" size={24} /> Express.js
            </div>
            <div className={techItemClass}>
              <FaJava color="#007396" size={24} /> Java
            </div>
            <div className={techItemClass}>
              <FaLaravel color="#FF2D20" size={24} /> Laravel
            </div>
            <div className={techItemClass}>
              <SiMysql color="#4479A1" size={24} /> MySQL
            </div>
            <div className={techItemClass}>
              <SiMongodb color="#47A248" size={24} /> MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
