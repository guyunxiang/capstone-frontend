import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { title: "Home", link: "/" },
    { title: "Book Store", link: "/all-books" },
    { title: "Library", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];

  return (
    <nav className="bg-zinc-800 text-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0">
          <Link class="flex" to="/">
            <img
              className="h-10 w-40 object-contain"
              src="./logo.jpeg"
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((item, index) => (
            <Link
              to={item.link}
              className="hover:text-blue-500 transition-all duration-300"
              key={index}
            >
              {item.title}
            </Link>
          ))}
          <div className="flex gap-4">
            <Link to="/login">
              <button className="px-4 py-2 bg-white text-zinc-800 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded hover:bg-white hover:text-blue-500 transition-all duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4">
          {links.map((item, index) => (
            <Link
              to={item.link}
              className="hover:text-blue-500 transition-all duration-300"
              key={index}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item.title}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <Link to="/login">
              <button className="px-4 py-2 bg-white text-zinc-800 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300 w-full">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded hover:bg-white hover:text-blue-500 transition-all duration-300 w-full">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
