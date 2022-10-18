import React from "react";
import Navbar from "../components/Navbar";

function Landingpage() {
    return (
        <div className="w-screen flex">
          <div className="w-[50%] text-color-20"><Navbar className=""/></div>
            
            <div className="Background h-screen w-[50%] bg-main bg-cover bg-no-repeat "></div>
        </div>
    );
}

export default Landingpage;
