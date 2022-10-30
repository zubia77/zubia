import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

function Landingpage() {
    return (
        <div className="w-screen flex justify-between bg-color-10">
            <div className="w-[50%] text-color-20 ">
                <Navbar />
                <NavbarMobile />
                <div className="text-color-20 w-full ml-24 mt-56 flex flex-col items-center font-style1">
                    <h2 className="greeting text-center text-4xl pb-20">
                        Hi I'm
                    </h2>
                    <h1 className="name text-center pb-20 text-4xl md:text-7xl">
                        Zubi
                    </h1>
                    <div className="">
                        <h3 className="profession text-center text-3xl font-style2">
                            A Frontend Developer{" "}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="Background hidden lg:block h-screen w-[50%] bg-main bg-cover bg-no-repeat "></div>{" "}
            <div className="h-screen lg:hidden">
                <img src="../images/logoZ.png" alt="logo" className="w-[200%]"/>
            </div>
        </div>
    );
}

export default Landingpage;
