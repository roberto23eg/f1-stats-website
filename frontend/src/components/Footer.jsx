import { NavLink } from "react-router-dom";

export default function Footer() {
  const linkClasses = ({ isActive }) =>
    `transition-colors ${
      isActive ? "text-red-500 font-semibold" : "text-gray-300 hover:text-red-500"
    }`;

  return (
    <footer className="bg-black text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left - Logo / Name */}
        <h2 className="text-lg font-bold text-red-600">
          F1 Stats
        </h2>

        {/* Center - Links */}
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/drivers" className={linkClasses}>Drivers</NavLink></li>
          <li><NavLink to="/teams" className={linkClasses}>Teams</NavLink></li>
          <li><NavLink to="/stats" className={linkClasses}>Stats</NavLink></li>
        </ul>

        {/* Right - Copyright */}
        <p className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} F1 Stats | Built with ❤️ by Roberto
        </p>
      </div>
    </footer>
  );
}