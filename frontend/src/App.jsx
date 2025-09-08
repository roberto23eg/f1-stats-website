import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Teams from "./pages/Teams";
import Stats from "./pages/Stats";
// import Footer from "./components/Footer";

function App() {
  return (
  //   <div className="min-h-screen bg-gray-100">
  //     <Navbar />
  //     <div className="p-6">
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/drivers" element={<Drivers />} />
  //         <Route path="/teams" element={<Teams />} />
  //         <Route path="/stats" element={<Stats />} />
  //       </Routes>
  //     </div>

  //     <Footer />
  //   </div>

  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="teams" element={<Teams />} />
        <Route path="stats" element={<Stats />} />
      </Route>
    </Routes>
  );
}

export default App;