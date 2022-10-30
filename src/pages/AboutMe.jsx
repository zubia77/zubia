import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile"

function AboutMe() {
    return (
        <div className="w-screen h-screen bg-color-20 bg-aboutMe bg-no-repeat bg-contain flex flex-col  text-color-10 bg-right">
            <div className=" "> </div>
                <Navbar />
                <NavbarMobile />
                <div className="w-6/12 h-80 m-40  text-4xl flex items-center font-style10"> <p >Hi, My name is Zubia Rashid, I am a motivated Frontend Developer with skills in UI/UX Design and MERNstack. I am hands on and willing to get the job done. I started a course in Web Development last year and became very passionate in this field. I am quite the creative individual. Problems don't exist for me only challenges. A friend recently said the following about me "you don't sleep when you're tired, you sleep when the work is done!" This about sums up my dedication when I am focussed on a project.</p></div>
               
           
           
        </div>
    );
}

export default AboutMe;
