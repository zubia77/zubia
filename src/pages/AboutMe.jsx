import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
function AboutMe() {
    return (
        <div className="w-screen h-screen bg-color-20 flex flex-col text-color-10 lg:text-color-40 xl:text-color-10">
            <div className="flex flex-col w-screen h-[100vh]">
                <div className="h-[40vh] md:h-[100vh] md:-mt-[00px] bg-aboutMe bg-no-repeat bg-contain lg:bg-cover xl:bg-contain bg-right ">
                    {" "}
                    <Navbar className=""/>
                    <NavbarMobile />
                </div>
                <div className="w-[90vw] lg:w-[35vw] text-center m-4 text-xl flex items-center font-style10 font-bold md:text-2xl md:bg-color-20 md:w-screen md:m-0 md:items-start md:p-4 lg:-mt-[670px] xl:w-[50vw] lg:bg-transparent xl:-mt-[700px] xl:text-4xl">
                    {" "}
                    <p>
                        Hi, My name is Zubia Rashid, I am a motivated Frontend
                        Developer with skills in UI/UX Design and MERNstack. I
                        am hands on and willing to get the job done. I started a
                        course in Web Development last year and became very
                        passionate in this field. I am quite the creative
                        individual. Problems don't exist for me only challenges.
                        A friend recently said the following about me "you don't
                        sleep when you're tired, you sleep when the work is
                        done!" This about sums up my dedication when I am
                        focussed on a project.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;
