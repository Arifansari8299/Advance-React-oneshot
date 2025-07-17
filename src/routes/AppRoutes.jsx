import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import UserDetail from "../pages/UserDetail";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import DashboardProfile from "../pages/DashboardProfile";
import DashboardSettings from "../pages/DashboardSettings";
import UsersAPI from "../pages/api-integration/UsersAPI";
import UserDetailAPI from "../pages/api-integration/UserDetailAPI";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Nested Routes */}
      <Route path="/users" element={<Users />} />

      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<DashboardProfile />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>
      <Route path="/api-users" element={<UsersAPI />} />
      <Route path="/api-users/:id" element={<UserDetailAPI />} />
    </Routes>
  );
};

export default AppRoutes;
