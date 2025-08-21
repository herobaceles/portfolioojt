import React from "react";
import ProfileImage from "../assets/profile.png";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const HeroSection = ({ id }) => {
  const skillClass =
    "px-3 py-1 sm:px-4 sm:py-2 bg-black text-white font-medium rounded-sm hover:bg-white hover:text-black border border-black transition cursor-pointer text-sm sm:text-base";

  const iconClass =
    "w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition cursor-pointer";

  return (
    <section
      id={id}
      className="w-full min-h-screen flex justify-center items-center text-black px-4 sm:px-6 md:px-12 pt-4 gap-6"
    >
      {/* Border Wrapper */}
      <div className="relative w-full max-w-5xl border-2 border-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-16 mb-2">
        {/* Text Content */}
        <div className="w-full md:w-auto max-w-2xl flex flex-col justify-between text-left">
          <div>
            {/* Headline */}
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-snug">
                I’m
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 glow-gold-subtle flex items-center gap-1">
                Hero Baceles <span className="wave-hand">👋</span>
              </h2>
            </div>

            <div className="mt-1 w-16 sm:w-20 h-1 bg-black rounded-sm"></div>

            {/* Subheading */}
            <p className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Software Developer
            </p>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-4">
              <span className={skillClass}>Web Development</span>
              <span className={skillClass}>Mobile App Development</span>
            </div>

            {/* Social Icons */}
            <div className="mt-10 mb-2 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100093355817903"
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/ihh.bace?igsh=OTdzbXlweHo2bXZv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/herobaceles"
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-2 sm:mt-3">
            <a
              href="https://www.messenger.com/t/100093355817903"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 
        text-black rounded-sm text-base sm:text-lg 
        hover:shadow-[0_0_35px_rgba(255,215,0,1),0_0_50px_rgba(255,223,0,0.8)] 
        hover:brightness-125 transition-all duration-300"
              >
                Get in Touch
              </button>
            </a>
          </div>
        </div>

        {/* Bento Grid (hidden on mobile) */}
        <div className="hidden md:grid w-80 h-80 grid-cols-3 grid-rows-3 gap-2 flex-shrink-0">
          <img
            src={ProfileImage}
            alt="Hero"
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-sm"
          />
          <div className="bg-gray-300 w-full h-full rounded-sm"></div>
          <div className="bg-gray-300 w-full h-full rounded-sm"></div>
          <div className="bg-gray-300 w-full h-full rounded-sm"></div>
          <div className="bg-gray-400 col-span-2 w-full h-full rounded-sm"></div>
        </div>
      </div>

      {/* Glow Animation and Wave Emoji Style */}
      <style jsx>{`
        @keyframes glow-subtle {
          0%,
          100% {
            text-shadow: 0 0 2px #ffd700, 0 0 4px #ffd700;
          }
          50% {
            text-shadow: 0 0 4px #ffd700, 0 0 8px #ffd700;
          }
        }
        .glow-gold-subtle {
          animation: glow-subtle 1.5s infinite alternate;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(14deg);
          }
          30% {
            transform: rotate(-8deg);
          }
          45% {
            transform: rotate(14deg);
          }
          60% {
            transform: rotate(-4deg);
          }
          75% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .wave-hand {
          display: inline-block;
          transform-origin: 70% 70%;
          animation: wave 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
