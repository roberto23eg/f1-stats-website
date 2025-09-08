import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `transition-colors ${
      isActive ? "text-red-500 font-semibold" : "text-white hover:text-red-500"
    }`;

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo / Title */}
        <h1 className="font-extrabold text-2xl tracking-wide text-red-600">
          F1 Stats
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/drivers" className={linkClasses}>Drivers</NavLink></li>
          <li><NavLink to="/teams" className={linkClasses}>Teams</NavLink></li>
          <li><NavLink to="/stats" className={linkClasses}>Stats</NavLink></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/drivers" className={linkClasses} onClick={() => setIsOpen(false)}>Drivers</NavLink>
          <NavLink to="/teams" className={linkClasses} onClick={() => setIsOpen(false)}>Teams</NavLink>
          <NavLink to="/stats" className={linkClasses} onClick={() => setIsOpen(false)}>Stats</NavLink>
        </div>
      )}
    </nav>
  );
}