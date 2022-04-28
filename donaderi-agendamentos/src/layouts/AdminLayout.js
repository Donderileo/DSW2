import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { parseJwt } from "../modules/utils";
export default function AdminLayout() {
  const navigate = useNavigate();
  const [userTokenObject, setUserTokenObject] = useState("");
  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token !== null) {
      var tokenObject = parseJwt(token);
      if (tokenObject.role !== "Admin") {
        navigate("/dashboard");
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
