import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { parseJwt } from "../modules/utils";

export default function WithNavbarLayout() {
  const navigate = useNavigate();
  const [userTokenObject, setUserTokenObject] = useState("");

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token !== null) {
      var tokenObjeto = parseJwt(token);
      setUserTokenObject(tokenObjeto);
      if (tokenObjeto.role === null) {
        navigate("/complete");
      } else if (tokenObjeto.role === "Admin") {
        navigate("/admin");
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {userTokenObject && (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </>
  );
}
