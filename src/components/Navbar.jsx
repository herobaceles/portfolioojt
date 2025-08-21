import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ className = "", baseColor = "#fff", menuColor }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const links = ["hero", "projects", "about"];

  // Scroll spy for active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar
      let current = "hero";

      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section && section.offsetTop <= scrollPos) {
          current = link;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // navbar height offset
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] z-50 rounded-xl shadow-md ${className}`}
      style={{ backgroundColor: baseColor }}
    >
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <span
          className="text-xl font-bold text-black cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Hero.B
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`font-medium text-base lg:text-lg transition ${
                activeLink === link
                  ? "text-yellow-500 underline underline-offset-4 decoration-2"
                  : "text-black hover:opacity-70"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            className="bg-black text-white px-4 lg:px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            onClick={() => scrollToSection("projects")}
          >
            Get Started
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-stretch gap-3 p-4 bg-white border-t border-gray-200 shadow-md">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`font-medium text-base py-2 transition ${
                activeLink === link
                  ? "text-yellow-500 underline underline-offset-4 decoration-2"
                  : "text-black hover:opacity-70"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            className="mt-2 bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            onClick={() => scrollToSection("projects")}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
