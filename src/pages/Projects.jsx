import React, { useState } from "react";
import { FaGithub, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// AzureHub images
import Azure1 from "../assets/Azure/Screenshot 2025-05-20 225803.png";
import Azure2 from "../assets/Azure/Screenshot 2025-05-20 225822.png";
import Azure3 from "../assets/Azure/Screenshot 2025-05-20 225838.png";
import Azure4 from "../assets/Azure/Screenshot 2025-05-20 225902.png";
import Azure5 from "../assets/Azure/Screenshot 2025-05-20 225922.png";
import Azure6 from "../assets/Azure/Screenshot 2025-05-20 225956.png";
import Azure7 from "../assets/Azure/Screenshot 2025-05-20 230011.png";
import Azure8 from "../assets/Azure/Screenshot 2025-05-20 230735.png";
import Azure9 from "../assets/Azure/Screenshot 2025-05-21 002816.png";
import Azure10 from "../assets/Azure/Screenshot 2025-08-21 070614.png";

// MindMate images
import MindMate1 from "../assets/Mindmate/Screenshot 2025-08-21 082809.png";
import MindMate2 from "../assets/Mindmate/Screenshot 2025-08-21 082824.png";
import MindMate3 from "../assets/Mindmate/Screenshot 2025-08-21 082837.png";

const projects = [
  {
    title: "AzureHub Hotel Booking System",
    description:
      "A full-stack MERN application with chatbot and PayPal integration for booking confirmation.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI", "Bootstrap"],
    images: [
      Azure1,
      Azure2,
      Azure3,
      Azure4,
      Azure5,
      Azure6,
      Azure7,
      Azure8,
      Azure9,
      Azure10,
    ],
    github: "https://github.com/herobaceles/OPEN-AI-Powered-Booking-System",
  },
  {
    title: "MindMate",
    description:
      "An AI-powered mental wellness app with mood tracking, journaling, affirmations, and breathing exercises.",
    tech: ["React Native", "Expo", "Firebase", "GPT-4 API"],
    images: [MindMate1, MindMate2, MindMate3],
    github: null, // no public repo yet
    ongoing: true, // flag for ongoing development
  },
];

const ProjectsPage = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id={id}
      className="w-full flex flex-col justify-center items-center px-6 md:px-12 py-12 gap-12 bg-gradient-to-b from-white via-yellow-50 to-white"
    >
      {/* Section Header */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          My Projects
        </h1>
        <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full"></div>
      </div>

      {/* Centered Project Cards */}
      <div className="w-full flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer relative"
            onClick={() => openModal(project)}
          >
            {/* Ongoing badge */}
            {project.ongoing && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Ongoing
              </span>
            )}

            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-2xl transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 flex-grow mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900 transition"
                  >
                    GitHub <FaGithub />
                  </a>
                ) : (
                  <button className="px-4 py-2 bg-gray-400 text-white rounded-md text-sm font-medium cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-800 text-2xl hover:text-gray-600"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            <div className="relative w-full flex items-center justify-center">
              <button
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                onClick={prevImage}
              >
                <FaArrowLeft />
              </button>
              <img
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                className="w-full h-auto rounded-2xl max-h-[500px] object-contain transition-transform duration-300"
              />
              <button
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                onClick={nextImage}
              >
                <FaArrowRight />
              </button>
            </div>

            <h2 className="text-3xl font-bold mt-6 text-gray-900 flex items-center gap-2">
              {selectedProject.title}
              {selectedProject.ongoing && (
                <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                  Ongoing
                </span>
              )}
            </h2>
            <p className="mt-3 text-gray-700 text-center">
              {selectedProject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              {selectedProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 text-yellow-800 rounded-full font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
