import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsPage from "../pages/Projects"; // <-- import Projects page
import About from "../pages/About"; // <-- import About page

const Home = () => {
  return (
    <div
      className="w-full min-h-screen relative bg-white text-black"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="-mt-12 md:-mt-16">
        <HeroSection id="hero" />
      </div>

      {/* Projects Section */}
      <div className="w-full mt-0">
        <ProjectsPage id="projects" />
      </div>

      {/* About Section - Full Screen */}
      <div className="w-full min-h-screen mt-0">
        <About id="about" />
      </div>
    </div>
  );
};

export default Home;
