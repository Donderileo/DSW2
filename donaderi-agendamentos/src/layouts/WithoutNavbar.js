import React from "react";
import { Outlet } from "react-router-dom";

export default function WithoutNavbarLayout() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
