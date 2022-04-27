import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNavbarLayout from "./layouts/WithNavbar";
import WithoutNavbarLayout from "./layouts/WithoutNavbar";
import Dashboard from "./pages/Dashboard";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/color.css";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        <Route element={<WithoutNavbarLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<WithNavbarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/professional" element={<Home3 />} />
          <Route path="/appointments" element={<Home4 />} />
          <Route path="/account" element={<Home2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
