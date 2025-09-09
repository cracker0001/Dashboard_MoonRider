import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import VehicleDashboard1 from "./pages/VehicleDashboard1";
import VehicleDashboard2 from "./pages/VehicleDashboard2";
import VehicleDashboard3 from "./pages/VehicleDashboard3";
import VehicleDashboard4 from "./pages/VehicleDashboard4";
import Graph1 from "./pages/Graph1";
import Graph2 from "./pages/Graph2";
import Graph3 from "./pages/Graph3";
import Graph4 from "./pages/Graph4";
import SummaryTable from "./pages/SummaryTable";

import "./index.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGraph, setShowGraph] = useState(false);

  // Pair dashboards with graphs
  const dashboardGraphPairs = [
    { dashboard: <VehicleDashboard1 />, graph: <Graph1 /> },
    { dashboard: <VehicleDashboard2 />, graph: <Graph2 /> },
    { dashboard: <VehicleDashboard3 />, graph: <Graph3 /> },
    { dashboard: <VehicleDashboard4 />, graph: <Graph4 /> },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Auto switch every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      if (showGraph) {
        if (currentIndex === dashboardGraphPairs.length - 1) {
          setShowGraph(false);
          setCurrentIndex(-1); // -1 means Summary
        } else {
          setCurrentIndex((prev) => prev + 1);
          setShowGraph(false);
        }
      } else {
        setShowGraph(true);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [showGraph, currentIndex]);

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

          <div className="content">
            <Routes>
              {/* Auto slideshow on root (/) */}
              <Route
                path="/"
                element={
                  currentIndex === -1 ? (
                    <SummaryTable />
                  ) : showGraph ? (
                    dashboardGraphPairs[currentIndex].graph
                  ) : (
                    dashboardGraphPairs[currentIndex].dashboard
                  )
                }
              />

              {/* Manual routes */}
              <Route path="/dashboard1" element={<VehicleDashboard1 />} />
              <Route path="/dashboard2" element={<VehicleDashboard2 />} />
              <Route path="/dashboard3" element={<VehicleDashboard3 />} />
              <Route path="/dashboard4" element={<VehicleDashboard4 />} />

              <Route path="/graph1" element={<Graph1 />} />
              <Route path="/graph2" element={<Graph2 />} />
              <Route path="/graph3" element={<Graph3 />} />
              <Route path="/graph4" element={<Graph4 />} />

              <Route path="/summary" element={<SummaryTable />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
