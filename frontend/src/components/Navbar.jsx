import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">F1 Stats</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/drivers" className="hover:underline">Drivers</Link>
        <Link to="/teams" className="hover:underline">Teams</Link>
        <Link to="/stats" className="hover:underline">Stats</Link>
      </div>
    </nav>
  );
}

export default Navbar;
