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
    "flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-24 sm:h-24 bg-white text-black rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition transform";

  const aboutBoxClass =
    "w-full rounded-lg p-5 sm:p-6 flex flex-col items-start justify-start gap-4 border border-gray-300 shadow-md bg-white text-black";

  return (
    <section
      id={id}
      className="w-full min-h-screen flex flex-col justify-center items-center text-black px-4 sm:px-6 md:px-12 py-10 gap-8"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #FFD70033 100%)",
      }}
    >
      <div className="w-full max-w-5xl">
        {/* About Section */}
        <div className={aboutBoxClass}>
          <h1 className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold mb-3">
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
        <div className="mt-10">
          <h2 className="flex items-center gap-2 w-full justify-center text-black text-xl sm:text-2xl md:text-2xl font-bold mb-2">
            <FaCode color="#FFD700" /> Technologies
          </h2>
          <div className="w-24 sm:w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
            <div className={techItemClass}>
              <FaJs color="#F7DF1E" size={28} /> JavaScript
            </div>
            <div className={techItemClass}>
              <FaReact color="#61DAFB" size={28} /> React
            </div>
            <div className={techItemClass}>
              <FaReact color="#61DAFB" size={28} /> React Native
            </div>
            <div className={techItemClass}>
              <SiFlutter color="#02569B" size={28} /> Flutter
            </div>
            <div className={techItemClass}>
              <SiTailwindcss color="#06B6D4" size={28} /> Tailwind
            </div>
            <div className={techItemClass}>
              <FaNodeJs color="#339933" size={28} /> Node.js
            </div>
            <div className={techItemClass}>
              <SiExpress color="#000000" size={28} /> Express.js
            </div>
            <div className={techItemClass}>
              <FaJava color="#007396" size={28} /> Java
            </div>
            <div className={techItemClass}>
              <FaLaravel color="#FF2D20" size={28} /> Laravel
            </div>
            <div className={techItemClass}>
              <SiMysql color="#4479A1" size={28} /> MySQL
            </div>
            <div className={techItemClass}>
              <SiMongodb color="#47A248" size={28} /> MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
