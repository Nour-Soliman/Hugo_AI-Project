
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard"; // لاحظي أول حرف كبير "Pages"
import AdminContact from "./Pages/AdminContact"; // استدعاء الصفحة الجديدة
import ChefsPage from "./Pages/ChefsPage";
import ViolationsPage from "./Pages/ViolationsPage";
import HomePage from "./Pages/HomePage";
import  LiveMonitoring from "./Pages/LiveMonitoring";
import VideoUploadAnalysis from"./Pages/VideoUploadAnalysis";
import ChefsReports from "./Pages/ChefsReports";
import SettingsPage from "./Pages/SettingsPage"; 
import ChefPerformanceDashboard from "./Pages/ChefPerformanceDashboard";
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-contact" element={<AdminContact />} /> {/* الصفحة الجديدة */}
        <Route path="/chefs" element={<ChefsPage />} />
        <Route path="/violations" element={<ViolationsPage />} />
        <Route path="/live-monitoring" element={<LiveMonitoring />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/video-analysis" element={<VideoUploadAnalysis />} />
        <Route path="/chefs-reports" element={<ChefsReports />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/chef-performance" element={<ChefPerformanceDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;