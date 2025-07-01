"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/coming_soon", label: "Fire", color: "text-[#FE0002] hover:text-red-300" },
    { href: "/coming_soon", label: "Air", color: "text-[#C79FC4] hover:text-pink-100" },
    { href: "/coming_soon", label: "Earth", color: "text-[#61D337] hover:text-green-200" },
    { href: "/coming_soon", label: "Water", color: "text-[#049BDA] hover:text-blue-200" },
    { href: "/coming_soon", label: "Ether", color: "text-[#FEA211] hover:text-yellow-200" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#313131] backdrop-blur-md border-b border-slate-700/50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 left-0 text-4xl">
            <Link href="/" className="group flex font-extralight items-center">
              clover
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden text-xl lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={`${item.color} font-medium transition-colors duration-200`}
                >
                  {item.label}
                </Link>
                {hoveredItem === item.label && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                    Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact_us"
              className="group flex items-center space-x-2 bg-transparent border-2 border-white text-gray-400 hover:text-slate-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              <span>Contact Us</span>
              <svg
                className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu section */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Contact Button - Mobile */}
            <Link
              href="/contact_us"
              className="flex items-center space-x-2 bg-transparent border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
            >
              <span>Contact</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </Link>

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative p-2 rounded-md hover:bg-slate-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1 w-full h-0.5 bg-slate-300 transition-all duration-300 ${
                    isOpen ? "rotate-45 top-3" : ""
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-3 w-full h-0.5 bg-slate-300 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-5 w-full h-0.5 bg-slate-300 transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-3" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 pt-4 border-t border-slate-700/50">
            {navItems.map((item, index) => (
              <div 
                key={item.label}
                className="relative"
              >
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 ${item.color} hover:bg-slate-700/50 rounded-md text-sm font-medium transition-all duration-200`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
                <span className="absolute right-4 top-3 text-xs text-gray-400">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}