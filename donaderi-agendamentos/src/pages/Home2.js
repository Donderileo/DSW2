import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";

function Home2() {
    
    let location = useLocation();
    const [current, setCurrent] = useState(location.pathname)


    return (
        <div>
            {current}
        </div>
    )
}

export default Home2;