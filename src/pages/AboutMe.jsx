import React from "react";
import Navbar from "../components/Navbar";

function AboutMe() {
    return (
        <div className="w-screen flex">
            <div className="bg-color-20 w-[45%] text-color-10">
                <Navbar className="" />
            </div>
            <div className="bg-aboutMe w-[55%] h-screen bg-color-20 bg-cover"></div>
        </div>
    );
}

export default AboutMe;
