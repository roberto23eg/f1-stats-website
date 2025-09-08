import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content (pages will render here) */}
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}