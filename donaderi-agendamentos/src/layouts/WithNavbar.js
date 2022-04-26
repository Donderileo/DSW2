import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function WithNavbarLayout() {
  const navigate = useNavigate();

  var user = localStorage.getItem("token");
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
