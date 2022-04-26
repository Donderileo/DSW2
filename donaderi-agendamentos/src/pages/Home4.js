import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Home4() {
  let location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  return <div>{current}</div>;
}

export default Home4;
