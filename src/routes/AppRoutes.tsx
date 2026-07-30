import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Upload from "../pages/Upload/Upload";
import Aspects from "../pages/Aspects/Aspects";
import Branches from "../pages/Branches/Branches";
import Trends from "../pages/Trends/Trends";
import Recommendations from "../pages/Recommendations/Recommendations";
import Settings from "../pages/Settings/Settings";
import Profile from "../pages/Profile/Profile";


export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>


        <Route element={<DashboardLayout />}>


          <Route path="/" element={<Dashboard />} />

          <Route path="/upload" element={<Upload />} />

          <Route path="/aspects" element={<Aspects />} />

          <Route path="/branches" element={<Branches />} />

          <Route path="/trends" element={<Trends />} />

          <Route 
            path="/recommendations" 
            element={<Recommendations />} 
          />


          <Route 
            path="/settings" 
            element={<Settings />} 
          />


          <Route 
            path="/profile" 
            element={<Profile />} 
          />


        </Route>


      </Routes>

    </BrowserRouter>

  );
}