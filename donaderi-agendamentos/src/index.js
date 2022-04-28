import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import WithNavbarLayout from "./layouts/WithNavbar";
import WithoutNavbarLayout from "./layouts/WithoutNavbar";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import CompleteRegister from "./pages/CompleteRegister";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ProfessionalAppointment from "./pages/ProfessionalAppointment";
import Professionals from "./pages/Professionals";
import Register from "./pages/Register";
import "./styles/color.css";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      <Route element={<WithoutNavbarLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complete" element={<CompleteRegister />} />
      </Route>
      <Route element={<WithNavbarLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route
          path="/professionals/:id"
          element={<ProfessionalAppointment />}
        />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
